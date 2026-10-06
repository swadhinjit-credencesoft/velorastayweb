export interface LegalPage {
  slug: string;
  title: string;
  lastUpdated: string;
  content: string;
}

const CONTACT_BLOCK =
  "<p><strong>Bishnu Bhaban</strong><br>\n" +
  "West Gate of Shri Jagannath Temple, Grand Road, Puri, Odisha 752001, India<br>\n" +
  "Email: Bishnubhabanpuri@gmail.com<br>\n" +
  "Phone: +91 9078922710</p>";

const CHANNELS_LIST =
  "<ul>\n" +
  "<li>Email: Bishnubhabanpuri@gmail.com</li>\n" +
  "<li>Phone: +91 9078922710</li>\n" +
  "<li>WhatsApp: +91 9437093094</li>\n" +
  "<li>Speak to the front desk during your stay (staffed 24 hours)</li>\n" +
  "</ul>";

const PROPERTY_BLOCK =
  "<h2>Our Property</h2>\n" +
  "<p>Bishnu Bhaban is a single budget hotel property located at the West Gate of the Shri Jagannath Temple, Grand Road, Puri, Odisha 752001. It offers three categories of room: a Standard Room, a Deluxe Room, and a Multi-Bed Room, each with an attached western-style bathroom.</p>\n\n";

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "January 15, 2026",
    content:
      "<h2>Introduction</h2>\n" +
      "<p>Bishnu Bhaban (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our booking services, or stay at our property. By accessing our website or using our services, you agree to the practices described in this policy.</p>\n\n" +
      PROPERTY_BLOCK +
      "<h2>House Rules & Guest Compliance</h2>\n" +
      "<p>Guests staying at Bishnu Bhaban must adhere to hotel policies, including our strict <strong>No Smoking</strong> policy (smoking is strictly prohibited inside all rooms and indoor hotel areas) and <strong>No Pets</strong> policy (pets are not allowed anywhere on the hotel premises). Cancellation and booking adjustments are processed in accordance with our stated booking terms.</p>\n\n" +
      "<h2>Information We Collect</h2>\n" +
      "<p>We collect various types of information to provide and improve our services. This includes personal information you voluntarily provide when making a reservation, such as your full name, email address, phone number, and billing details. We also collect identification information when required for check-in, including government-issued ID details, as mandated by Indian law. Every guest must present a valid photo ID at check-in, and Aadhaar, other government photo ID, and passport are all accepted. When you browse our website, we automatically gather certain technical data including your IP address, browser type and version, operating system, referring URLs, pages visited, time spent on pages, and other diagnostic information.</p>\n\n" +
      "<h2>How We Use Your Information</h2>\n" +
      "<p>We use the information we collect for several important purposes. Primarily, we use your personal data to process and confirm your reservations, manage your stay, and provide the services you request during your visit. This includes room allocation, late check-in requests, and group arrangements. We use your contact information to send reservation confirmations, pre-arrival communications, and post-stay feedback requests. We will only send you promotional or marketing messages if you have opted in to receive them, and every such message includes a way to unsubscribe.</p>\n\n" +
      "<h2>Cookies and Tracking Technologies</h2>\n" +
      "<p>Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us recognise returning visitors, remember your preferences, and analyse website traffic. You can control cookie preferences through your browser settings. For more detail, please see our Cookie Policy.</p>\n\n" +
      "<h2>CCTV Surveillance</h2>\n" +
      "<p>For the safety of our guests and their belongings, CCTV cameras are in operation at this property, covering entry and exit points, corridors, and common areas. CCTV footage is recorded for security purposes. Guest rooms and private areas are not under surveillance.</p>\n\n" +
      "<h2>Third-Party Sharing</h2>\n" +
      "<p>We may share your information with trusted third-party service providers who assist us in operating our property and website. These include payment processing partners, booking platform aggregators such as MakeMyTrip, Agoda, Goibibo, and Justdial, our booking engine provider, cloud hosting providers, and analytics services. All third-party providers are contractually obligated to protect your information. We do not sell your personal information to third parties.</p>\n\n" +
      "<h2>Data Security</h2>\n" +
      "<p>We implement security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. These measures include encryption of data in transit using SSL/TLS technology, secure server environments, physical access controls at the property, CCTV coverage, and strict staff access controls. ID documents presented at check-in are handled in line with applicable Indian regulations.</p>\n\n" +
      "<h2>Data Retention</h2>\n" +
      "<p>We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy. Reservation data is typically retained for eight years to comply with Indian tax and accounting requirements. Marketing preferences are retained until you unsubscribe or request deletion.</p>\n\n" +
      "<h2>Your Rights</h2>\n" +
      "<p>Under applicable data protection laws, including the Digital Personal Data Protection Act, 2023, you have several rights regarding your personal information, including the right to access, correct, delete, restrict processing, and data portability. You may withdraw consent at any time where processing is based on consent. To exercise any of these rights, contact us using the details below and we will respond within the timeframes required by law.</p>\n\n" +
      "<h2>Children's Privacy</h2>\n" +
      "<p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. Families travelling with children should note that ID requirements apply to all adult guests. If a parent or guardian becomes aware that their child has provided us with personal data, please contact us immediately.</p>\n\n" +
      "<h2>Changes to This Policy</h2>\n" +
      "<p>We may update this Privacy Policy from time to time. The updated policy will be posted on this page with a revised \"Last Updated\" date. Continued use of our services after any changes constitutes acceptance of the updated policy.</p>\n\n" +
      "<h2>Contact Us</h2>\n" +
      "<p>If you have any questions regarding this Privacy Policy, please contact us at:</p>\n" +
      CONTACT_BLOCK,
  },
  {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    lastUpdated: "January 15, 2026",
    content:
      "<h2>Introduction</h2>\n" +
      "<p>These Terms and Conditions govern your use of the Bishnu Bhaban website and services. By accessing our website, making a reservation, or staying at our property, you agree to be bound by these terms.</p>\n\n" +
      PROPERTY_BLOCK +
      "<h2>Booking Terms</h2>\n" +
      "<p>All reservations are subject to availability and confirmation. You must be at least 18 years of age to make a reservation and must provide accurate, current, and complete information during the booking process. A valid government-issued photo ID is required at check-in for all adult guests. Group bookings and bookings with only male guests are accepted; please mention the requirement at the time of booking so that suitable rooms can be allocated.</p>\n\n" +
      "<h2>Check-in and Check-out</h2>\n" +
      "<p><strong>Check-in Time:</strong> 2:00 PM<br>\n" +
      "<strong>Check-out Time:</strong> 11:00 AM</p>\n" +
      "<p>The front desk is staffed from 7:00 AM to 11:00 PM. Early check-in is available subject to room availability and may incur an additional charge. Late check-out can also be arranged upon request, depending on availability on the day. During festival season we recommend arranging either in advance.</p>\n\n" +
      "<h2>Facilities and Amenities</h2>\n" +
      "<p>All of our rooms include the following:</p>\n" +
      "<ul>\n" +
      "<li>Air conditioning</li>\n" +
      "<li>Attached western-style bathroom with 24-hour hot water</li>\n" +
      "<li>Free WiFi</li>\n" +
      "<li>Television</li>\n" +
      "<li>Daily housekeeping</li>\n" +
      "</ul>\n" +
      "<p>The property also provides a front desk staffed from 7:00 AM to 11:00 PM, CCTV surveillance covering entry and exit points, luggage storage, laundry on request, and parking facilities. Late arrival or early departure outside desk hours should be arranged in advance by calling +91 9078922710.</p>\n\n" +
      "<h2>Cancellation & Booking Adjustment</h2>\n" +
      "<p>Cancellation charges will apply as per the cancellation policy applicable to the booking.</p>\n" +
      "<p>Where permitted by the hotel, the eligible cancelled booking amount may be adjusted against a future stay within one year from the date of cancellation.</p>\n" +
      "<p>The adjustment is subject to room availability and applicable tariff differences.</p>\n" +
      "<p>Bookings made through third-party platforms may be subject to the cancellation and refund policies of the respective platform.</p>\n\n" +
      "<h2>No Pets</h2>\n" +
      "<p>Pets are not allowed anywhere on the hotel premises.</p>\n\n" +
      "<h2>No Smoking</h2>\n" +
      "<p>Smoking is strictly prohibited inside all rooms and indoor hotel areas.</p>\n\n" +
      "<h2>Food and Dining</h2>\n" +
      "<p>We do not operate a restaurant, kitchen, or room service on site. There is no food or meal plan included in your room rate, and guests are welcome to bring outside food into the property and eat in the room or the common areas. Puri has a large number of restaurants within walking distance, and the front desk can point you to whichever are open at the time.</p>\n\n" +
      "<h2>Pricing</h2>\n" +
      "<p>Room rates vary by category, season, and festival dates, and are shown on our website at the time of booking. All prices are quoted in Indian Rupees (INR). Prices displayed on our website may exclude applicable taxes, which will be shown before you confirm payment.</p>\n\n" +
      "<h2>Payment Terms</h2>\n" +
      "<p>We accept major credit and debit cards, UPI payments, net banking, and select digital wallets, as well as cash in INR. Payment is required at the time of booking unless otherwise agreed upon. A refundable security deposit may be collected at check-in to cover potential damages or outstanding charges, and the amount is confirmed at booking.</p>\n\n" +
      "<h2>Guest Responsibilities</h2>\n" +
      "<p>Guests are responsible for all charges incurred during their stay. You must adhere to the property's house rules, which include restrictions on noise levels after 10:00 PM, zero tolerance for smoking inside rooms/indoor areas, and strict adherence to our no-pets policy. Any damage to property, fixtures, or furnishings will be charged to the guest's account at replacement or repair cost.</p>\n\n" +
      "<h2>Liability Limitations</h2>\n" +
      "<p>Bishnu Bhaban shall not be liable for any loss, damage, or injury to guests or their property except to the extent caused by our proven negligence. We are not responsible for delays, cancellations, or disruptions caused by events beyond our control, including weather, religious calendar changes affecting temple timings, or disruption of transport. We strongly recommend that guests obtain comprehensive travel insurance.</p>\n\n" +
      "<h2>Intellectual Property</h2>\n" +
      "<p>All content on the Bishnu Bhaban website, including text, graphics, logos, images, videos, and software, is the property of Bishnu Bhaban or its licensors and is protected by Indian and international copyright, trademark, and intellectual property laws.</p>\n\n" +
      "<h2>Dispute Resolution</h2>\n" +
      "<p>Any disputes arising from these Terms and Conditions or your use of our services shall first be addressed through good-faith negotiation. If a resolution cannot be reached within 30 days, either party may initiate mediation. If mediation is unsuccessful, disputes shall be subject to the exclusive jurisdiction of the courts in Puri, Odisha, India.</p>\n\n" +
      "<h2>Contact Information</h2>\n" +
      "<p>For any questions regarding these Terms and Conditions, please contact us at:</p>\n" +
      CONTACT_BLOCK,
  },
  {
    slug: "refund-policy",
    title: "Refund Policy",
    lastUpdated: "January 15, 2026",
    content:
      "<h2>Overview</h2>\n" +
      "<p>At Bishnu Bhaban, we understand that plans can change unexpectedly. This Refund Policy outlines the conditions under which refunds are available and the process for requesting a refund.</p>\n\n" +
      "<h2>Cancellation & Booking Adjustment</h2>\n" +
      "<p>Cancellation charges will apply as per the cancellation policy applicable to the booking.</p>\n" +
      "<p>Where permitted by the hotel, the eligible cancelled booking amount may be adjusted against a future stay within one year from the date of cancellation.</p>\n" +
      "<p>The adjustment is subject to room availability and applicable tariff differences.</p>\n" +
      "<p>Bookings made through third-party platforms may be subject to the cancellation and refund policies of the respective platform.</p>\n\n" +
      "<h2>Eligible Refund Conditions</h2>\n" +
      "<p>Refunds may be issued under the following circumstances: if you cancel your reservation within the timeframe specified in our Cancellation Policy, if Bishnu Bhaban is unable to honour your reservation due to circumstances within our control, or if there is a documented service failure that significantly impacted your stay.</p>\n\n" +
      "<h2>Refund Processing Times</h2>\n" +
      "<p>Once a refund is approved, the processing time depends on your original payment method. Credit and debit card refunds are initiated within 5 to 7 business days and may take a further 2 to 3 business days to appear depending on your bank. UPI refunds are generally processed within 3 to 5 business days. Net banking refunds take approximately 5 to 7 business days.</p>\n\n" +
      "<h2>Partial Refunds</h2>\n" +
      "<p>Partial refunds may be issued if you check out earlier than your scheduled departure date without prior arrangement, or if charges for unused services are cancelled at least 24 hours in advance.</p>\n\n" +
      "<h2>Non-Refundable Charges</h2>\n" +
      "<p>Certain charges are not eligible for refund under any circumstances. These include no-show charges, early checkout fees as specified in our cancellation policy, and third-party services booked on your behalf.</p>\n\n" +
      "<h2>House Rules Note</h2>\n" +
      "<p>Please note that violation of property rules — including our strict <strong>No Pets</strong> policy and <strong>No Smoking</strong> policy inside rooms and indoor hotel areas — may result in immediate cancellation of stay without eligibility for refund.</p>\n\n" +
      "<h2>How to Request a Refund</h2>\n" +
      "<p>To request a refund, please contact us through any of the following channels:</p>\n" +
      CHANNELS_LIST +
      "\n\n" +
      "<h2>Contact Us</h2>\n" +
      "<p>For refund-related inquiries, please reach out to us at:</p>\n" +
      "<p><strong>Bishnu Bhaban - Refund Department</strong><br>\n" +
      "West Gate of Shri Jagannath Temple, Grand Road, Puri, Odisha 752001, India<br>\n" +
      "Email: Bishnubhabanpuri@gmail.com<br>\n" +
      "Phone: +91 9078922710</p>",
  },
  {
    slug: "cancellation-policy",
    title: "Cancellation Policy",
    lastUpdated: "January 15, 2026",
    content:
      "<h2>Overview</h2>\n" +
      "<p>We understand that travel plans can change, and we have designed our cancellation policy to be fair and transparent. This policy applies to all direct bookings made through the Bishnu Bhaban website or by phone. Bookings made through third-party platforms are governed by that platform's own terms, which may differ.</p>\n\n" +
      "<h2>Cancellation & Booking Adjustment</h2>\n" +
      "<p>Cancellation charges will apply as per the cancellation policy applicable to the booking.</p>\n" +
      "<p>Where permitted by the hotel, the eligible cancelled booking amount may be adjusted against a future stay within one year from the date of cancellation.</p>\n" +
      "<p>The adjustment is subject to room availability and applicable tariff differences.</p>\n" +
      "<p>Bookings made through third-party platforms may be subject to the cancellation and refund policies of the respective platform.</p>\n\n" +
      "<h2>House Policies</h2>\n" +
      "<p><strong>No Pets:</strong> Pets are not allowed anywhere on the hotel premises.</p>\n" +
      "<p><strong>No Smoking:</strong> Smoking is strictly prohibited inside all rooms and indoor hotel areas.</p>\n\n" +
      "<h2>Cancellation Tiers</h2>\n" +
      "<p><strong>Free Cancellation (7 or More Days Before Check-in):</strong> If you cancel your reservation at least 7 days before your scheduled check-in date, you will receive a full refund of any prepaid amounts with no cancellation fee.</p>\n" +
      "<p><strong>Late Cancellation (2 to 7 Days Before Check-in):</strong> If you cancel between 2 and 7 days before your scheduled check-in, a charge equivalent to one night's stay may apply to your total reservation value.</p>\n" +
      "<p><strong>Very Late Cancellation (Less Than 2 Days Before Check-in):</strong> Cancellations made less than 2 days before check-in may be charged the full reservation amount, and no refund will be issued.</p>\n\n" +
      "<h2>No-Show Policy</h2>\n" +
      "<p>If you fail to arrive on your scheduled check-in date without prior notification, your reservation will be classified as a no-show. No-shows are charged at 100% of the total reservation value and no refund will be issued.</p>\n\n" +
      "<h2>Early Checkout</h2>\n" +
      "<p>If you need to check out before your scheduled departure date, please inform the front desk at least 24 hours in advance. Early checkout within the first 24 hours of your stay may incur a charge equivalent to one night's stay.</p>\n\n" +
      "<h2>Festival Season</h2>\n" +
      "<p>During major festivals such as Rath Yatra, rooms are in very high demand and separate terms may apply. These are communicated to you at the time of booking, and we recommend confirming your reservation well in advance for festival travel.</p>\n\n" +
      "<h2>How to Cancel</h2>\n" +
      "<p>To cancel your reservation, you may use any of the following methods:</p>\n" +
      CHANNELS_LIST +
      "\n\n" +
      "<h2>Contact Us</h2>\n" +
      "<p>For any questions about our cancellation policy, please contact us at:</p>\n" +
      CONTACT_BLOCK,
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "January 15, 2026",
    content:
      "<h2>What Are Cookies</h2>\n" +
      "<p>Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work efficiently and improve the user experience.</p>\n\n" +
      "<h2>How We Use Cookies</h2>\n" +
      "<p>Bishnu Bhaban uses cookies to remember your preferences, understand how visitors use our site, and enable our booking engine to function correctly.</p>\n\n" +
      "<h2>Types of Cookies We Use</h2>\n" +
      "<p><strong>Strictly Necessary Cookies:</strong> Essential for our website and booking engine to function properly.</p>\n" +
      "<p><strong>Performance and Analytics Cookies:</strong> Collect information about how visitors use our website. Our site loads Google Tag Manager, which is a Google service that sets cookies to measure traffic and understand how the site is used.</p>\n" +
      "<p><strong>Functionality Cookies:</strong> Allow our website to remember choices you make.</p>\n\n" +
      "<h2>Third-Party Services</h2>\n" +
      "<p>Our booking engine is operated by a third-party provider (BookOne) and may set its own cookies when you proceed to payment. If you use embedded maps to view our location, Google Maps may set cookies in your browser. You can control these through your browser settings or by using the opt-out tools provided on those services.</p>\n\n" +
      "<h2>Managing Your Cookie Preferences</h2>\n" +
      "<p>You can exercise your cookie preferences through your browser settings. Please note that blocking strictly necessary cookies may impair website functionality, including the ability to complete a booking.</p>\n\n" +
      "<h2>Contact Us</h2>\n" +
      "<p>If you have any questions about our use of cookies, please contact us at:</p>\n" +
      CONTACT_BLOCK,
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement",
    lastUpdated: "January 15, 2026",
    content:
      "<h2>Our Commitment to Accessibility</h2>\n" +
      "<p>Bishnu Bhaban is committed to ensuring that our property, website, and services are accessible to all guests, including people with disabilities. We are a small budget property, and we would rather describe our access accurately than overstate it.</p>\n\n" +
      "<h2>Website Accessibility</h2>\n" +
      "<p>Our website is designed with accessibility in mind, including proper heading structure, alt text on images, and keyboard-navigable controls. If you encounter a barrier anywhere on this site, please contact us and we will work to provide the information you need in an accessible format.</p>\n\n" +
      "<h2>Property Physical Accessibility</h2>\n" +
      "<p>Our property is located on Grand Road at the West Gate of the Shri Jagannath Temple, an area with a high volume of pedestrian traffic, uneven paving, and crowd congestion that varies considerably by day and by festival season. The temple complex itself has steps and uneven surfaces, and is not fully accessible to wheelchair users. If you have mobility requirements, please contact us before booking so we can be straightforward about what we can and cannot accommodate, and so we can advise you on the practical arrangements for darshan access.</p>\n\n" +
      "<h2>Getting Assistance</h2>\n" +
      "<p>If you need specific accommodations, or if any part of the property is not suitable for your requirements, please tell us before you book. We would much rather you knew in advance than discovered on arrival.</p>\n\n" +
      "<h2>Contact Us</h2>\n" +
      "<p>For accessibility-related inquiries or to request specific accommodations, please contact us at:</p>\n" +
      "<p><strong>Bishnu Bhaban - Accessibility</strong><br>\n" +
      "West Gate of Shri Jagannath Temple, Grand Road, Puri, Odisha 752001, India<br>\n" +
      "Email: Bishnubhabanpuri@gmail.com<br>\n" +
      "Phone: +91 9078922710</p>",
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((page) => page.slug === slug);
}
