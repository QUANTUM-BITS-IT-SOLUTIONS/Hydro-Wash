import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not defined');
      return res.status(500).json({ error: 'Email service is not configured (missing API key)' });
    }

    const resend = new Resend(apiKey);
    const serviceName = service || 'General Inquiry';

    // Construct path to brochure and read it as a Buffer
    const filePath = path.join(process.cwd(), 'public', 'HydroWash-Brochure.pdf');
    if (!fs.existsSync(filePath)) {
      console.error(`Brochure file not found at path: ${filePath}`);
      return res.status(500).json({ error: 'Service brochure file is missing' });
    }
    const fileBuffer = fs.readFileSync(filePath);

    // Send email to customer with brochure attachment
    await resend.emails.send({
      from: 'HydroWash <noreply@hydrowashcarwash.com>',
      to: email,
      subject: 'Thank you for your interest in HydroWash',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0A0A0B;">Thank you, ${name}!</h1>
          <p>Thank you for your interest in HydroWash Car Wash & Detailing Studio.</p>
          <p>We've attached our service brochure for your reference.</p>
          <p><strong>Service of Interest:</strong> ${serviceName}</p>
          <p>We'll contact you shortly at ${phone} to discuss your requirements.</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            HydroWash Car Wash & Detailing Studio<br>
            Near Milk Bar Circle, Alwar, Rajasthan 301001<br>
            Phone: +91-98765-43210
          </p>
        </div>
      `,
      attachments: [
        {
          filename: 'HydroWash-Brochure.pdf',
          content: fileBuffer,
        },
      ],
    });

    // Send notification email to HydroWash
    await resend.emails.send({
      from: 'HydroWash <noreply@hydrowashcarwash.com>',
      to: 'info@hydrowashcarwash.com',
      subject: 'New Lead: Brochure Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A0A0B;">New Lead Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666;">This lead requested the service brochure.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending brochure:', error);
    return res.status(500).json({ error: 'Failed to send brochure' });
  }
}
