export default async function handler(req, res) {
  if (req.method === "POST") {
    const { orderID } = req.body;

    const response = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET}`,//UPDATE THIS
        }
    });
  }
}
