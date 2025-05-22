import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 space-y-12 max-w-4xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
        <p className="text-lg mt-2 text-slate-300">A passionate [Your Role] based in [Your Location]</p>
      </motion.div>

      {/* About Section */}
      <div className="bg-slate-700 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-slate-300 mt-2">
          I'm a [describe your profession or background], experienced in technologies like [Tech 1], [Tech 2], and [Tech 3].
          I love building [apps/websites/tools] that solve real-world problems.
        </p>
      </div>

      {/* Projects Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {[1, 2, 3].map((project, i) => (
          <div key={i} className="bg-slate-700 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold">Project Title {i + 1}</h3>
            <p className="text-slate-300 mt-1">Brief description of the project, tech stack used, and what problem it solves.</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">View Project</button>
          </div>
        ))}
      </div>

      {/* Resume Section */}
      <div className="bg-slate-700 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Resume</h2>
        <button className="px-4 py-2 border border-white hover:bg-white hover:text-black rounded-lg">Download Resume</button>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-700 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <div className="flex space-x-4 mt-4">
          <a href="mailto:your@email.com" aria-label="Email">
            <Mail className="w-6 h-6 text-white hover:text-blue-400" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
            <Github className="w-6 h-6 text-white hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-white hover:text-blue-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
