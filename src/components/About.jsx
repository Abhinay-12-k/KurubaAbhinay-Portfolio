import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Brain, Zap, Target, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const stats = [
  { number: '6+',   label: 'Projects Built',  icon: Code2,     gradient: 'linear-gradient(135deg,#5C27FE,#7B2FBE)' },
  { number: '250+', label: 'DSA Problems',     icon: Brain,     gradient: 'linear-gradient(135deg,#7B2FBE,#00C9B1)' },
  { number: '2',    label: 'Internships',      icon: Briefcase, gradient: 'linear-gradient(135deg,#00C9B1,#0891b2)'  },
  { number: '3',    label: 'Hackathons',       icon: Zap,       gradient: 'linear-gradient(135deg,#F5A623,#E8890C)'  },
];

const highlights = [
  { icon: Code2,  title: 'Full Stack Development', desc: 'Building end-to-end apps with MERN & Spring Boot.',        gradient: 'linear-gradient(135deg,#5C27FE,#7B2FBE)' },
  { icon: Brain,  title: 'AI & Generative AI',      desc: 'RAG systems, AI agents, intelligent application design.',  gradient: 'linear-gradient(135deg,#7B2FBE,#00C9B1)' },
  { icon: Zap,    title: 'Problem Solving',          desc: '250+ LeetCode problems with strong DSA foundation.',       gradient: 'linear-gradient(135deg,#00C9B1,#0891b2)'   },
  { icon: Target, title: 'Impact-Driven',            desc: 'Real-world apps in governance, NGO & startup domains.',   gradient: 'linear-gradient(135deg,#F5A623,#E8890C)'  },
];

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16,1,0.3,1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32" style={{ background: 'var(--c-lavender)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="section-label">About Me</span>
          <h2 className="heading-section text-5xl md:text-6xl">
            Building the <span className="gradient-text">future</span>,<br />
            one line at a time
          </h2>
        </Reveal>

        {/* Stats — bento grid */}
        <Reveal delay={0.1} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16,1,0.3,1] }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-[20px] p-6 text-center cursor-default"
                style={{ background: '#fff', border: '1px solid rgba(92,39,254,0.09)', boxShadow: 'var(--shadow-card)' }}
              >
                {/* Gradient top stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px]" style={{ background: s.gradient }} />
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: s.gradient }}
                >
                  <s.icon size={16} className="text-white" />
                </div>
                <p className="font-clash font-bold text-4xl mb-1" style={{ background: s.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {s.number}
                </p>
                <p className="font-jakarta text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--c-muted)' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Main two-column */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-14 items-start">

          {/* Left: bio */}
          <div className="space-y-6">
            {[
              <>I'm a <span className="font-semibold" style={{ color: 'var(--c-indigo)' }}>highly motivated Full Stack Developer</span> with expertise in React, Node.js, and Spring Boot. I enjoy building impactful solutions that solve real-world problems — especially in AI and automation domains.</>,
              <>With a strong academic background (CGPA: <span className="font-bold px-1.5 py-0.5 rounded-md" style={{ color: 'var(--c-dark)', background: 'rgba(92,39,254,0.07)' }}>9.56</span>) and hands-on experience through internships and hackathons, I continuously push my boundaries in both Full Stack Development and Artificial Intelligence.</>,
              <>I received a <span className="font-semibold" style={{ color: 'var(--c-indigo)' }}>Special Recognition Award from the District Superintendent of Police, Anantapur</span> for CitizenCare AI — a multilingual AI-powered governance system I built.</>,
            ].map((text, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <p className="font-body text-[17px] leading-[1.85]" style={{ color: 'var(--c-muted)' }}>{text}</p>
              </Reveal>
            ))}

            {/* Info pills */}
            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { icon: MapPin,        label: 'India'                         },
                  { icon: GraduationCap, label: 'Computer Science & Engineering' },
                  { icon: Briefcase,     label: 'Open to Full-time Roles'       },
                ].map(({ icon: Icon, label }) => (
                  <span key={label}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-jakarta font-medium"
                    style={{ background: '#fff', border: '1px solid rgba(92,39,254,0.10)', boxShadow: '0 1px 4px rgba(92,39,254,0.05)', color: 'var(--c-muted)' }}
                  >
                    <Icon size={13} style={{ color: 'var(--c-indigo)' }} /> {label}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Highlight grid */}
            <Reveal delay={0.28}>
              <div className="grid grid-cols-2 gap-3 pt-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-[16px] cursor-default transition-all duration-300"
                    style={{ background: '#fff', border: '1px solid rgba(92,39,254,0.08)', boxShadow: 'var(--shadow-card)' }}
                  >
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style={{ background: item.gradient }}>
                      <item.icon size={15} className="text-white" />
                    </div>
                    <p className="font-jakarta font-semibold text-sm mb-0.5" style={{ color: 'var(--c-dark)' }}>{item.title}</p>
                    <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--c-muted)' }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: bento cards */}
          <Reveal delay={0.2} className="space-y-4">

            {/* Award card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[20px] p-7 text-white noise-overlay"
              style={{ background: 'linear-gradient(135deg, #5C27FE 0%, #7B2FBE 55%, #0369a1 100%)', boxShadow: '0 12px 40px rgba(92,39,254,0.28)' }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <div className="text-3xl mb-4">🏆</div>
                <p className="font-clash font-bold text-xl mb-2 tracking-tight">Special Recognition Award</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
                  From the <span className="text-white font-semibold">District Superintendent of Police, Anantapur</span> for
                  CitizenCare AI — an AI-integrated multilingual governance system.
                </p>
              </div>
            </motion.div>

            {/* CGPA card */}
            <div className="rounded-[20px] p-5 flex items-center gap-5"
              style={{ background: '#fff', border: '1px solid rgba(92,39,254,0.09)', boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-[16px] flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #5C27FE, #00C9B1)' }}
              >
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <p className="font-clash font-bold text-4xl gradient-text-violet leading-none">9.56</p>
                <p className="font-jakarta text-sm font-semibold mt-1" style={{ color: 'var(--c-muted)' }}>CGPA — Computer Science & Engineering</p>
              </div>
            </div>

            {/* Goal card */}
            <div className="rounded-[20px] p-5"
              style={{ background: '#fff', border: '1px solid rgba(92,39,254,0.09)', boxShadow: 'var(--shadow-card)' }}
            >
              <p className="section-label mb-2">Goal</p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--c-muted)' }}>
                To grow as a <span className="font-semibold" style={{ color: 'var(--c-dark)' }}>Full Stack Developer</span>,{' '}
                <span className="font-semibold" style={{ color: 'var(--c-dark)' }}>AI Engineer</span>, and{' '}
                <span className="font-semibold" style={{ color: 'var(--c-dark)' }}>Java Developer</span> while contributing to
                innovative and meaningful products that create real-world impact.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
