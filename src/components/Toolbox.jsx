export default function Toolbox() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-teal-300 mb-16">My Toolbox</h2>

      {/* 3 Columns */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Languages */}
        <div className="p-10 bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-teal-300 mb-4">Languages</h3>

          <ul className="space-y-3 text-gray-300">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS3 / SCSS</li>
          </ul>
        </div>

        {/* Frameworks & Libraries */}
        <div className="p-10 bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-teal-300 mb-4">Frameworks & Libraries</h3>

          <ul className="space-y-3 text-gray-300">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Redux / Redux Toolkit</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
          </ul>
        </div>

        {/* Tools & Platforms */}
        <div className="p-10 bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-teal-300 mb-4">Tools & Platforms</h3>

          <ul className="space-y-3 text-gray-300">
            <li>Git / GitHub</li>
            <li>Webpack / Vite</li>
            <li>Jest / React Testing Library</li>
            <li>Figma</li>
            <li>Vercel / Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
