import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Globe, Server, Database, Wrench, Brain } from 'lucide-react';

/* ── Data ──────────────────────────────────────────── */
const categories = [
  {
    title: 'Languages',
    icon: Code2,
    accent: '#5C27FE',
    accentTo: '#7B2FBE',
    bg: 'rgba(92,39,254,0.05)',
    skills: [
      { name: 'Java',        emoji: '☕' },
      { name: 'JavaScript',  emoji: '⚡' },
    ],
  },
  {
    title: 'Frontend',
    icon: Globe,
    accent: '#00C9B1',
    accentTo: '#0891b2',
    bg: 'rgba(0,201,177,0.05)',
    skills: [
      { name: 'React.js',      emoji: '⚛️' },
      { name: 'Tailwind CSS',  emoji: '🎨' },
      { name: 'HTML / CSS',    emoji: '🖼️' },
      { name: 'JavaScript',    emoji: '⚡' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: '#7B2FBE',
    accentTo: '#5C27FE',
    bg: 'rgba(123,47,190,0.05)',
    skills: [
      { name: 'Node.js',     emoji: '🟢' },
      { name: 'Express.js',  emoji: '🚀' },
      { name: 'Spring Boot', emoji: '🌿' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    accent: '#059669',
    accentTo: '#0d9488',
    bg: 'rgba(5,150,105,0.05)',
    skills: [
      { name: 'MongoDB', emoji: '🍃' },
      { name: 'MySQL',   emoji: '🐬' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    accent: '#F5A623',
    accentTo: '#ea580c',
    bg: 'rgba(245,166,35,0.05)',
    skills: [
      { name: 'Git & GitHub', emoji: '🐙' },
      { name: 'Docker',       emoji: '🐳' },
      { name: 'Postman',      emoji: '📮' },
      { name: 'Vercel',       emoji: '▲' },
      { name: 'Render',       emoji: '☁️' },
    ],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    accent: '#db2777',
    accentTo: '#7B2FBE',
    bg: 'rgba(219,39,119,0.05)',
    skills: [
      { name: 'Generative AI',    emoji: '🤖' },
      { name: 'RAG Systems',      emoji: '🔍' },
      { name: 'AI Agents',        emoji: '🧠' },
      { name: 'Cloud AI',         emoji: '☁️' },
      { name: 'AI System Design', emoji: '⚙️' },
    ],
  },
];

const marqueeItems = [
  'React.js', 'Node.js', 'Spring Boot', 'MongoDB', 'Java', 'JavaScript',
  'Tailwind CSS', 'Express.js', 'Docker', 'Generative AI', 'RAG Systems',
  'MySQL', 'Git', 'AI Agents', 'REST APIs', 'Postman',
];

/* ── Marquee ────────────────────────────────────────── */
function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden py-5 mb-14" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        className="flex gap-4 w-max"
      >
        {items.map((item, i) => (
          <span key={i}
            className="flex-shrink-0 px-4 py-2 rounded-full font-code text-sm font-medium whitespace-nowrap"
            style={{ background: 'rgba(255,255,255,0.80)', border: '1px solid rgba(92,39,254,0.12)', color: 'var(--c-muted)', boxShadow: '0 2px 8px rgba(92,39,254,0.06)' }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Category Card ──────────────────────────────────── */
function CategoryCard({ cat, idx }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16,1,0.3,1] }}
      className="group relative overflow-hidden rounded-[20px] cursor-default"
      style={{ background: '#fff', border: '1px solid rgba(92,39,254,0.08)', boxShadow: 'var(--shadow-card)', transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${cat.accent}30`;
        e.currentTarget.style.boxShadow   = `0 8px 40px ${cat.accent}18, 0 2px 8px rgba(0,0,0,0.04)`;
        e.currentTarget.style.transform   = 'translateY(-5px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(92,39,254,0.08)';
        e.currentTarget.style.boxShadow   = 'var(--shadow-card)';
        e.currentTarget.style.transform   = '';
      }}
    >
      {/* Gradient top stripe */}
      <div className="h-1.5 w-full"
        style={{ background: `linear-gradient(to right, ${cat.accent}, ${cat.accentTo})` }} />

      {/* Faded bg blob */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-60"
        style={{ background: `radial-gradient(circle, ${cat.accent}22, transparent)` }} />

      <div className="p-6 relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-[12px] flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${cat.accent}, ${cat.accentTo})`, boxShadow: `0 6px 20px ${cat.accent}35` }}
          >
            <cat.icon size={18} className="text-white" />
          </div>
          <div>
            <p className="font-clash font-bold text-base tracking-tight" style={{ color: 'var(--c-dark)' }}>{cat.title}</p>
            <p className="font-code text-[10px]" style={{ color: 'var(--c-muted)', opacity: 0.7 }}>{cat.skills.length} technologies</p>
          </div>
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2">
          {cat.skills.map((skill, si) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.08 + si * 0.05, duration: 0.35 }}
              className="flex items-center gap-1.5 font-code text-xs px-3 py-1.5 rounded-full cursor-default select-none transition-all duration-200"
              style={{
                background: cat.bg,
                border: `1px solid ${cat.accent}22`,
                color: 'var(--c-muted)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background  = `linear-gradient(135deg, ${cat.accent}, ${cat.accentTo})`;
                e.currentTarget.style.color       = '#fff';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform   = 'scale(1.07) translateY(-2px)';
                e.currentTarget.style.boxShadow   = `0 4px 14px ${cat.accent}40`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background  = cat.bg;
                e.currentTarget.style.color       = 'var(--c-muted)';
                e.currentTarget.style.borderColor = `${cat.accent}22`;
                e.currentTarget.style.transform   = '';
                e.currentTarget.style.boxShadow   = '';
              }}
            >
              <span className="text-[11px]">{skill.emoji}</span>
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="py-32 overflow-hidden" style={{ background: 'var(--c-warm)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="heading-section text-5xl md:text-6xl">
            My <span className="gradient-text">tech stack</span>
          </h2>
          <p className="font-body text-lg mt-6 max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--c-muted)' }}>
            A curated set of tools, frameworks, and technologies I use to craft full-stack and AI-powered solutions.
          </p>
        </motion.div>

        {/* Scrolling marquee */}
        <Marquee />

        {/* Bento grid of category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} idx={i} />
          ))}
        </div>

        {/* Bottom strip — additional tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="rounded-[20px] p-6"
          style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(20px)', border: '1px solid rgba(92,39,254,0.09)', boxShadow: 'var(--shadow-card)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.18em] whitespace-nowrap flex-shrink-0"
              style={{ color: 'var(--c-indigo)' }}>Also working with</p>
            <div className="w-px h-5 bg-[rgba(92,39,254,0.12)] hidden sm:block" />
            <div className="flex flex-wrap gap-2">
              {['REST APIs', 'JWT Auth', 'Firebase', 'WebSockets', 'CI/CD'].map(item => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.07, y: -2 }}
                  className="flex items-center gap-1.5 font-code text-xs px-3 py-1.5 rounded-full cursor-default"
                  style={{ background: 'rgba(92,39,254,0.05)', border: '1px solid rgba(92,39,254,0.12)', color: 'var(--c-muted)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Proficiency bar — visual flair */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Frontend',  pct: 90, color: '#00C9B1' },
            { label: 'Backend',   pct: 82, color: '#7B2FBE' },
            { label: 'AI / ML',   pct: 75, color: '#db2777' },
            { label: 'DevOps',    pct: 65, color: '#F5A623' },
          ].map(({ label, pct, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="rounded-[16px] p-4"
              style={{ background: '#fff', border: '1px solid rgba(92,39,254,0.08)', boxShadow: '0 2px 8px rgba(92,39,254,0.05)' }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-jakarta font-semibold text-xs" style={{ color: 'var(--c-dark)' }}>{label}</span>
                <span className="font-clash font-bold text-sm" style={{ color }}>{pct}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(92,39,254,0.08)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(to right, ${color}, ${color}99)` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.08, ease: [0.16,1,0.3,1] }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
