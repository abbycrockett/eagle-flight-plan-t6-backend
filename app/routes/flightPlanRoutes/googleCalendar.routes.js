const { google } = require("googleapis");

module.exports = function (app) {
  app.post("/api/calendar/create", async (req, res) => {
    try {
      const {
        access_token,
        summary,
        description,
        location,
        start,
        end,
        timezone,
        reminders,
      } = req.body;

      if (!access_token) {
        res.status(401);
        res.end("Missing access token");
        return;
      }

      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token });

      const calendar = google.calendar({ version: "v3", auth: oauth2Client });

      const event = {
        summary,
        description,
        start: {
          dateTime: start,
          timeZone: timezone || "UTC",
        },
        end: {
          dateTime: end,
          timeZone: timezone || "UTC",
        },
      };

      if (location) {
        event.location = location;
      }

      if (reminders) {
        event.reminders = reminders;
      }

      const response = await calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      res.status(200).json(response.data);
    } catch (err) {
      console.error("Error adding event:", err);
      res.status(500).json({ error: err.message, details: err });
    }
  });

  app.delete("/api/calendar/delete", async (req, res) => {
    try {
      const { access_token, eventId } = req.body;

      if (!access_token) {
        res.status(401);
        res.end("Missing access token");
        return;
      }

      if (!eventId) {
        res.status(400);
        res.end("Missing eventId");
        return;
      }

      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token });

      const calendar = google.calendar({ version: "v3", auth: oauth2Client });

      await calendar.events.delete({
        calendarId: "primary",
        eventId: eventId,
      });

      res
        .status(200)
        .json({ success: true, message: "Event deleted successfully" });
    } catch (err) {
      console.error("Error deleting event:", err);
      res.status(500).json({ error: err.message, details: err });
    }
  });
  
  app.delete("/api/calendar/delete", async (req, res) => {
    try {
      const { access_token, eventId } = req.body;

      if (!access_token) {
        res.status(401);
        res.end("Missing access token");
        return;
      }

      if (!eventId) {
        res.status(400);
        res.end("Missing eventId");
        return;
      }

      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token });

      const calendar = google.calendar({ version: "v3", auth: oauth2Client });

      await calendar.events.delete({
        calendarId: "primary",
        eventId: eventId,
      });

      res
        .status(200)
        .json({ success: true, message: "Event deleted successfully" });
    } catch (err) {
      console.error("Error deleting event:", err);
      res.status(500).json({ error: err.message, details: err });
    }
  });
};
