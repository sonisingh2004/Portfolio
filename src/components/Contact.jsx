export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-teal-300">
        Let's Build Something Together!
      </h2>

      <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto">
        Whether you have a project idea, a job opportunity, or just want to chat
        about web development, feel free to reach out.
      </p>

      {/* Contact Form */}
      <div className="mt-12 flex justify-center">
        <form
          action="https://formsubmit.co/sonisingh5093@gmail.com"
          method="POST"
          className="w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          {/* Name */}
          <div className="mb-6 text-left">
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required="name required"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-teal-300"
            />
          </div>

          {/* Email */}
          <div className="mb-6 text-left">
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              required="email required"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-teal-300"
            />
          </div>

          {/* Message */}
          <div className="mb-6 text-left">
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Write your message..."
              required="write your message"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-teal-300 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg border border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-black transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-12">
        <a href="#" className="hover:text-teal-300 transition text-4xl">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" className="hover:text-teal-300 transition text-4xl">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
}
