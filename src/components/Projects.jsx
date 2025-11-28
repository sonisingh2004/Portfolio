export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-teal-300 mb-16">
        Featured Work
      </h2>

      {/* === Project 1 === */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-28">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-[350px] h-[350px] bg-teal-400/10 blur-[120px] rounded-full"></div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl relative z-10 p-2">
            <img
              src="https://via.placeholder.com/600x350"
              alt="Screenshot of Project Name 1"
              className="rounded-xl w-full"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h3 className="text-3xl font-bold text-teal-300">
            E-commerce Dashboard
          </h3>

          <p className="text-gray-300 mt-2">Full Stack Application</p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Rebuilt a legacy inventory system to improve load times by 40% and
            enhanced user experience through a modern, responsive interface.
            Implemented complex state management using Redux Toolkit and
            optimized for mobile responsiveness across various devices.
          </p>

          {/* TECHNOLOGY TAGS */}
          <div className="flex gap-6 mt-6 text-gray-300 text-sm">
            <span className="hover:text-teal-300 transition">React</span>
            <span className="hover:text-teal-300 transition">Node.js</span>
            <span className="hover:text-teal-300 transition">Tailwind CSS</span>
            <span className="hover:text-teal-300 transition">MongoDB</span>
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
      </div>

      {/* === Project 2 (copy paste to add more) === */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <div>
          <h3 className="text-3xl font-bold text-teal-300">
            Interactive Blog Platform
          </h3>

          <p className="text-gray-300 mt-2">Frontend-focused Application</p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Developed a highly performant and accessible blog platform with
            markdown support, theme switching, animations, and optimized SEO.
          </p>

          <div className="flex gap-6 mt-6 text-gray-300 text-sm">
            <span className="hover:text-teal-300 transition">React</span>
            <span className="hover:text-teal-300 transition">Tailwind</span>
            <span className="hover:text-teal-300 transition">
              Framer Motion
            </span>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-2 border border-white/20 rounded-lg hover:border-teal-300 transition">
              Live Demo
            </button>

            <button className="px-6 py-2 border border-teal-300 rounded-lg text-teal-300 hover:bg-teal-300 hover:text-black transition">
              View Code
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-[350px] h-[350px] bg-teal-400/10 blur-[120px] rounded-full"></div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl relative z-10 p-2">
            <img
              src="https://via.placeholder.com/600x350"
              alt="Screenshot of Blog Project"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
