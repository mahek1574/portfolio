import React from "react";
import { motion } from "framer-motion";
import Button from "../components/common/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submit Clicked ✅");

    const formData = {
      user_name: e.target[0].value + " " + e.target[1].value,
      user_email: e.target[2].value,
      message: e.target[3].value,
    };

    console.log(formData);

    
    if (!formData.user_name || !formData.user_email || !formData.message) {
      alert("Please fill all fields ❗");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message Sent Successfully ✅");
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send ❌");
      });
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-secondary-light min-h-screen py-24"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tighter">
            Get in Touch
          </h1>
          <p className="text-gray-500 text-lg">
            Feel free to reach out for collaborations, custom furniture
            solutions, or any questions about our products.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark rounded-3xl p-10 text-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email us at</p>
                    <p className="text-lg font-semibold">
                      mahekshanishvara5304@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call us</p>
                    <p className="text-lg font-semibold">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Visit our studio</p>
                    <p className="text-lg font-semibold">Ahmedabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

  
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-10 shadow-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark ml-1 italic">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark ml-1 italic">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-dark ml-1 italic">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-dark ml-1 italic">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary outline-none resize-none"
                ></textarea>
              </div>

              {/* ✅ ONLY CHANGE HERE */}
              <Button
                type="submit" // 🔥 ye add kiya
                variant="primary"
                className="w-full !py-4 flex items-center justify-center shadow-lg group"
              >
                Send Message
                <Send
                  size={18}
                  className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
