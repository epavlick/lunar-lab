"use client"

import PublicationsList from "@/components/publications-list"
import TeamMembers from "@/components/team-members"
import VideosList from "@/components/videos-list"
import { publicationsData } from "@/data/publications"
import { teamData } from "@/data/team"
import { videosData } from "@/data/videos"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-4">LUNAR Lab</h1>
              <h2 className="text-2xl mb-6">Learning, Understanding, Networking, Algorithms, and Reasoning</h2>
              <p className="text-xl mb-8">
                We are a research group at Brown University focused on developing AI systems that can learn, reason, and
                interact with humans in meaningful ways.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#publications"
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
                >
                  Our Publications
                </a>
                <a
                  href="#team"
                  className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition"
                >
                  Meet the Team
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/interconnected-thought.png" alt="LUNAR Lab" className="rounded-lg shadow-xl max-w-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-900">Join Our Lab</h2>
            <p className="text-lg mb-8">
              We're always looking for talented researchers at all levels to join our team. If you're passionate about
              AI, machine learning, and interdisciplinary research, we'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-purple-900">PhD Students</h3>
                <p className="mb-4">
                  Apply through Brown University's Computer Science PhD program and mention LUNAR Lab in your
                  application.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open("https://cs.brown.edu/degrees/doctoral/", "_blank")}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-purple-900">Postdoctoral Fellows</h3>
                <p className="mb-4">
                  We have openings for postdoctoral researchers with expertise in machine learning and AI.
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.open("#contact", "_self")}>
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-purple-900">Undergraduate Research</h3>
                <p className="mb-4">
                  Brown students can join our lab for research projects, independent studies, and thesis work.
                </p>
                <Button
                  className="w-full bg-purple-900 hover:bg-purple-800"
                  onClick={() => window.open("mailto:lunar-lab@brown.edu")}
                >
                  <Mail className="mr-2 h-4 w-4" /> Email Us
                </Button>
              </div>
            </div>
            <p className="text-gray-600">
              We value diversity and encourage applications from underrepresented groups in computer science.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About LUNAR Lab</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Learning</h3>
              <p>
                Our research explores novel machine learning approaches that can adapt and learn from limited data,
                focusing on transfer learning and few-shot learning paradigms.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Understanding</h3>
              <p>
                We develop AI systems that can understand natural language, visual information, and multimodal inputs to
                better interact with humans and the world.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Networking</h3>
              <p>
                Our work investigates how AI systems can effectively collaborate with humans and other AI systems to
                solve complex problems through communication and coordination.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Algorithms</h3>
              <p>
                We design efficient algorithms for reasoning, planning, and decision-making that can operate under
                uncertainty and with limited computational resources.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Reasoning</h3>
              <p>
                Our research focuses on developing AI systems that can perform complex reasoning tasks, including causal
                reasoning, logical inference, and commonsense reasoning.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Collaboration</h3>
              <p>
                We collaborate with researchers across disciplines to apply our work to real-world problems in
                healthcare, education, and scientific discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Videos</h2>
          <VideosList videos={videosData} />
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Publications</h2>
          <PublicationsList publications={publicationsData} />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <TeamMembers members={teamData} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Location</h3>
                <p className="mb-6">
                  Department of Computer Science
                  <br />
                  Brown University
                  <br />
                  115 Waterman Street
                  <br />
                  Providence, RI 02912
                </p>
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Email</h3>
                <p className="mb-6">
                  <a href="mailto:lunar-lab@brown.edu" className="text-purple-700 hover:underline">
                    lunar-lab@brown.edu
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Join Us</h3>
                <p className="mb-4">
                  We're always looking for talented researchers to join our team. If you're interested in our work,
                  please reach out with your CV and research interests.
                </p>
                <p>
                  <strong>Prospective Students:</strong> Please apply through the{" "}
                  <a href="https://www.brown.edu/graduateprograms" className="text-purple-700 hover:underline">
                    Brown University Graduate School
                  </a>{" "}
                  and mention LUNAR Lab in your application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">LUNAR Lab</h2>
              <p>Brown University</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/lunar-lab" className="hover:text-purple-400 transition">
                GitHub
              </a>
              <a href="https://twitter.com/lunar_lab" className="hover:text-purple-400 transition">
                Twitter
              </a>
              <a
                href="https://scholar.google.com/citations?user=lunar_lab"
                className="hover:text-purple-400 transition"
              >
                Google Scholar
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LUNAR Lab, Brown University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
