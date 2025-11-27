export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Divider Line */}
      <div className="w-full h-px bg-white/10"></div>

      {/* Footer Content */}
      <div className="text-center py-10 text-gray-300">
        <p className="mb-2">© Soni Kumari Singh. All rights reserved.</p>

        <p className="mb-2">
          Designed & Built with <span className="text-teal-300">&lt;/&gt;</span> by Soni Kumari
          Singh using React & Tailwind CSS.
        </p>

        <a href="#" className="text-teal-300 hover:underline">
          View Source Code
        </a>
      </div>
    </footer>
  );
}
