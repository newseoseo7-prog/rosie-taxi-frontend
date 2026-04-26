'use client';
import { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { FiCamera, FiRefreshCw, FiAlertCircle, FiCheck, FiX, FiSettings, FiUpload, FiAlertTriangle } from 'react-icons/fi';

interface CardDetails {
    name?: string;
    expiry?: string;
    card_number?: string;
    error?: string;
}

type FeatureUnavailableReason =
    | 'permission-denied'
    | 'no-camera'
    | 'insecure-context'
    | 'browser-unsupported'
    | 'camera-in-use'
    | 'unknown-error'
    | null;

interface CardDetectionProps {
    onCapture?: (imageData: string) => void;
    onClose?: () => void;
    onCardDataReceived?: (data: {
        cardNumber: string;
        expiryMonth: string;
        expiryYear: string;
        fullName: string;
    }) => void;
}

const CardDetection = ({ onCapture, onClose, onCardDataReceived }: CardDetectionProps) => {
    // State management
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hasCard, setHasCard] = useState(false);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [captureReady, setCaptureReady] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState<string | null>(null);
    const [result, setResult] = useState<CardDetails | null>(null);
    const [permissionStatus, setPermissionStatus] = useState<PermissionState>('prompt');
    const [unavailableReason, setUnavailableReason] = useState<FeatureUnavailableReason>(null);
    const [isChrome, setIsChrome] = useState(false);
    const [cameraInitializing, setCameraInitializing] = useState(false);
    const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
    const [success, setSuccess] = useState(false);
    const detectionRef = useRef<number | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const modelLoadedRef = useRef(false);
    const [cardOrientation, setCardOrientation] = useState<'horizontal' | 'vertical' | null>(null);
    const [countdown, setCountdown] = useState<number | null>(null);
    const countdownRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (image) {
            uploadImage().then(r => {});
        }
    }, [image]);
    // Check environment on component mount
    useEffect(() => {
        checkBrowserCompatibility();
        checkPermissions();
        loadModel();

        return () => {
            stopCamera();
            if (detectionRef.current) {
                cancelAnimationFrame(detectionRef.current);
            }
            if (countdownRef.current) {
                clearInterval(countdownRef.current);
            }
        };
    }, []);

    // When we get results, fill the form in the parent component
    useEffect(() => {
        if (result && onCardDataReceived && !result.error) {
            const { name, expiry, card_number } = result;

            if (name && expiry && card_number) {
                try {
                    // Parse the expiry date (assuming format MM/YY or MM/YYYY)
                    const [expiryMonth, expiryYear] = expiry.split('/').map(part => part.trim());

                    // Convert 2-digit year to 4-digit
                    const fullYear = expiryYear.length === 2
                        ? `20${expiryYear}`
                        : expiryYear;

                    // Format card number with spaces every 4 digits
                    const formattedCardNumber = card_number.replace(/\s/g, '')
                        .replace(/(\d{4})/g, '$1 ')
                        .trim();

                    onCardDataReceived({
                        fullName: name,
                        cardNumber: formattedCardNumber,
                        expiryMonth: expiryMonth,
                        expiryYear: fullYear,
                    });

                    setSuccess(true);
                } catch (err) {
                    console.error('Error parsing card data:', err);
                    setError('Failed to parse card details. Please enter manually.');
                }
            }
        }
    }, [result, onCardDataReceived]);

    const loadModel = async () => {
        if (modelLoadedRef.current) return;

        try {
            await tf.ready();
            const loadedModel = await cocoSsd.load({
                base: 'lite_mobilenet_v2'
            });
            setModel(loadedModel);
            modelLoadedRef.current = true;
            setIsLoading(false);
        } catch (err) {
            setError('Failed to load AI model');
            console.error('Model loading error:', err);
        }
    };

    const checkBrowserCompatibility = () => {
        setIsChrome(/chrome|chromium|crios/i.test(navigator.userAgent));

        if (!window.isSecureContext) {
            setUnavailableReason('insecure-context');
            setError('Camera access requires a secure connection (HTTPS)');
            return;
        }

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setUnavailableReason('browser-unsupported');
            setError('Your browser does not support camera access');
            return;
        }
    };

    const checkPermissions = async () => {
        try {
            if (navigator.permissions) {
                const permission = await navigator.permissions.query({ name: 'camera' as any });
                updatePermissionState(permission.state);
                permission.onchange = () => updatePermissionState(permission.state);
            }
        } catch (err) {
            console.warn('Permissions API not supported', err);
        }
    };

    const updatePermissionState = (state: PermissionState) => {
        setPermissionStatus(state);
        if (state === 'denied') {
            setUnavailableReason('permission-denied');
        } else {
            setUnavailableReason(null);
        }
    };

    // Handle camera lifecycle
    useEffect(() => {
        if (isActive && !unavailableReason && model) {
            initializeCamera();
        } else {
            stopCamera();
        }

        return () => {
            stopCamera();
        };
    }, [isActive, model, unavailableReason, facingMode]);

    const initializeCamera = async () => {
        setCameraInitializing(true);
        setError(null);

        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');

            if (videoDevices.length === 0) {
                setUnavailableReason('no-camera');
                throw new Error('No camera devices found');
            }

            await startCameraStream();
        } catch (err) {
            handleCameraError(err);
            setIsActive(false);
        } finally {
            setCameraInitializing(false);
        }
    };

    const startCameraStream = async () => {
        try {
            const constraints = {
                video: {
                    facingMode: facingMode,
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            };

            const stream = await navigator.mediaDevices.getUserMedia(constraints);

            if (!stream.active) {
                throw new Error('Camera stream not active');
            }

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                streamRef.current = stream;
                setStream(stream);
                stream.getVideoTracks()[0].addEventListener('ended', handleStreamEnded);
                detectCard();
            }
        } catch (err) {
            throw err;
        }
    };

    const toggleCamera = () => {
        setFacingMode(prev => prev === 'environment' ? 'user' : 'environment');
    };

    const handleStreamEnded = () => {
        console.log('Camera stream ended unexpectedly');
        setUnavailableReason('camera-in-use');
        setError('Camera was disconnected or is being used by another application');
        setIsActive(false);
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => {
                track.removeEventListener('ended', handleStreamEnded);
                track.stop();
            });
            streamRef.current = null;
            setStream(null);

            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        }

        if (detectionRef.current) {
            cancelAnimationFrame(detectionRef.current);
            detectionRef.current = null;
        }

        if (countdownRef.current) {
            clearInterval(countdownRef.current);
            countdownRef.current = null;
            setCountdown(null);
        }
    };

    const handleCameraError = (err: unknown) => {
        console.error('Camera error:', err);
        let reason: FeatureUnavailableReason = 'unknown-error';
        let errorMessage = 'Could not access camera';

        if (err instanceof Error) {
            switch (err.name) {
                case 'NotAllowedError':
                    reason = 'permission-denied';
                    errorMessage = 'Camera access was denied. Please allow camera permissions.';
                    break;
                case 'NotFoundError':
                    reason = 'no-camera';
                    errorMessage = 'No camera found on this device.';
                    break;
                case 'NotReadableError':
                    reason = 'camera-in-use';
                    errorMessage = 'Camera is already in use by another application.';
                    break;
                case 'OverconstrainedError':
                    errorMessage = 'Camera configuration not supported. Try a different camera.';
                    break;
                default:
                    errorMessage = err.message || errorMessage;
            }
        }

        setUnavailableReason(reason);
        setError(errorMessage);
    };

    const detectCard = async () => {
        if (!model || !videoRef.current) return;

        try {
            const predictions = await model.detect(videoRef.current);

            // Expanded list of objects to detect
            const cardObjects = predictions.filter(pred => {
                const className = pred.class.toLowerCase();
                return (
                    [
                        'wallet', 'credit card', 'debit card', 'cell phone',
                        'remote', 'id card', 'license', 'passport', 'business card',
                        'tablet', 'smartphone', 'driver license', 'identity card',
                        'card', 'id', 'driving license'
                    ].includes(className) ||
                    (className.includes('card') && pred.score > 0.3) ||
                    (className.includes('license') && pred.score > 0.3) ||
                    (className.includes('id') && pred.score > 0.3) ||
                    (className.includes('document') && pred.score > 0.3)
                );
            });

            const cardDetected = cardObjects.length > 0;
            setHasCard(cardDetected);

            // Calculate video dimensions
            const videoWidth = videoRef.current.videoWidth || 1280;
            const videoHeight = videoRef.current.videoHeight || 720;
            const videoArea = videoWidth * videoHeight;

            // Check each detected object for capture readiness (orientation-agnostic)
            let captureFeedback: string[] = [];
            let orientationFeedback: string = '';
            const readyForCapture = cardObjects.some(pred => {
                const [x, y, width, height] = pred.bbox;
                const objectArea = width * height;
                const areaRatio = objectArea / videoArea;

                // Orientation-independent requirements
                const isLargeEnough = areaRatio > 0.05;
                const isConfidentEnough = pred.score > 0.3;
                const isCentered = (
                    x > videoWidth * 0.1 &&
                    x + width < videoWidth * 0.9 &&
                    y > videoHeight * 0.1 &&
                    y + height < videoHeight * 0.9
                );

                // Check orientation but don't penalize either way
                const aspectRatio = width / height;
                const isPortrait = aspectRatio < 0.8;
                const isLandscape = aspectRatio > 1.2;
                const isSquare = !isPortrait && !isLandscape;

                // Reset feedback for this object
                captureFeedback = [];

                if (!isLargeEnough) {
                    captureFeedback.push(`Move closer (${(areaRatio * 100).toFixed(1)}% of frame)`);
                }

                if (!isConfidentEnough) {
                    captureFeedback.push(`Hold still (${(pred.score * 100).toFixed(1)}% confidence)`);
                }


                return isLargeEnough && isConfidentEnough  ;
            });

            setCaptureReady(readyForCapture);
            let newCountDown = 0;

            // Start or cancel countdown based on card detection
            if (readyForCapture && !countdownRef.current) {
                captureImage();

            }

            // Visual feedback
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext('2d');
                if (ctx) {
                    canvasRef.current.width = videoWidth;
                    canvasRef.current.height = videoHeight;
                    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

                    // Draw detection feedback
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                    ctx.fillRect(10, 10, 400, 120);
                    ctx.fillStyle = '#fff';
                    ctx.font = '14px Arial';

                    if (cardObjects.length === 0) {
                        ctx.fillText('No Card detected. Show your card.', 20, 30);
                        ctx.fillText('Try moving closer or adjusting lighting.', 20, 50);
                    } else {
                        if (readyForCapture) {
                            ctx.fillStyle = '#00ff00';
                            ctx.fillText('Ready to capture! Hold still...', 20, 30);
                            ctx.fillText(orientationFeedback, 20, 50);
                        } else {
                            ctx.fillStyle = '#ff9900';
                            ctx.fillText('Adjust your card:', 20, 30);
                            captureFeedback.forEach((feedback, i) => {
                                ctx.fillText(feedback, 20, 50 + (i * 20));
                            });
                            if (orientationFeedback) {
                                ctx.fillText(orientationFeedback, 20, 50 + (captureFeedback.length * 20));
                            }
                        }
                    }

                    // Countdown display
                    if (countdown !== null) {
                        ctx.beginPath();
                        ctx.arc(
                            canvasRef.current.width / 2,
                            canvasRef.current.height / 2,
                            80,
                            0,
                            Math.PI * 2
                        );
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                        ctx.fill();

                        ctx.fillStyle = '#920606';
                        ctx.font = 'bold 80px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(
                            newCountDown.toString(),
                            canvasRef.current.width / 2,
                            canvasRef.current.height / 2
                        );

                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'alphabetic';
                    }

                    // Draw bounding boxes with orientation-neutral styling
                    cardObjects.forEach(pred => {
                        const [x, y, width, height] = pred.bbox;
                        ctx.strokeStyle = readyForCapture ? '#00ff00' : '#ff9900';
                        ctx.lineWidth = 4;
                        ctx.strokeRect(x, y, width, height);

                        // Add corner markers instead of orientation arrows
                        const cornerSize = 20;
                        ctx.strokeStyle = readyForCapture ? '#00ff00' : '#ff9900';

                        // Top-left corner
                        ctx.beginPath();
                        ctx.moveTo(x, y + cornerSize);
                        ctx.lineTo(x, y);
                        ctx.lineTo(x + cornerSize, y);
                        ctx.stroke();

                        // Top-right corner
                        ctx.beginPath();
                        ctx.moveTo(x + width - cornerSize, y);
                        ctx.lineTo(x + width, y);
                        ctx.lineTo(x + width, y + cornerSize);
                        ctx.stroke();

                        // Bottom-right corner
                        ctx.beginPath();
                        ctx.moveTo(x + width, y + height - cornerSize);
                        ctx.lineTo(x + width, y + height);
                        ctx.lineTo(x + width - cornerSize, y + height);
                        ctx.stroke();

                        // Bottom-left corner
                        ctx.beginPath();
                        ctx.moveTo(x + cornerSize, y + height);
                        ctx.lineTo(x, y + height);
                        ctx.lineTo(x, y + height - cornerSize);
                        ctx.stroke();
                    });
                }
            }

            detectionRef.current = requestAnimationFrame(detectCard);
        } catch (err) {
            console.error('Detection error:', err);
            detectionRef.current = setTimeout(detectCard, 1000) as unknown as number;
        }
    };
// Helper function to draw orientation arrows
    const drawArrow = (ctx: CanvasRenderingContext2D, x: number, y: number, direction: 'up'|'down'|'left'|'right') => {
        ctx.fillStyle = '#00ffff';
        ctx.beginPath();
        const size = 15;

        switch (direction) {
            case 'up':
                ctx.moveTo(x, y);
                ctx.lineTo(x - size, y + size);
                ctx.lineTo(x + size, y + size);
                break;
            case 'down':
                ctx.moveTo(x, y);
                ctx.lineTo(x - size, y - size);
                ctx.lineTo(x + size, y - size);
                break;
            case 'left':
                ctx.moveTo(x, y);
                ctx.lineTo(x + size, y - size);
                ctx.lineTo(x + size, y + size);
                break;
            case 'right':
                ctx.moveTo(x, y);
                ctx.lineTo(x - size, y - size);
                ctx.lineTo(x - size, y + size);
                break;
        }

        ctx.closePath();
        ctx.fill();
    };

    const captureImage = () => {
        if (!videoRef.current || !canvasRef.current) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if (!context || video.readyState !== 4) {
            setError('Camera not ready. Please try again.');
            return;
        }

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        setImage(imageData);
        onCapture?.(imageData);
        //   uploadImage().then(r => {})

        // Stop the camera
        stopCamera();
        setIsActive(false);
    };

    const uploadImage = async () => {
        if (!image) return;

        setIsLoading(true);
        setError(null);
        setResult(null);
        setSuccess(false);

        try {
            const response = await fetch(image);
            const blob = await response.blob();

            const formData = new FormData();
            formData.append('file', blob, 'card.jpg');
            formData.append('orientation', cardOrientation || 'horizontal'); // Send orientation to backend

            const apiResponse = await fetch('/api/read_card', {
                method: 'POST',
                body: formData,
            });

            if (!apiResponse.ok) {
                throw new Error(`Server responded with ${apiResponse.status}`);
            }

            const data: CardDetails = await apiResponse.json();
            setResult(data);

            if (data.error) {
                throw new Error(data.error);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to process image');
        } finally {
            setIsLoading(false);
        }
    };

    const retakeImage = () => {
        setImage(null);
        setResult(null);
        setSuccess(false);
        setError(null);
        setCardOrientation(null);
        setIsActive(true); // This will open the full screen camera
    };

    const openCameraSettings = () => {
        if (isChrome) {
            window.open('chrome://settings/content/camera', '_blank');
        } else {
            window.open('about:preferences#privacy', '_blank');
        }
    };

    const getUnavailableExplanation = (reason: FeatureUnavailableReason): string => {
        switch (reason) {
            case 'permission-denied': return 'Camera access was previously blocked.';
            case 'no-camera': return 'No camera detected on this device.';
            case 'insecure-context': return 'Camera requires a secure HTTPS connection.';
            case 'browser-unsupported': return 'Your browser doesn\'t support this feature.';
            case 'camera-in-use': return 'Camera is being used by another application.';
            default: return 'Camera is currently unavailable.';
        }
    };

    const getResolutionSteps = (reason: FeatureUnavailableReason): string[] => {
        switch (reason) {
            case 'permission-denied':
                return [
                    'Click "Open Camera Settings" below',
                    'Find this website in the list',
                    'Change permission to "Allow"'
                ];
            case 'insecure-context':
                return [
                    'Ensure you\'re using HTTPS',
                    'Localhost is allowed for development'
                ];
            case 'camera-in-use':
                return [
                    'Close other apps using the camera',
                    'Try refreshing this page'
                ];
            case 'no-camera':
                return [
                    'Check if your device has a camera',
                    'Try using a different device'
                ];
            default:
                return [
                    'Try refreshing the page',
                    'Try a different browser',
                    'Check for browser updates'
                ];
        }
    };

    const handleTakeCardPhoto = () => {
        setIsActive(true);
        setError(null);
        setResult(null);
        setSuccess(false);
        setImage(null);
        setCardOrientation(null);
    };

    const closeCamera = () => {
        setIsActive(false);
        stopCamera();
    };

    // Main camera view (full screen)
    if (isActive) {
        return (
            <div className="fixed inset-0 z-50 bg-black flex flex-col">
                {/* Close button */}
                <button
                    onClick={closeCamera}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white"
                >
                    <FiX size={24} />
                </button>

                {/* Camera Feed */}
                <div className="flex-1 relative">
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    />

                    {/* Overlay guides */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="relative w-full h-full border-2 border-white/20 rounded-xl" />
                    </div>

                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                            <FiRefreshCw className="animate-spin text-white text-2xl mr-2" />
                            <span className="text-white">
                                {model ? 'Starting camera...' : 'Loading AI model...'}
                            </span>
                        </div>
                    )}

                    {error && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-4">
                            <FiAlertCircle className="text-red-500 text-4xl mb-3" />
                            <p className="text-white text-center mb-4">{error}</p>
                            <button
                                onClick={initializeCamera}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Retry
                            </button>
                        </div>
                    )}
                </div>

                {/* Controls */}
                <div className="bg-black/70 p-4 flex justify-center gap-4">
                    <button
                        onClick={toggleCamera}
                        className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gray-600 hover:bg-gray-700 text-white"
                    >
                        <FiRefreshCw size={24} />
                        Switch Camera
                    </button>
                    <button
                        onClick={captureImage}
                        className={`flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-green-600 text-white`}
                    >
                        <FiCamera size={24} />
                        {isLoading ? 'Loading...' : captureReady ? 'Capture' : 'Capture'}
                    </button>
                </div>
            </div>
        );
    }

    // Normal view (shows button to start camera)
    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Feature unavailable notice */}
            {unavailableReason && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
                    <div className="flex items-start gap-3">
                        <FiAlertTriangle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                        <div>
                            <h3 className="font-bold text-yellow-800">Camera Unavailable</h3>
                            <p className="mt-1 text-yellow-700">{getUnavailableExplanation(unavailableReason)}</p>

                            <div className="mt-3">
                                <h4 className="text-sm font-medium text-yellow-800">To resolve:</h4>
                                <ul className="mt-1 space-y-1 text-sm text-yellow-700">
                                    {getResolutionSteps(unavailableReason).map((step, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span>•</span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {(unavailableReason === 'permission-denied' || unavailableReason === 'insecure-context') && (
                                <button
                                    onClick={openCameraSettings}
                                    className="mt-3 flex items-center gap-2 text-sm bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-2 px-3 rounded"
                                >
                                    <FiSettings size={16} />
                                    {unavailableReason === 'permission-denied' ? 'Open Camera Settings' : 'Check Connection Security'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Captured image preview */}
            {image && !success && (
                <div className="space-y-4">
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '250px' }}>
                        <img
                            src={image}
                            alt="Captured card"
                            className="w-full h-full object-contain bg-white"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="relative w-full max-w-md h-3/4 border-2 border-dashed border-gray-400 rounded-xl">
                                {/* Corners */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-400 rounded-tl-lg" />
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-400 rounded-tr-lg" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-400 rounded-bl-lg" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-400 rounded-br-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={retakeImage}
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                        >
                            <FiRefreshCw size={18} />
                            Retake
                        </button>
                        <button
                            onClick={uploadImage}
                            disabled={isLoading}
                            className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                        >
                            {isLoading ? (
                                <FiRefreshCw className="animate-spin" />
                            ) : (
                                <FiUpload size={18} />
                            )}
                            {isLoading ? 'Processing...' : 'Extract Details'}
                        </button>
                    </div>
                </div>
            )}

            {/* Success display */}
            {success && result && !result.error && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg mb-4">
                    <div className="flex items-start gap-2 text-green-700">
                        <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                        <div>
                            <h3 className="font-bold">Card details captured successfully!</h3>
                            <div className="mt-1 text-sm">
                                {result.name && <p>Name: {result.name}</p>}
                                {result.card_number && (
                                    <p>Card: •••• •••• •••• {result.card_number.slice(-4)}</p>
                                )}
                                {result.expiry && <p>Expiry: {result.expiry}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Error display */}
            {error && !unavailableReason && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
                    <div className="flex items-start gap-2 text-red-700">
                        <div className="flex-1">
                            <p className="font-medium">{error}</p>
                        </div>
                        <button onClick={() => setError(null)} className="text-red-500 hover:text-red-700">
                            <FiX size={20} />
                        </button>
                    </div>
                </div>
            )}

            {/* Take Card Photo Button */}
            {(!image || success) && (
                <button
                    onClick={handleTakeCardPhoto}
                    disabled={!!unavailableReason}
                    className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 ${unavailableReason ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                    <FiCamera size={20} />
                    Take Card Photo
                </button>
            )}
        </div>
    );
};

export default CardDetection;