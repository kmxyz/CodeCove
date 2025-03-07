# EmailJS Integration for CodeCove

This directory contains the EmailJS integration for the CodeCove contact form.

## Setup Instructions

1. **Create an EmailJS Account**

   - Sign up for a free account at [EmailJS](https://www.emailjs.com/)
   - Verify your email address

2. **Create an Email Service**

   - From your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

3. **Create an Email Template**

   - Go to "Email Templates" from your dashboard
   - Click "Create New Template"
   - Design your email template with the following variables:
     - `{{from_name}}` - The name of the person who submitted the form
     - `{{from_email}}` - The email of the person who submitted the form
     - `{{message}}` - The message content from the form
     - `{{to_name}}` - The recipient name (your company name)

4. **Update Configuration**

   - Open `src/backend/emailService.js`
   - Replace the placeholder values:
     ```javascript
     // Replace these values with your actual EmailJS service ID, template ID, and public key
     const response = await emailjs.send(
       "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
       "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
       templateParams,
       "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
     );
     ```
   - Also update the `init` function with your public key:
     ```javascript
     export const initEmailJS = () => {
       // Replace with your actual EmailJS public key
       emailjs.init("YOUR_PUBLIC_KEY");
     };
     ```

5. **Test the Form**
   - Fill out the contact form on your website
   - Submit the form
   - Verify that you receive an email with the form data

## Troubleshooting

- Check browser console for errors
- Verify that your EmailJS account is active
- Ensure all keys and IDs are correctly entered
- Check your email service configuration in EmailJS dashboard
