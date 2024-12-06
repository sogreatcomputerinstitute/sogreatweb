const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Paystack secret key
const PAYSTACK_SECRET_KEY = 'sk_test_1231411cf23b3ede98b14ce4687fed51226b01d3';  // Replace with your actual Paystack secret key

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Endpoint to verify the payment
app.post('/verify-payment', async (req, res) => {
    const reference = req.body.reference; // Reference ID passed from the client-side

    try {
        // Verify the payment by making a request to Paystack's verification endpoint
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` // Pass your secret key here
            }
        });

        if (response.data.data.status === 'success') {
            // Payment was successful
            res.json({ success: true, message: 'Payment successful' });
        } else {
            // Payment failed
            res.json({ success: false, message: 'Payment verification failed' });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({ success: false, message: 'An error occurred during payment verification' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
