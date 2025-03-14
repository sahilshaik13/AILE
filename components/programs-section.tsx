"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket, Brain, Infinity } from "lucide-react";

export default function BuildWithAISection() {
  const tabs = [
    {
      id: "about",
      title: "Build with AI",
      icon: <Rocket className="h-6 w-6" />,
      content: (
        <>
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <strong className="text-cyan-400">Build with AI</strong>
          </h1>
          <p className="text-slate-300 mb-4">
            A revolutionary initiative where you learn without boundaries. Forget traditional programs—this is an open-ended journey designed to empower you with AI skills and creativity.
          </p>
          <p className="text-slate-300">
            You’ll explore limitless possibilities, discover the potential of AI, and take control of your learning experience to build cutting-edge projects and solutions.
          </p>
          <br></br>
          <p>
            <strong className="text-cyan-400">Key Highlights:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Dive into AI-powered creativity, innovation, and problem-solving.</li>
            <li>Collaborate with a global community of learners and creators.</li>
            <li>Access hands-on projects, interactive tutorials, and expert guidance.</li>
            <li>Unleash the potential of AI to make meaningful contributions in any field.</li>
          </ul>
        </>
      ),
    },
    {
      id: "learning",
      title: "What You'll Learn",
      icon: <Brain className="h-6 w-6" />,
      content: (
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>
            <strong className="text-cyan-400">Master AI Tools:</strong> Learn how to efficiently use cutting-edge AI technologies like machine learning frameworks, natural language processing (NLP) models, and computer vision libraries. Gain hands-on experience with popular tools such as TensorFlow, PyTorch, and OpenAI API to turn your innovative ideas into reality.
          </li>
          <li>
            <strong className="text-cyan-400">Prompt Engineering:</strong> Dive into the art of designing precise and effective prompts to interact with AI models. Understand how to structure queries, refine instructions, and optimize outputs to make AI work smarter for tasks ranging from creative writing to data analysis and problem-solving.
          </li>
          <li>
            <strong className="text-cyan-400">Environment Adaptability:</strong> Adapt to diverse work environments by mastering multiple tools, platforms, and workflows. Seamlessly integrate AI technologies into web apps, mobile platforms, or standalone systems, and collaborate across teams using the latest tech stacks and APIs.
          </li>
          <li>
            <strong className="text-cyan-400">Real-World Application:</strong> Leverage AI to address global challenges and innovate in fields like healthcare, education, finance, and sustainability. Develop personalized recommendation systems, automate tedious workflows, and use AI to gain actionable insights from complex datasets.
          </li>
          <li>
            <strong className="text-cyan-400">Creative Problem-Solving:</strong> Train your mind to think outside the box and use AI as a creative partner. Whether it’s generating unique art, designing smarter products, or creating immersive virtual experiences, unleash the limitless potential of artificial intelligence.
          </li>
          <li>
            <strong className="text-cyan-400">Collaboration and Networking:</strong> Connect with a global community of AI enthusiasts, experts, and innovators. Share your projects, exchange ideas, and learn from others to accelerate your growth and contribute meaningfully to the AI ecosystem.
          </li>
        </ul>
      ),
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: <Infinity className="h-6 w-6" />,
      content: (
        <>
          <p className="text-slate-300 mb-4">
            Our mission is to create a thriving community of innovators who harness the power of AI to shape a better future. At <strong className="text-cyan-400">Build with AI</strong>, we believe in using AI responsibly and creatively to tackle real-world challenges, transform industries, and spark groundbreaking ideas.
          </p>
          <p className="text-slate-300 mb-4">
            This initiative encourages individuals to break free from traditional boundaries and explore the uncharted territories of AI innovation. Whether it’s automating processes, developing sustainable solutions, or enhancing human creativity, the possibilities are as limitless as your imagination.
          </p>
          <p className="text-slate-300">
            <strong className="text-cyan-400">Build with AI</strong> is for dreamers, doers, and creators who are ready to challenge limits, embrace collaboration, and thrive in a dynamic environment filled with growth and endless opportunities. Together, we’ll redefine what's possible and make a lasting impact on the world.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">Build with AI</span>: Learn Without Limits
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Dive into a world of possibilities with our innovative program. Discover how AI can empower you to create, learn, and build the future—without any limitations.
          </p>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="flex bg-slate-800/50 p-1 space-x-2 rounded-lg">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white px-4 py-2 rounded-lg"
                >
                  <div className="flex flex-col items-center">
                    {tab.icon}
                    <span className="mt-1 text-sm whitespace-nowrap">{tab.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-slate-700">
                {tab.content}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
