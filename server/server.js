import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';

// Load environment variables
dotenv.config();

// Debug: Log email configuration (remove sensitive info)
console.log('Email Configuration:', {
  user: process.env.EMAIL_USER,
  hasPassword: !!process.env.EMAIL_APP_PASSWORD
});

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  },
  debug: true // Enable debug mode
});

// Verify transporter connection
transporter.verify(function(error, success) {
  if (error) {
    console.error('Transporter verification error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Validation middleware
const validateContactForm = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// Contact form endpoint
app.post('/api/contact', validateContactForm, async (req, res) => {
  console.log('Received contact form submission:', req.body);
  
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'itsmesrimun@gmail.com', // Your email
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    console.log('Attempting to send email with options:', {
      ...mailOptions,
      auth: {
        user: process.env.EMAIL_USER,
        pass: '****' // Hide password in logs
      }
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Email configuration:', {
    user: process.env.EMAIL_USER,
    hasPassword: !!process.env.EMAIL_APP_PASSWORD
  });
}); 