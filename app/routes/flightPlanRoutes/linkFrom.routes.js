module.exports = (app) => {
    const axios = require("axios");
    const router = require("express").Router();
  
    const googleWebAppUrl = process.env.GOOGLE_WEB_APP_URL;
    console.log(googleWebAppUrl);
  
    // Proxy endpoint for linking a Google Form to a Google Sheet
    router.post("/link-form", async (req, res) => {
      try {

        console.log("Received payload:", req.body);

        const response = await axios.post(googleWebAppUrl, req.body);

        console.log("GAS Response:", response.data);
        
        res.json({ result: response.data });
      } catch (error) {
        console.error("Error forwarding to GAS:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to forward request to Google Apps Script." });
      }
    });
  
    app.use("/flightPlan-t6", router);
  };