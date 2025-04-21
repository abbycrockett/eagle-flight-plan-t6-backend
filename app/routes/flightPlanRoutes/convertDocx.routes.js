const router = require("express").Router();
const puppeteer = require("puppeteer");
const mammoth = require("mammoth");

module.exports = (app) => {
    router.post("/convert-docx", async (req, res) => {
        const { base64Docx } = req.body;

        try {
            const buffer = Buffer.from(base64Docx.split(",")[1], "base64");
            const { value: html } = await mammoth.convertToHtml({ buffer });

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(html, { waitUntil: "networkidle0" });

            const pdfBuffer = await page.pdf({ format: "A4" });
            await browser.close();

            const base64String = Buffer.from(pdfBuffer).toString('base64');

            const base64Pdf = `${base64String}`;

            res.json({ base64Pdf });
        } catch (err) {
            console.error(err);
            res.status(500).send("Conversion failed");
        }
    });

    app.use("/flightPlan-t6", router);
};