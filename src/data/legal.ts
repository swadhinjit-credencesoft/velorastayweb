export interface LegalPage {
  slug: string;
  title: string;
  lastUpdated: string;
  content: string;
}

const HOTEL_NAME = "The Queen's Head – Paharganj";
const HOTEL_ADDRESS =
  "2282–2285, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi, Delhi 110055, India";
const HOTEL_PHONE = "+91 9899739777";
const HOTEL_EMAIL = "shivharehotelsandtravel@gmail.com";

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "February 10, 2026",
    content:
      "<h2>Introduction</h2>\n" +
      `<p>${HOTEL_NAME} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our booking services, or stay at our hotel. By accessing our website or using our services, you agree to the practices described in this policy.</p>\n\n` +

      "<h2>Information We Collect</h2>\n" +
      "<p>We collect various types of information to provide and improve our services. This includes personal information you voluntarily provide when making a reservation, such as your full name, email address, phone number, billing address, and payment details. When required for check-in, we also collect identification information, including government-issued ID details as mandated by local regulations. When you browse our website, we may automatically gather technical data including your IP address, browser type, operating system, referring URLs and pages visited.</p>\n\n" +

      "<h2>How We Use Your Information</h2>\n" +
      "<p>We use the information we collect to process and confirm your reservations, manage your stay, and provide the services you request. We use your contact information to send reservation confirmations, pre-arrival communications and post-stay feedback requests. We may also use your information to respond to your enquiries and to improve our website and services.</p>\n\n" +

      "<h2>Cookies and Tracking Technologies</h2>\n" +
      "<p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us recognise returning visitors, remember your preferences, and analyse website traffic. You can control cookie preferences through your browser settings.</p>\n\n" +

      "<h2>Data Sharing and Disclosure</h2>\n" +
      "<p>We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website and services, and with third-party booking platforms through which you make a reservation, to the extent necessary to provide the services. We may also disclose information where required by law or to protect our rights and the safety of our guests.</p>\n\n" +

      "<h2>Data Security</h2>\n" +
      "<p>We take reasonable administrative, technical and physical measures to protect your personal information from unauthorised access, use or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>\n\n" +

      "<h2>Your Rights</h2>\n" +
      "<p>You may request access to, correction of, or deletion of the personal information we hold about you. To exercise these rights, please contact us using the details below.</p>\n\n" +

      "<h2>Contact Us</h2>\n" +
      `<p>If you have any questions about this Privacy Policy, please contact us at ${HOTEL_PHONE} or ${HOTEL_EMAIL}.</p>`,
  },
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    lastUpdated: "February 10, 2026",
    content:
      "<h2>General</h2>\n" +
      `<p>These Terms & Conditions govern your use of the website of ${HOTEL_NAME} and your stay at our hotel located at ${HOTEL_ADDRESS}. By making a reservation or staying with us, you agree to these terms.</p>\n\n` +

      "<h2>Reservations</h2>\n" +
      "<p>Reservations can be made through our website, by phone, by WhatsApp, by email, or through authorised third-party booking platforms. A reservation is confirmed once our team confirms availability and communicates the confirmation to you. Rates are subject to applicable taxes and availability.</p>\n\n" +

      "<h2>Rates and Payment</h2>\n" +
      "<p>Room tariffs are quoted per night per room. Meal plans (EP – room only, CP – room with breakfast) and supplements such as extra beds and breakfast are charged as communicated at the time of booking. Payment may be required in advance or at the hotel as communicated by our team.</p>\n\n" +

      "<h2>Check-in and Check-out</h2>\n" +
      "<p>Check-in is from 12:00 PM and check-out is by 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges. Please contact the front desk for details.</p>\n\n" +

      "<h2>Guest Conduct</h2>\n" +
      "<p>Guests are expected to behave in a manner that does not disturb other guests or damage hotel property. The hotel reserves the right to refuse accommodation to any guest whose conduct is deemed inappropriate.</p>\n\n" +

      "<h2>Liability</h2>\n" +
      "<p>The hotel is not liable for loss or damage to guests' belongings, or for personal injury, except where caused by the negligence of the hotel. Guests are advised to use the in-room safe for valuables and to exercise care.</p>\n\n" +

      "<h2>Contact Us</h2>\n" +
      `<p>If you have any questions about these Terms & Conditions, please contact us at ${HOTEL_PHONE} or ${HOTEL_EMAIL}.</p>`,
  },
  {
    slug: "cancellation-policy",
    title: "Cancellation Policy",
    lastUpdated: "February 10, 2026",
    content:
      "<h2>Cancellation</h2>\n" +
      "<p>Free cancellation is available if a reservation is cancelled at least <strong>24 hours prior</strong> to the scheduled check-in date and time.</p>\n\n" +
      "<p>Cancellations made less than 24 hours before check-in, or no-shows, may be subject to a charge of up to the first night's room charge as communicated at the time of booking.</p>\n\n" +

      "<h2>Modifications</h2>\n" +
      "<p>Date and room-type modifications are subject to availability and may affect the applicable rate. Please contact our reservations team to modify your booking.</p>\n\n" +

      "<h2>Refunds</h2>\n" +
      "<p>Where a refund is applicable, it will be processed using the same method used for payment, typically within 7–14 working days depending on the payment provider.</p>\n\n" +

      "<h2>Exceptions</h2>\n" +
      "<p>Special rates, packages and bookings made through third-party platforms may be subject to the cancellation policy of the respective platform or package terms.</p>\n\n" +

      "<h2>Contact Us</h2>\n" +
      `<p>For cancellations or questions, please contact our reservations team at ${HOTEL_PHONE} or ${HOTEL_EMAIL}.</p>`,
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "February 10, 2026",
    content:
      "<h2>What Are Cookies</h2>\n" +
      "<p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to the owners of the site.</p>\n\n" +

      "<h2>How We Use Cookies</h2>\n" +
      "<p>Our website may use cookies to improve your browsing experience, remember your preferences, and understand how visitors use our site. These may include essential cookies required for the website to function and analytics cookies that help us understand traffic patterns.</p>\n\n" +

      "<h2>Managing Cookies</h2>\n" +
      "<p>You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website.</p>\n\n" +

      "<h2>Contact Us</h2>\n" +
      `<p>If you have any questions about our use of cookies, please contact us at ${HOTEL_PHONE} or ${HOTEL_EMAIL}.</p>`,
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    lastUpdated: "February 10, 2026",
    content:
      "<h2>Our Commitment</h2>\n" +
      "<p>We are committed to providing a welcoming and accessible environment for all guests. Our staff are available 24 hours a day to assist guests with any accessibility needs.</p>\n\n" +

      "<h2>Hotel Access</h2>\n" +
      "<p>Guests with mobility requirements are advised to contact the hotel in advance of their stay so that our team can arrange appropriate assistance and room allocation where possible.</p>\n\n" +

      "<h2>Website Accessibility</h2>\n" +
      "<p>We aim to make our website easy to use and navigate. If you experience any difficulty using our website or require information in an alternative format, please contact us and we will be happy to assist.</p>\n\n" +

      "<h2>Contact Us</h2>\n" +
      `<p>For accessibility assistance or enquiries, please contact our front desk at ${HOTEL_PHONE} or ${HOTEL_EMAIL}.</p>`,
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((page) => page.slug === slug);
}
