export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount } = req.body;
  const apiKey = process.env.HITPAY_API_KEY;

  try {
    // We use the Sandbox URL for testing. 
    // Later, you will change this to api.hit-pay.com for live payments.
    const hitpayResponse = await fetch('https://api.sandbox.hit-pay.com/v1/payment-requests', {
      method: 'POST',
      headers: {
        'X-BUSINESS-API-KEY': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        amount: amount,
        currency: 'SGD',
        // This tells HitPay where to send the patient after they pay
        redirect_url: `https://${req.headers.host}/` 
      }),
    });

    const data = await hitpayResponse.json();

    if (data.url) {
      res.status(200).json({ url: data.url }); // Send the checkout link back to your app
    } else {
      res.status(400).json({ error: 'HitPay did not return a checkout URL.', details: data });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error trying to reach HitPay.' });
  }
}
