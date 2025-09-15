import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendWaitlistConfirmation = async (email: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: `EngageSmart Team <${process.env.RESEND_FROM_EMAIL || 'noreply@engagesmart.com'}>`,
      to: [email],
      subject: 'Welcome to EngageSmart Waitlist! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; font-size: 32px; margin-bottom: 10px;">EngageSmart</h1>
            <p style="color: #6b7280; font-size: 18px;">AI-Powered Customer Retention</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="color: #1f2937; font-size: 24px; margin-bottom: 20px;">Welcome to the Future of Customer Retention! 🎉</h2>
            
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for joining our waitlist! You're now part of an exclusive group of forward-thinking business owners who are ready to transform their customer retention.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
              <h3 style="color: #1f2937; font-size: 18px; margin-bottom: 15px;">What happens next?</h3>
              <ul style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>Get exclusive early access pricing when we launch</li>
                <li>Receive priority support and onboarding</li>
                <li>Be the first to know about new features and updates</li>
                <li>Join our private community of successful entrepreneurs</li>
              </ul>
            </div>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <h3 style="color: #1f2937; font-size: 20px; margin-bottom: 15px;">What to Expect</h3>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              Our AI will help you turn one-time buyers into loyal, repeat customers. 
              No more losing $127 every day to customer churn!
            </p>
          </div>
          
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              This email was sent to ${email}. If you didn't sign up for our waitlist, you can safely ignore this email.
            </p>
            <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0;">
              © 2025 EngageSmart, Inc. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      throw new Error('Failed to send confirmation email')
    }

    return data
  } catch (error) {
    console.error('Email sending error:', error)
    throw new Error('Failed to send confirmation email')
  }
}
