export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 mb-8">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
          <img src="/logo/appignite logo.png" alt="Logo" className="h-12 w-12" />
        </div>
        <span className="font-bold text-xl tracking-tight">
          <span className="text-cyan-400">App</span>
          <span className="text-black">Ignite</span>
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      {/* Privacy Policy Content */}
      <div className="space-y-6 text-slate-500">
        <p>
          At <strong>AppIgnite Learning Ent.</strong>, we are committed to protecting your privacy and safeguarding the personal information you share with us. This privacy policy outlines how we collect, use, store, and protect your data.
        </p>

        {/* Information We Collect */}
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li>Personal details such as name, email address, phone number, and address collected during registration or communication with us.</li>
          <li>Usage data, including device information, IP addresses, and interaction logs on our platforms.</li>
          <li>Feedback, survey responses, and program-specific data for continuous improvement.</li>
        </ul>

        {/* How We Use Your Information */}
        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>To manage and process registrations for training programs.</li>
          <li>To communicate updates, events, or program-related announcements.</li>
          <li>To enhance our training content and optimize user experience.</li>
          <li>To ensure compliance with our policies and address any potential concerns.</li>
        </ul>

        {/* How We Share Your Information */}
        <h2 className="text-xl font-semibold">3. How We Share Your Information</h2>
        <p>
          We value your trust and ensure that your personal information is not sold, rented, or shared with third parties without your explicit consent. However, we may share your data under the following conditions:
        </p>
        <ul className="list-disc pl-6">
          <li>To comply with legal obligations or government requests.</li>
          <li>To prevent fraud, security issues, or technical problems.</li>
          <li>With authorized service providers or partners to assist in program delivery, subject to strict confidentiality agreements.</li>
        </ul>

        {/* Data Storage and Security */}
        <h2 className="text-xl font-semibold">4. Data Storage and Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. Personal information is stored securely and accessible only to authorized personnel. However, please note that no system is entirely foolproof, and we encourage users to take precautions when sharing sensitive information.
        </p>

        {/* Your Rights */}
        <h2 className="text-xl font-semibold">5. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul className="list-disc pl-6">
          <li>Access, update, or delete your personal information at any time.</li>
          <li>Withdraw consent for data usage, where applicable.</li>
          <li>Request clarification about how your data is used.</li>
        </ul>
        <p>
          To exercise these rights, please contact us via the information provided below.
        </p>

        {/* Cookies and Tracking */}
        <h2 className="text-xl font-semibold">6. Cookies and Tracking</h2>
        <p>
          We may use cookies and similar technologies to track your interaction with our website and improve user experience. Cookies help us:
        </p>
        <ul className="list-disc pl-6">
          <li>Analyze website traffic and performance.</li>
          <li>Personalize content and improve accessibility.</li>
          <li>Ensure proper website functionality during your visits.</li>
        </ul>

        {/* Changes to the Privacy Policy */}
        <h2 className="text-xl font-semibold">7. Changes to the Privacy Policy</h2>
        <p>
          This privacy policy may be updated periodically to reflect changes in our practices or applicable laws. We encourage users to review this page regularly for the latest information. Significant updates will be communicated via email or on our platform.
        </p>

        {/* Contact Information */}
        <h2 className="text-xl font-semibold">8. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding our privacy policy, please feel free to reach out to us:
        </p>
        <ul className="list-disc pl-6">
          <li>Email: <strong><a href="mailto:appignitelearning@outlook.com">appignitelearning@outlook.com</a></strong></li>
          <li>WhatsApp: <strong><a href="https://wa.me/+919347151331">+91 93471 51331</a></strong></li>
        </ul>
        <p>
          <strong>Last Updated:</strong> 17th March 2025
        </p>
      </div>
    </div>
  );
}
