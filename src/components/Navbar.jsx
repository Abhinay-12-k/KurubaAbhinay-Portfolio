import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'DSA',        href: '#dsa' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Floating pill navbar ── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
      >
        <div
          className="flex items-center justify-between h-14 px-5 rounded-full w-full"
          style={{
            maxWidth: '820px',
            background:    'rgba(255,255,255,0.82)',
            backdropFilter:'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border:        '1px solid rgba(92,39,254,0.12)',
            boxShadow:     '0 8px 32px rgba(92,39,254,0.12)',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-clash font-bold text-2xl gradient-text-violet leading-none select-none"
          >
            KA.
          </motion.a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => {
              const id       = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-2 text-[13px] font-jakarta font-semibold rounded-full transition-all duration-200 ${
                    isActive ? 'text-[#5C27FE]' : 'text-[#4A4A6A] hover:text-[#5C27FE]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#5C27FE]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Resume CTA */}
          <div className="hidden lg:block">
            <motion.a
              href="https://docs.google.com/document/d/1XNkYnYga9pbQ7vlEQjZsRcg5wYJeB7E0E-LqlOntDjg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-jakarta font-semibold text-white rounded-full"
              style={{
                background: 'linear-gradient(135deg, #5C27FE, #7B2FBE)',
                boxShadow:  '0 4px 16px rgba(92,39,254,0.30)',
              }}
            >
              <Download size={12} strokeWidth={2.5} />
              Resume
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-[#4A4A6A] hover:bg-[rgba(92,39,254,0.06)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen
                ? <motion.div key="x"    initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}><X    size={18} /></motion.div>
                : <motion.div key="menu" initial={{ rotate: 90 }}  animate={{ rotate: 0 }} exit={{ rotate: -90 }}><Menu size={18} /></motion.div>}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed top-24 left-4 right-4 z-40 rounded-2xl overflow-hidden lg:hidden"
            style={{
              background:    'rgba(255,255,255,0.94)',
              backdropFilter:'blur(24px)',
              border:        '1px solid rgba(92,39,254,0.12)',
              boxShadow:     '0 16px 48px rgba(92,39,254,0.14)',
            }}
          >
            <div className="p-3 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2.5 px-4 font-jakarta font-medium text-sm text-[#4A4A6A] hover:text-[#5C27FE] hover:bg-[rgba(92,39,254,0.06)] rounded-xl transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-2 mt-1 border-t border-[rgba(92,39,254,0.08)]">
                <a
                  href="https://docs.google.com/document/d/1XNkYnYga9pbQ7vlEQjZsRcg5wYJeB7E0E-LqlOntDjg/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 font-jakarta font-semibold rounded-full text-sm text-white"
                  style={{ background: 'linear-gradient(135deg, #5C27FE, #7B2FBE)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  <Download size={13} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
