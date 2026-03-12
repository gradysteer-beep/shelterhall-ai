export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { venue_id, type, num_people, date, time, duration } = req.body

    console.log('Availability request received:', req.body)

    return res.status(200).json({
      success: true,
      available: true,
      message: 'Availability endpoint working',
      received: {
        venue_id,
        type,
        num_people,
        date,
        time,
        duration
      }
    })
  } catch (error) {
    return res.status(500).json({
      error: 'Availability check failed',
      details: error.message
    })
  }
}
