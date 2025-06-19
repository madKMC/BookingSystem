import express from "express";
import { google } from "googleapis";
import path from "path";

const router = express.Router();

// Load credentials
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "../../service-account.json"),
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

router.post("/", async (req, res) => {
  const { name, email, date, time } = req.body;

  try {
    const dateTimeStart = new Date(`${date}T${time}`);
    const dateTimeEnd = new Date(dateTimeStart.getTime() + 30 * 60000); // 30 mins later

    const event = {
      summary: `Booking with ${name}`,
      description: `Auto-booked from website`,
      start: { dateTime: dateTimeStart.toISOString(), timeZone: "Africa/Johannesburg" },
      end: { dateTime: dateTimeEnd.toISOString(), timeZone: "Africa/Johannesburg" },
      attendees: [{ email }],
    };

    const response = await calendar.events.insert({
      calendarId: "yourcalendar@gmail.com", // Or 'primary' if using the service account's calendar
      requestBody: event,
      sendUpdates: "all", // Sends email invite
    });

    res.status(200).json({ message: "Booking created", eventLink: response.data.htmlLink });
  } catch (err) {
    console.error("Error creating event:", err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

export default router;
