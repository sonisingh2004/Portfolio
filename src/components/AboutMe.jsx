export default function AboutMe() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-teal-300 mb-16">
        About Me
      </h2>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT — Profile Image */}
        <div className="flex justify-center">
          <div className="w-60 h-60 rounded-full border-4 border-white/40 overflow-hidden flex items-center justify-center bg-white/5">
            <img
              src="/src/assets/Profile picture.png"
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT — Text */}
        <div>
          <p className="text-gray-300 leading-relaxed">
            I'm Soni Kumari Singh, a passionate Frontend Developer dedicated to
            crafting engaging and user-centric web applications. With a strong
            foundation in modern JavaScript frameworks and a keen eye for
            design, I strive to build intuitive and high-performing digital
            experiences.
          </p>

          <p className="text-gray-300 mt-6 leading-relaxed">
            Outside of coding, you can find me [mention a brief hobby, e.g.,
            exploring new hiking trails, experimenting with smart home tech, or
            diving into competitive gaming]. I believe continuous learning and a
            touch of creativity are key to impactful development.
          </p>

          {/* Button */}
          <div className="mt-8">
            <a
              href="#"
              className="px-6 py-3 border border-white/30 rounded-lg hover:border-teal-300 hover:text-teal-300 transition inline-block"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
