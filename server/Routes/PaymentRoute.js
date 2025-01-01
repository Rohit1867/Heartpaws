const express = require('express');
const paypal = require('@paypal/checkout-server-sdk');

const router = express.Router();

// PayPal environment configuration
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

// Endpoint to create a payment
router.post('/create', async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer('return=representation');
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'INR', // Set the currency to INR
          value: '500.00', // Replace with the donation amount in INR
        },
      },
    ],
    application_context: {
      return_url: 'http://localhost:4000/payment/capture', // PayPal redirects here after payment
      cancel_url: 'http://localhost:4000/payment/cancel', // Redirect on payment cancellation
    },
  });

  try {
    const order = await client.execute(request);
    res.json({ approvalUrl: order.result.links.find((link) => link.rel === 'approve').href });
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
});

// Endpoint to capture payment
router.get('/capture', async (req, res) => {
  const orderID = req.query.token;

  try {
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});
    const capture = await client.execute(request);
    res.json({ status: 'success', details: capture.result });
  } catch (error) {
    console.error('Error capturing PayPal payment:', error);
    res.status(500).json({ error: 'Failed to capture payment' });
  }
});

module.exports = router;
