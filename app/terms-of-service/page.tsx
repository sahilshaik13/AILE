import Link from 'next/link';

export default function TermsOfServicePage() {
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
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      {/* Terms of Service Content */}
      <div className="space-y-6 text-slate-500">
        <p>
          Welcome to <strong>AppIgnite Learning Ent.</strong>! By participating in our programs, accessing our content, or interacting with us in any capacity, you agree to the following terms and conditions.
        </p>

        {/* Section 1: Use of Services */}
        <h2 className="text-xl font-semibold">1. Use of Services</h2>
        <ul className="list-disc pl-6">
          <li>Our training programs and content are designed exclusively for educational purposes.</li>
          <li>You must not use our services for any illegal or unauthorized activities.</li>
          <li>Access to our programs may require registration and acceptance into a batch.</li>
        </ul>

        {/* Section 2: Registration and Participation */}
        <h2 className="text-xl font-semibold">2. Registration and Participation</h2>
        <ul className="list-disc pl-6">
          <li>All participants must provide accurate and complete information during registration.</li>
          <li>Batch allocation is subject to availability and acceptance criteria set by <strong>AppIgnite Learning Ent.</strong>.</li>
          <li>Participants are required to attend the program regularly and adhere to the class schedule.</li>
        </ul>

        {/* Section 3: Intellectual Property */}
        <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
        <p>
          All materials, resources, and content provided during our training programs are the intellectual property of <strong>AppIgnite Learning Ent.</strong>. Participants may not reproduce, distribute, or use these materials for commercial purposes without explicit permission.
        </p>

        {/* Section 4: Program Changes and Termination */}
        <h2 className="text-xl font-semibold">4. Program Changes and Termination</h2>
        <ul className="list-disc pl-6">
          <li><strong>AppIgnite Learning Ent.</strong> reserves the right to modify or cancel programs, schedules, or content at its discretion.</li>
          <li>Participants will be notified of significant changes in advance whenever possible.</li>
          <li>Violation of terms or disruptive behavior may result in termination of participation without prior notice.</li>
        </ul>

        {/* Section 5: Privacy */}
        <h2 className="text-xl font-semibold">5. Privacy</h2>
        <p>
          We are committed to protecting your privacy. Please review our <Link href="/privacy-policy"><strong>Privacy Policy</strong></Link> for details on how we collect, use, and store your information.
        </p>

        {/* Section 6: Limitation of Liability */}
        <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
        <p>
          <strong>AppIgnite Learning Ent.</strong> is not liable for any indirect, incidental, or consequential damages arising from participation in our programs or use of our services.
        </p>

        {/* Section 7: Dispute Resolution */}
        <h2 className="text-xl font-semibold">7. Dispute Resolution</h2>
        <p>
          Any disputes or claims related to our services shall be resolved through amicable negotiation. If unresolved, disputes will be subject to the jurisdiction of courts in [insert applicable location].
        </p>

        {/* Section 8: Contact Us */}
        <h2 className="text-xl font-semibold">8. Contact Us</h2>
        <p>
          For questions or concerns regarding these terms, please contact us at:
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
