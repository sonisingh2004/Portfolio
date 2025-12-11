// @ts-nocheck
import { X } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Fee Management System",
      type: "Full Stack Application",
      shortDescription:
        "A comprehensive fee management solution for educational institutions.",
      fullDescription: `A full-stack web application built with React and Vite for managing student fees and payments in an educational institution. The system features role-based access control with separate dashboards for administrators and students.

Key Features:
• Admin Dashboard: Manage student records, track fees, view payment transactions, and generate reports
• Student Portal: View fee details, make payments, check payment history, and manage profile information
• Authentication: Secure login system with role-based access (admin/student)
• Protected Routes: Ensures only authorized users can access their respective dashboards
• Fee Management: Track outstanding fees, payment status, and transaction history
• Payment Processing: Multi-method payment integration with secure transaction handling
• Real-time Notifications: Automated payment reminders and status updates
• Financial Reports: Detailed analytics and reporting for administrators`,
      image: "/fee.jpg",
      demoUrl: "https://clg-feemanagement.netlify.app/",
      technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    },
    {
      id: 2,
      title: "Interactive Blog Platform",
      type: "Frontend-focused Application",
      shortDescription:
        "A highly performant blog platform with markdown support and theme switching.",
      fullDescription: `Developed a highly performant and accessible blog platform with markdown support, theme switching, animations, and optimized SEO.

Key Features:
• Markdown Support: Full markdown editing and rendering for blog posts
• Theme Switching: Dark and light mode with smooth transitions
• Animations: Framer Motion animations for enhanced user experience
• SEO Optimized: Proper meta tags and structured data for search engines
• Responsive Design: Works seamlessly across all devices
• Performance Optimized: Fast loading times with lazy loading and code splitting
• Comment System: Interactive comments with moderation capabilities
• Search Functionality: Full-text search for blog posts and tags`,
      image: "https://via.placeholder.com/600x350",
      demoUrl: null,
      technologies: ["React", "Tailwind", "Framer Motion"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  // Build a short preview from the first paragraph of the full description
  const getPreview = (desc) => {
    const firstParagraph = desc.split("\n\n")[0] || desc;
    const trimmed = firstParagraph.trim();
    if (trimmed.length > 220) {
      return `${trimmed.slice(0, 220).trimEnd()}...`;
    }
    return trimmed;
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-teal-300 mb-16">
        Featured Work
      </h2>

      {/* Projects Grid */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`grid md:grid-cols-2 gap-10 items-center ${
            index !== projects.length - 1 ? "mb-28" : ""
          }`}
        >
          {/* LEFT IMAGE / TEXT (alternating) */}
          {index % 2 === 0 ? (
            <>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-[350px] h-[350px] bg-teal-400/10 blur-[120px] rounded-full"></div>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl relative z-10 p-2">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="rounded-xl w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-teal-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.type}</p>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {getPreview(project.fullDescription)}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-2 text-teal-300 hover:text-teal-200 underline underline-offset-4"
                  >
                    Read More
                  </button>
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="flex gap-6 mt-6 text-gray-300 text-sm flex-wrap">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="hover:text-teal-300 transition">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2 border border-white/20 rounded-lg hover:border-teal-300 transition"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-6 py-2 border border-white/10 rounded-lg text-gray-500 cursor-not-allowed"
                    >
                      Live Demo
                    </button>
                  )}
                  <button className="px-6 py-2 border border-teal-300 rounded-lg text-teal-300 hover:bg-teal-300 hover:text-black transition">
                    View Code
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-3xl font-bold text-teal-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.type}</p>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {getPreview(project.fullDescription)}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-2 text-teal-300 hover:text-teal-200 underline underline-offset-4"
                  >
                    Read More
                  </button>
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="flex gap-6 mt-6 text-gray-300 text-sm flex-wrap">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="hover:text-teal-300 transition">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-2 border border-white/20 rounded-lg hover:border-teal-300 transition">
                    Live Demo
                  </button>
                  <button className="px-6 py-2 border border-teal-300 rounded-lg text-teal-300 hover:bg-teal-300 hover:text-black transition">
                    View Code
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -left-10 w-[350px] h-[350px] bg-teal-400/10 blur-[120px] rounded-full"></div>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl relative z-10 p-2">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#0d0f11] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-[#0d0f11] border-b border-white/10 flex justify-between items-center p-6">
              <h2 className="text-2xl font-bold text-teal-300">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-300 mb-4">{selectedProject.type}</p>
              <div className="text-gray-400 leading-relaxed whitespace-pre-line mb-6">
                {selectedProject.fullDescription}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-teal-300 font-semibold mb-3">
                  Technologies
                </h4>
                <div className="flex gap-4 flex-wrap">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-400/10 border border-teal-300/30 rounded-full text-teal-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-2 border border-white/20 rounded-lg hover:border-teal-300 transition">
                  Live Demo
                </button>
                <button className="px-6 py-2 border border-teal-300 rounded-lg text-teal-300 hover:bg-teal-300 hover:text-black transition">
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
