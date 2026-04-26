
const getBookingSummary = async (from:{lat:number,lng:number},to:{lat:number,lng:number},date:String) => {
    // Ensure necessary data is present
    if (!from || !to || !date) {
        alert("All fields are required!");
        return;
    }

    const payload = {
        pickupLocation: {
            lat: from.lat,
            lng: from.lng,
        },
        dropoffLocation: {
            lat: to.lat,
            lng: to.lng,
        },
        date: date,
    };

    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const response = await fetch(`${backendUrl}/summary`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            alert("Search submitted successfully!");
        } else {
            console.error("Failed to submit search:", response.status, await response.text());
            alert("Failed to submit search. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting search:", error);
        alert("An error occurred. Please try again.");
    }
};

export default getBookingSummary