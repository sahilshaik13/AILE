export default function FAQsPage() {
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
  
        {/* FAQ Section */}
        <h1 className="text-3xl font-bold mb-6">FAQs</h1>
        <div className="space-y-6">
          {/* FAQ 1 */}
          <div>
            <h2 className="text-xl font-semibold">1. What is AppIgnite Learning Ent.?</h2>
            <p className="text-slate-500">
              AppIgnite Learning Ent. is a registered MSME enterprise dedicated to empowering students by providing free offline mentorship and training in cutting-edge fields like AI and web development.
            </p>
          </div>
          {/* FAQ 2 */}
          <div>
            <h2 className="text-xl font-semibold">2. What is the BUILD WITH AI program?</h2>
            <p className="text-slate-500">
              The BUILD WITH AI program is a unique initiative by AppIgnite Learning Ent. to teach students practical AI-based applications and web development skills, leveraging powerful AI tools to build innovative projects.
            </p>
          </div>
          {/* FAQ 3 */}
          <div>
            <h2 className="text-xl font-semibold">3. Who can join the training programs?</h2>
            <p className="text-slate-500">
              These programs are open to students passionate about learning AI and web development. Applicants must be committed to attending offline classes regularly throughout the program.
            </p>
          </div>
          {/* FAQ 4 */}
          <div>
            <h2 className="text-xl font-semibold">4. What is the structure of the training program?</h2>
            <ul className="list-disc pl-6 text-slate-500">
              <li>Each batch will consist of <strong>30 students</strong>.</li>
              <li>The program duration is <strong>15-20 days</strong>, excluding holidays.</li>
              <li>Classes are conducted <strong>daily from 2:30 PM to 4:30 PM</strong>.</li>
            </ul>
          </div>
          {/* FAQ 5 */}
          <div>
            <h2 className="text-xl font-semibold">5. Where will the classes be conducted?</h2>
            <p className="text-slate-500">
              The training sessions are conducted offline at a designated venue. The location details will be shared with selected participants upon registration.
            </p>
          </div>
          {/* FAQ 6 */}
          <div>
            <h2 className="text-xl font-semibold">6. Are there any fees for the program?</h2>
            <p className="text-slate-500">
              No, the training programs offered by AppIgnite Learning Ent. are completely <strong>free of charge</strong>.
            </p>
          </div>
          {/* FAQ 7 */}
          <div>
            <h2 className="text-xl font-semibold">7. What can I expect to learn during the program?</h2>
            <ul className="list-disc pl-6 text-slate-500">
              <li>Hands-on experience with <strong>AI tools</strong> to build real-world applications.</li>
              <li>Practical knowledge of <strong>web development</strong>, including creating websites and dynamic web apps.</li>
              <li>Mentorship to enhance problem-solving, creativity, and tech proficiency.</li>
            </ul>
          </div>
          {/* FAQ 8 */}
          <div>
            <h2 className="text-xl font-semibold">8. How can I apply for the program?</h2>
            <p className="text-slate-500">
              Interested students can apply through a designated registration process. Please visit our [website/contact office/registration link] (you can replace this with the actual process) to sign up.
            </p>
          </div>
          {/* FAQ 9 */}
          <div>
            <h2 className="text-xl font-semibold">9. How are students selected for the program?</h2>
            <p className="text-slate-500">
              Selection is based on a first-come, first-served basis and an assessment of interest. Each batch accommodates <strong>30 students only</strong>.
            </p>
          </div>
          {/* FAQ 10 */}
          <div>
            <h2 className="text-xl font-semibold">10. Will I receive a certificate after completing the program?</h2>
            <p className="text-slate-500">
              Yes, upon successfully completing the program, participants will be awarded a <strong>certificate of completion</strong> to acknowledge their efforts and skills.
            </p>
          </div>
          {/* FAQ 11 */}
          <div>
            <h2 className="text-xl font-semibold">11. Can I join multiple batches if I am unable to attend my batch?</h2>
            <p className="text-slate-500">
              You may re-apply for a future batch, subject to seat availability. However, each student can participate in one batch at a time.
            </p>
          </div>
          {/* FAQ 12 */}
          <div>
            <h2 className="text-xl font-semibold">12. What tools and technologies will be covered?</h2>
            <ul className="list-disc pl-6 text-slate-500">
              <li>Modern <strong>AI tools</strong> for building applications.</li>
              <li>Core and advanced <strong>web development</strong> concepts, including HTML, CSS, JavaScript, and frameworks.</li>
            </ul>
          </div>
          {/* FAQ 13 */}
          <div>
            <h2 className="text-xl font-semibold">13. Can I join the program if I have no prior experience in AI or web development?</h2>
            <p className="text-slate-500">
              Absolutely! The program is beginner-friendly and designed to accommodate students with no prior experience.
            </p>
          </div>
          {/* FAQ 14 */}
          <div>
            <h2 className="text-xl font-semibold">14. What is the benefit of batch-wise training?</h2>
            <p className="text-slate-500">
              Batch-wise training ensures focused mentorship, personalized attention, and an optimal learning experience with a limited number of participants in each batch.
            </p>
          </div>
          {/* FAQ 15 */}
          <div>
            <h2 className="text-xl font-semibold">15. Whom can I contact for further inquiries?</h2>
            <p className="text-slate-500">
              Feel free to contact us via email at <strong>appignitelearning@outlook.com</strong> or WhatsApp us at <strong>+91 93471 51331</strong>. You can also visit our [social media/website] for updates and more details.
            </p>
          </div>
        </div>
      </div>
    );
  }
  