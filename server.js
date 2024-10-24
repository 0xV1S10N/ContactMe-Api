const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const debug = require('debug')('app');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // استفاده از پورت از متغیر محیطی

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
    debug('Received request with body:', req.body); // دیباگ ورودی

    const { name, email, message } = req.body;

    // بررسی ورودی‌ها
    if (!name || !email || !message) {
        debug('Validation failed: missing fields');
        return res.status(400).json({ error: 'لطفاً تمام فیلدها را پر کنید.' });
    }

    debug('Creating transporter');
    const transporter = nodemailer.createTransport({
        host: 'mail.amiraliabbasi.ir',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: message
    };

    try {
        debug('Sending email...');
        const info = await transporter.sendMail(mailOptions);
        debug('Email sent:', info.response);
        res.status(200).json({ message: 'ایمیل با موفقیت ارسال شد.', response: info.response });
    } catch (error) {
        debug('Error occurred while sending email:', error);
        res.status(500).json({ error: 'خطا در ارسال ایمیل: ' + error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
