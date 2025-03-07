import emailjs from "@emailjs/browser";

/**
 * Sends an email notification when a user submits a contact form
 * @param {Object} userData - The user's form data
 * @param {string} userData.name - The user's name
 * @param {string} userData.email - The user's email
 * @param {string} userData.message - The user's message
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendContactNotification = async (userData) => {
  try {
    const { name, email, message } = userData;

    // Create template parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "CodeCove", // Your name or company name
    };

    // Send the email using EmailJS
    // Replace these values with your actual EmailJS service ID, template ID, and public key
    const response = await emailjs.send(
      "service_9oq8r1p", // Replace with your EmailJS service ID
      "template_n4mo57k", // Replace with your EmailJS template ID
      templateParams,
      "uAV1th7FwTc01xbl_" // Replace with your EmailJS public key
    );

    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

/**
 * Initialize EmailJS with your public key
 * Call this function once when your app starts
 */
export const initEmailJS = () => {
  // Replace with your actual EmailJS public key
  emailjs.init("uAV1th7FwTc01xbl_");
};
