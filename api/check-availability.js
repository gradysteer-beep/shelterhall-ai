export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { venue_id, type, num_people, date, time, duration } = req.body

    const response = await fetch(
      `https://api.designmynight.com/v4/venues/${venue_id}/booking-availability`,
      {
        method: 'POST',
        headers: {
          'Authorization': process.env.DMN_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type,
          num_people,
          date,
          time,
          duration
        })
      }
    )

    const data = await response.json()
    return res.status(response.status).json(data)
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
