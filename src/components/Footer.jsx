import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart, Code2, Sparkles, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Experience', href: '#experience'  },
  { label: 'DSA',        href: '#dsa'         },
  { label: 'Hackathons', href: '#hackathons'  },
  { label: 'Contact',    href: '#contact'     },
];

const socials = [
  { icon: Github,   label: 'GitHub',   sub: 'Abhinay-12-k',      href: 'https://github.com/Abhinay-12-k',            from: '#0D0D1A', to: '#374151' },
  { icon: Linkedin, label: 'LinkedIn', sub: '/in/abhinaykuruba', href: 'https://www.linkedin.com/in/abhinaykuruba/', from: '#0077b5', to: '#00a0dc' },
  { icon: Mail,     label: 'Email',    sub: 'Say Hello →',       href: 'mailto:abhinaykamagonda@gmail.com',          from: '#5C27FE', to: '#7B2FBE', isMailto: true },
];

const highlights = [
  { icon: Code2,    text: '6+ Real-world Projects'         },
  { icon: Sparkles, text: '3 Hackathons · 2 Podiums'       },
  { icon: MapPin,   text: 'India · Open to Remote & Onsite' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const nav = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--c-dark)' }}>

      {/* ── Mesh background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #5C27FE, transparent)' }} />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #00C9B1, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(ellipse, #7B2FBE, transparent)' }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      {/* ── Top gradient divider ── */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #5C27FE 30%, #00C9B1 70%, transparent)' }} />

      {/* ── Main footer body ── */}
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* Top section */}
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-14 mb-16">

          {/* Brand col */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
          >
            {/* Logo */}
            <div className="mb-6">
              <span className="font-clash font-bold text-5xl gradient-text leading-none">KA.</span>
            </div>

            {/* Tagline */}
            <p className="font-body text-base leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Turning ideas into reality — one commit at a time.{' '}
              <span style={{ color: 'rgba(255,255,255,0.80)' }}>Full Stack Developer</span> &{' '}
              <span style={{ color: 'rgba(255,255,255,0.80)' }}>AI Engineer</span> based in India.
            </p>

            {/* Highlights */}
            <div className="space-y-2.5 mb-8">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(92,39,254,0.25)', border: '1px solid rgba(92,39,254,0.30)' }}>
                    <Icon size={12} style={{ color: '#5C27FE' }} />
                  </div>
                  <span className="font-jakarta text-sm font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Social cards */}
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, label, sub, href, from, to, isMailto }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={isMailto ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${from}, ${to})`, boxShadow: `0 4px 16px ${from}40` }}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-jakarta font-semibold text-sm transition-colors duration-200 group-hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</p>
                    <p className="font-code text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.10, ease: [0.16,1,0.3,1] }}
          >
            <p className="font-jakarta font-bold text-[11px] uppercase tracking-[0.18em] mb-6"
              style={{ color: 'rgba(255,255,255,0.30)' }}>Navigate</p>
            <ul className="space-y-3.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => nav(link.href)}
                    className="font-jakarta font-medium text-sm transition-all duration-200 hover:text-white hover:translate-x-1.5 flex items-center gap-1 group"
                    style={{ color: 'rgba(255,255,255,0.50)' }}
                  >
                    <span className="w-0 group-hover:w-3 h-px transition-all duration-200"
                      style={{ background: 'linear-gradient(to right, #5C27FE, #00C9B1)' }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Status card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16,1,0.3,1] }}
          >
            <p className="font-jakarta font-bold text-[11px] uppercase tracking-[0.18em] mb-6"
              style={{ color: 'rgba(255,255,255,0.30)' }}>Status</p>

            {/* Availability card */}
            <div className="rounded-[16px] p-5 mb-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-jakarta font-semibold text-sm text-emerald-400">Open to Work</span>
              </div>
              <p className="font-body text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Actively looking for full-time roles in Full Stack or AI Engineering. Available immediately.
              </p>
            </div>

            {/* Tech passion card */}
            <div className="rounded-[16px] p-5"
              style={{ background: 'rgba(92,39,254,0.10)', border: '1px solid rgba(92,39,254,0.20)' }}>
              <p className="font-clash font-bold text-lg mb-1 gradient-text">9.56 CGPA</p>
              <p className="font-jakarta text-xs font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Computer Science & Engineering
              </p>
              <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full w-[95%]"
                  style={{ background: 'linear-gradient(to right, #5C27FE, #00C9B1)' }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom gradient divider ── */}
        <div className="h-px w-full mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, transparent)' }} />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Credit */}
          <p className="font-body text-sm text-center" style={{ color: 'rgba(255,255,255,0.30)' }}>
            Designed & built with{' '}
            <Heart size={11} className="inline text-red-400 mx-0.5" fill="currentColor" />
            {' '}by{' '}
            <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.65)' }}>Kuruba Abhinay</span>
            {' '}· © 2025
          </p>

          {/* Stack badges */}
          <div className="flex items-center gap-2">
            {['React', 'Vite', 'Tailwind', 'Framer'].map(tech => (
              <span key={tech}
                className="font-code text-[10px] px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.35)' }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 font-jakarta font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-200"
            style={{
              background: 'rgba(92,39,254,0.15)',
              border: '1px solid rgba(92,39,254,0.30)',
              color: 'rgba(255,255,255,0.65)',
              boxShadow: '0 4px 16px rgba(92,39,254,0.12)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(92,39,254,0.28)';
              e.currentTarget.style.color      = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(92,39,254,0.15)';
              e.currentTarget.style.color      = 'rgba(255,255,255,0.65)';
            }}
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
