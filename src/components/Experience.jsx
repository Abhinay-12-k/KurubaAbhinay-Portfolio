import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer', company: 'IncuX AI', duration: '3 – 11 Months', type: 'Internship',
    description: 'Worked on AI-integrated applications and contributed extensively to full stack development. Built scalable and intelligent systems using modern web technologies, collaborating on real-world AI product development.',
    highlights: ['AI Integration', 'MERN Stack', 'System Design', 'Scalable Architecture'],
    accentFrom: '#5C27FE', accentTo: '#7B2FBE',
  },
  {
    role: 'Full Stack Developer', company: 'AatonovaZ Technologies Private Limited', duration: '6 Months', type: 'Internship',
    description: 'Developed and maintained production-grade web applications using modern full stack technologies. Contributed to feature development, bug fixes, and performance improvements across the application lifecycle.',
    highlights: ['React.js', 'Node.js', 'REST APIs', 'Production Deployment'],
    accentFrom: '#7B2FBE', accentTo: '#00C9B1',
  },
];

function TimelineEntry({ exp, index, isLast }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.16,1,0.3,1] }}
      className="relative flex gap-8"
    >
      {/* Left: connector */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-1">
        <div
          className="relative z-10 w-12 h-12 rounded-[14px] flex items-center justify-center shadow-lg flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${exp.accentFrom}, ${exp.accentTo})`, boxShadow: `0 8px 24px ${exp.accentFrom}40` }}
        >
          <Briefcase size={18} className="text-white" />
        </div>
        {!isLast && <div className="mt-3 flex-1 w-0.5 rounded-full min-h-[3rem] timeline-line" />}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="flex-1 mb-10 group relative overflow-hidden rounded-[20px] bg-white"
        style={{ border: '1px solid rgba(92,39,254,0.08)', boxShadow: 'var(--shadow-card)', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${exp.accentFrom}30`;
          e.currentTarget.style.boxShadow   = `0 12px 40px ${exp.accentFrom}18, 0 2px 8px rgba(0,0,0,0.04)`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(92,39,254,0.08)';
          e.currentTarget.style.boxShadow   = 'var(--shadow-card)';
        }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
          style={{ background: `linear-gradient(to bottom, ${exp.accentFrom}, ${exp.accentTo})` }} />

        <div className="px-7 py-6 pl-8">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="font-clash font-bold text-xl text-[#0D0D1A] group-hover:text-[#5C27FE] transition-colors tracking-tight">
                {exp.role}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <Building2 size={13} style={{ color: 'var(--c-muted)' }} />
                <span className="font-jakarta font-semibold text-sm" style={{ color: 'var(--c-muted)' }}>{exp.company}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <span className="px-3 py-1 rounded-full text-xs font-jakarta font-bold text-white"
                style={{ background: `linear-gradient(to right, ${exp.accentFrom}, ${exp.accentTo})` }}>
                {exp.type}
              </span>
              <div className="flex items-center gap-1.5 font-jakarta text-xs font-medium" style={{ color: 'var(--c-muted)' }}>
                <Calendar size={11} /> {exp.duration}
              </div>
            </div>
          </div>
          <p className="font-body text-sm leading-[1.75] mb-5" style={{ color: 'var(--c-muted)' }}>{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.highlights.map(h => (
              <span key={h} className="tag-code text-[11px]">{h}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="experience" className="py-32" style={{ background: 'var(--c-warm)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="text-center mb-16">
          <span className="section-label">Work History</span>
          <h2 className="heading-section text-5xl md:text-6xl">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="font-body text-lg mt-6 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--c-muted)' }}>
            Hands-on internship experience building production-ready systems at AI and tech companies.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <TimelineEntry key={exp.company} exp={exp} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
