export default function Hero() {
  return (
    <section
      id="hero"
      className="md:w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center"
    >
      {/* LEFT TEXT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m a <span className="text-teal-300">Frontend Developer</span>
          <br />
          Who Builds Clean & Modern UI.
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Specialized in <span className="text-teal-300">React</span>,
          <span className="text-teal-300"> JavaScript</span>,
          <span className="text-teal-300"> Tailwind</span> and Pixel-Perfect Web
          Experiences.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4">
          <a href="#projects">
            <button className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-300 transition">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="px-6 py-3 border border-teal-400 rounded-lg hover:bg-teal-400 hover:text-black transition">
              Get in Touch
            </button>
          </a>
        </div>

        {/* SKILL TAGS */}
        <div className="mt-10 flex gap-3 flex-wrap">
          {["React", "Next.js", "Tailwind CSS", "JavaScript", "UI/UX"].map(
            (item) => (
              <span
                key={item}
                className="px-4 py-1 border border-gray-500 rounded-full text-sm hover:border-teal-300 transition"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center relative">
        {/* 🌟 Neon Gradient Glow Behind Image */}
        <div className="absolute -top-10 -left-10 w-[800px] h-[800px] bg-teal-400/30 blur-[120px] rounded-full"></div>

        <img
          src="https://i.pinimg.com/736x/d1/4b/cf/d14bcfd764fc7aa5a06af4756ffc6876.jpg"
          alt="Developer"
          className=" w-[400px] md:w-[400px] rounded-2xl backdrop-blur-xl border border-teal-400 relative z-10"
        />
      </div>
    </section>
  );
}
