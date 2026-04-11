import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../components/Icons';

const ContactItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
    <div className="p-2 bg-white text-indigo-600 rounded-lg shadow-sm">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{label}</p>
      <p className="text-sm font-semibold text-slate-900">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Get in Touch</h1>
        <p className="text-slate-500 mt-1">
          Have a project in mind? Let's build something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-8 order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                required
                placeholder="mahek"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
              <input
                type="email"
                required
                placeholder="mahek@gmail.com"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
            </div>

            <textarea
              required
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg"
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
            ></textarea>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
            </button>

            {submitted && (
              <motion.p className="text-center text-emerald-600 text-sm">
                Thank you! We'll get back to you shortly.
              </motion.p>
            )}
          </form>
        </div>

        <div className="space-y-6 order-1 lg:order-2">
          <div className="card p-8 bg-indigo-600 text-white">
            <h2 className="text-xl font-bold mb-2">Admin Identity</h2>

            <div className="flex gap-4 mt-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <button key={i} className="p-2 bg-white/10 rounded-lg">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <ContactItem
            icon={Mail}
            label="Email Me"
            value="hello@admindashboard.com"
          />
          <ContactItem icon={Phone} label="Call Me" value="+1 (555) 123-4567" />
          <ContactItem icon={MapPin} label="Location" value="ahemdabad" />
        </div>
      </div>
    </div>
  );
};

export default Contact;