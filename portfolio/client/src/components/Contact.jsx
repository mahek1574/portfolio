import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
              Let's Build Something Amazing.
            </h2>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
              <p>
                As a passionate{" "}
                <strong className="text-white">Frontend Developer</strong>, I
                specialize in creating modern, responsive, and visually engaging
                user interfaces that deliver smooth user experiences.
              </p>

              <p>
                I work with technologies like{" "}
                <b>React.js, JavaScript, and Tailwind CSS</b>
                to build fast, interactive, and user-friendly web applications
                with clean design and seamless animations.
              </p>

              <p className="text-cyan-400 font-medium">
                I am always excited to work on creative projects and bring ideas
                to life. Whether you have a project or just want to connect,
                feel free to reach out!
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-2xl shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me A Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name" 
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-200"
                    placeholder="mahek"
                  />
                </div>

                
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email" // 
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-200"
                    placeholder="mahek@gmail.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message" 
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-200"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                
                {status === "success" && (
                  <p className="text-emerald-400 text-sm text-center mt-4">
                    Message sent successfully! I'll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center mt-4">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;