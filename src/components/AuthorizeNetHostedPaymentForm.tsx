// components/HostedPaymentForm.tsx

import React from 'react';

interface HostedPaymentFormProps {
    token: string;
}

const HostedPaymentForm: React.FC<HostedPaymentFormProps> = ({ token }) => {
    const paymentUrl = `https://test.authorize.net/payment/payment`;

    return (
        <iframe
            title="Authorize.Net Payment"
            src={`${paymentUrl}?token=${token}`}
            width="100%"
            height="600px"
            frameBorder="0"
            allowFullScreen
        />
    );
};

export default HostedPaymentForm;
