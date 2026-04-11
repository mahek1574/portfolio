import { motion } from 'framer-motion';
import { Mail, MapPin, Download } from 'lucide-react';
import { ExternalLink, Globe } from '../components/Icons';
import { skills } from '../data';

const SkillCircle = ({ name, level, color, delay }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-100"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
            className={color}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-slate-700">{level}%</span>
        </div>
      </div>
      <span className="text-sm font-medium text-slate-600">{name}</span>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="card overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                <div className="w-full h-full rounded-xl bg-indigo-500 flex items-center justify-center text-white text-3xl font-bold">
                  MS
                </div>
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full"></div>
            </div>
            <div className="flex gap-3">
              <button className="btn-primary flex items-center gap-2">
                <Download size={18} />
                Download CV
              </button>
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <ExternalLink size={20} className="text-slate-500" />
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              mahek shanishvara
            </h1>
            <p className="text-indigo-600 font-medium"> Frontend Developer</p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin size={16} /> ahemdabad,india
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Mail size={16} /> mahek@gmail.com
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Globe size={16} /> portfolio.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Professional Summary
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Highly skilled  Frontend Developer with  of
                experience in building scalable, performant, and user-centric
                web applications. Expert in React.js, Tailwind CSS, and modern
                JavaScript ecosystems.
              </p>
              <p>
                A strong advocate for clean code, accessibility, and
                high-performance frontend architectures. Proven track record of
                leading development teams and delivering complex enterprise
                solutions from concept to production.
              </p>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-8">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {skills.map((skill, index) => (
                <SkillCircle
                  key={skill.name}
                  {...skill}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-500">Total Projects</span>
                <span className="font-bold text-slate-900">42+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-500">Years Experience</span>
                <span className="font-bold text-slate-900">8+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-500">Happy Clients</span>
                <span className="font-bold text-slate-900">95%</span>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-4">Core Competencies</h3>
            <ul className="space-y-2">
              {[
                "State Management (Redux, Context API)",
                "Component Architecture",
                "Performance Optimization",
                "UX/UI Design Principles",
                "Responsive Design",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
