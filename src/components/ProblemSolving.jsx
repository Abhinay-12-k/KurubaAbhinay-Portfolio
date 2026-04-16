import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Code, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

const topics = [
  'Arrays','Strings','Linked Lists','Trees',
  'Dynamic Programming','Recursion',
  'Binary Search','Sorting Algorithms','Hashing',
  'Stack & Queue','Backtracking',
];

function CountUp({ target, duration = 1.6, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step  = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ProblemSolving() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="dsa" className="py-32" style={{ background: 'var(--c-silk)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="text-center mb-16">
          <span className="section-label">Problem Solving</span>
          <h2 className="heading-section text-5xl md:text-6xl">
            Data Structures &{' '}
            <span className="gradient-text">Algorithms</span>
          </h2>
          <p className="font-body text-lg mt-6 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--c-muted)' }}>
            Consistent practice with strong algorithmic thinking and clean problem-solving approach.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-center max-w-5xl mx-auto">

          {/* LeetCode stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16,1,0.3,1] }}
            className="relative"
          >
            {/* Glow aura */}
            <div className="absolute -inset-4 rounded-[36px] blur-2xl opacity-30"
              style={{ background: 'linear-gradient(135deg, #5C27FE, #7B2FBE, #00C9B1)' }} />
            {/* Card */}
            <div className="relative rounded-[28px] overflow-hidden text-white text-center px-10 py-12"
              style={{
                background: 'linear-gradient(135deg, #5C27FE 0%, #7B2FBE 55%, #00C9B1 100%)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.15) inset, 0 20px 60px rgba(92,39,254,0.35)',
              }}
            >
              <div className="absolute inset-0 opacity-[0.07] dot-grid" />
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-center gap-2 font-jakarta text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(196,181,253,0.90)' }}>
                  <Zap size={12} fill="currentColor" /> LeetCode
                </div>
                <div className="font-clash font-bold text-8xl leading-none mb-2 tracking-tight">
                  <CountUp target={250} suffix="+" />
                </div>
                <div className="font-jakarta font-semibold text-base mb-6" style={{ color: 'rgba(255,255,255,0.80)' }}>Problems Solved</div>
                <div className="pt-5 flex items-center justify-center gap-2 font-jakarta text-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.70)' }}>
                  <TrendingUp size={14} /> Strong DSA Foundation
                </div>
              </div>
            </div>
            {/* Outer ring */}
            <div className="absolute -inset-3 rounded-[36px] border-2 border-dashed border-[rgba(92,39,254,0.20)] -z-10" />
          </motion.div>

          {/* Topics + CTA */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.3 }}>
              <p className="font-body text-[17px] leading-[1.85] mb-4" style={{ color: 'var(--c-muted)' }}>
                Solved <span className="font-bold" style={{ color: 'var(--c-indigo)' }}>250+ problems</span> on LeetCode across a wide range of data structure and algorithm topics. Focused on clean, optimized, and well-structured solutions.
              </p>
              <div className="flex items-center gap-2 font-jakarta text-sm font-medium" style={{ color: 'var(--c-muted)' }}>
                <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                Consistent practice with real interview-focused problem sets
              </div>
            </motion.div>

            {/* Topic pills */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="flex items-center gap-2 mb-4">
                <Code size={15} style={{ color: 'var(--c-indigo)' }} />
                <span className="font-jakarta font-bold text-sm uppercase tracking-[0.12em]" style={{ color: 'var(--c-dark)' }}>Key Topics Covered</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, i) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.06 }}
                    className="tag-code"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.7 }}>
              <motion.a
                href="https://leetcode.com/u/ABHINAYGOWDA_9/"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-jakarta font-semibold text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #F5A623 0%, #E8890C 100%)',
                  boxShadow: '0 4px 20px rgba(245,166,35,0.35)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,166,35,0.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,166,35,0.35)'; }}
              >
                <ExternalLink size={15} /> View My LeetCode Profile
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
