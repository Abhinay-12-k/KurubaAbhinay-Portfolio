import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, Sparkles } from 'lucide-react';
import HeroVisual from './HeroVisual';

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Spring Boot Developer',
  'GenAI Enthusiast',
  'AI Engineer',
];

function TypewriterText() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText,  setDisplayText]  = useState('');
  const [phase,        setPhase]        = useState('typing');

  useEffect(() => {
    const role = roles[currentRole];
    if (phase === 'typing') {
      if (displayText.length < role.length) {
        const t = setTimeout(() => setDisplayText(role.slice(0, displayText.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('pausing'), 1800);
        return () => clearTimeout(t);
      }
    }
    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), 400);
      return () => clearTimeout(t);
    }
    if (phase === 'deleting') {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 38);
        return () => clearTimeout(t);
      } else {
        setCurrentRole(p => (p + 1) % roles.length);
        setPhase('typing');
      }
    }
  }, [displayText, phase, currentRole]);

  return (
    <span className="inline-flex items-center gap-1">
      <span className="gradient-text font-syne font-bold">{displayText}</span>
      <span className="inline-block w-0.5 h-7 bg-[#5C27FE] animate-pulse rounded-full" />
    </span>
  );
}

const containerVars = { hidden: {}, visible: { transition: { staggerChildren: 0.10 } } };
const itemVars = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16,1,0.3,1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--c-pearl)' }}>

      {/* ── Gradient mesh background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        {/* Mesh blobs */}
        <div className="orb-1 absolute -top-32 -right-20 w-[640px] h-[640px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(92,39,254,0.12) 0%, transparent 70%)' }} />
        <div className="orb-2 absolute -bottom-40 -left-24 w-[560px] h-[560px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,201,177,0.09) 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 70%)' }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-[1280px] w-full mx-auto px-6 lg:px-10 pt-32 pb-20 grid lg:grid-cols-[1fr_600px] gap-4 items-center min-h-screen">

        {/* Left column */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Status badge */}
          <motion.div variants={itemVars} className="mb-8">
            <span
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[13px] font-jakarta font-semibold"
              style={{
                background: 'rgba(255,255,255,0.80)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(92,39,254,0.14)',
                boxShadow: '0 4px 20px rgba(92,39,254,0.10)',
                color: '#4A4A6A',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for opportunities
              <Sparkles size={12} className="text-[#5C27FE]" />
            </span>
          </motion.div>

          {/* Greeting + Name */}
          <motion.div variants={itemVars} className="mb-5">
            <p className="font-jakarta font-semibold uppercase text-[11px] tracking-[0.18em] text-[#4A4A6A] mb-4">Hello, I'm</p>
            <h1 className="heading-hero" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              <span className="text-[72px] md:text-[88px] lg:text-[100px] block" style={{ color: 'var(--c-dark)' }}>Kuruba</span>
              <span className="text-[72px] md:text-[88px] lg:text-[100px] block gradient-text mt-1">Abhinay</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div variants={itemVars} className="text-xl md:text-2xl h-10 mb-7">
            <TypewriterText />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVars}
            className="font-body text-[17px] leading-[1.8] max-w-[520px] mb-10"
            style={{ color: 'var(--c-muted)' }}
          >
            Passionate developer building scalable, intelligent applications with{' '}
            <span className="font-semibold" style={{ color: 'var(--c-dark)' }}>MERN Stack</span>,{' '}
            <span className="font-semibold" style={{ color: 'var(--c-dark)' }}>Spring Boot</span> &{' '}
            <span className="font-semibold" style={{ color: 'var(--c-dark)' }}>Generative AI</span>.
            Open to full-time roles & collaborations.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVars} className="flex flex-wrap gap-3 mb-10">
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.button>
            <motion.a
              href="https://docs.google.com/document/d/1XNkYnYga9pbQ7vlEQjZsRcg5wYJeB7E0E-LqlOntDjg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={14} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVars} className="flex items-center gap-2.5">
            {[
              { href: 'https://github.com/Abhinay-12-k',              icon: Github,   label: 'GitHub'   },
              { href: 'https://www.linkedin.com/in/abhinaykuruba/',   icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:abhinaykamagonda@gmail.com',            icon: Mail,     label: 'Email'    },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.94 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-jakarta font-medium text-sm transition-all duration-200"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(92,39,254,0.10)',
                  boxShadow: '0 2px 8px rgba(92,39,254,0.06)',
                  color: 'var(--c-muted)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(92,39,254,0.28)';
                  e.currentTarget.style.color = '#5C27FE';
                  e.currentTarget.style.background = 'rgba(92,39,254,0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(92,39,254,0.10)';
                  e.currentTarget.style.color = 'var(--c-muted)';
                  e.currentTarget.style.background = '#fff';
                }}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
              </motion.a>
            ))}
            <div className="h-5 w-px bg-[rgba(92,39,254,0.12)] mx-1" />
            <span className="text-sm font-jakarta text-[#4A4A6A] font-medium">India 🇮🇳</span>
          </motion.div>
        </motion.div>

        {/* Right column — 3D Visual (untouched) */}
        <div className="hidden lg:flex items-center justify-center overflow-visible">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--c-muted)' }}
      >
        <span className="text-[10px] uppercase tracking-[0.22em] font-jakarta font-semibold">Scroll</span>
        <motion.div animate={{ y: [0,6,0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
