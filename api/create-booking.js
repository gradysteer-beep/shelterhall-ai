export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, guests, date, time, phone } = req.body

  console.log("Booking received:", name, guests, date, time, phone)

  res.status(200).json({
    success: true,
    message: "Booking received"
  })
}
