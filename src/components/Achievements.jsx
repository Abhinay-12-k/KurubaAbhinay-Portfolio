import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Star, Trophy, Code, Award, Target } from 'lucide-react';

const achievements = [
  { icon:GraduationCap, bigNumber:'9.56', title:'CGPA', subtitle:'Academic Excellence', description:'Outstanding academic performance throughout Computer Science & Engineering degree, consistently ranking among top students.', accentFrom:'#5C27FE', accentTo:'#7B2FBE' },
  { icon:Star,          bigNumber:'🏆',   title:'SP Recognition Award', subtitle:'Government Award', description:'Special Recognition Award from District Superintendent of Police, Anantapur for CitizenCare AI — an AI-integrated governance solution.', accentFrom:'#F5A623', accentTo:'#E8890C', highlight:true },
  { icon:Trophy,        bigNumber:'3',    title:'Hackathons', subtitle:'Competitive Excellence', description:'Competed in 3 major hackathons achieving Runner-up, Round 1 Winner, and Top 5 placements across different categories.', accentFrom:'#f43f5e', accentTo:'#ec4899' },
  { icon:Code,          bigNumber:'250+', title:'LeetCode Problems', subtitle:'Problem Solving', description:'Solved 250+ algorithmic problems on LeetCode with a strong foundation in data structures and algorithm design patterns.', accentFrom:'#F5A623', accentTo:'#ea580c' },
];

function AchievementStrip({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.10, ease: [0.16,1,0.3,1] }}
      className="group relative overflow-hidden rounded-[18px] bg-white flex items-center gap-6 px-7 py-5 cursor-default"
      style={{ border: '1px solid rgba(92,39,254,0.08)', boxShadow: 'var(--shadow-card)', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${item.accentFrom}30`;
        e.currentTarget.style.boxShadow   = `0 10px 32px ${item.accentFrom}18`;
        e.currentTarget.style.transform   = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(92,39,254,0.08)';
        e.currentTarget.style.boxShadow   = 'var(--shadow-card)';
        e.currentTarget.style.transform   = '';
      }}
    >
      {/* Left thick accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-r-full"
        style={{ background: `linear-gradient(to bottom, ${item.accentFrom}, ${item.accentTo})` }} />

      {/* Icon */}
      <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-md"
        style={{ background: `linear-gradient(135deg, ${item.accentFrom}, ${item.accentTo})`, boxShadow: `0 8px 20px ${item.accentFrom}35` }}>
        <item.icon size={20} className="text-white" />
      </div>

      {/* Big number */}
      <div className="flex-shrink-0">
        <p className="font-clash font-bold text-5xl leading-none tracking-tight"
          style={{ background: `linear-gradient(135deg, ${item.accentFrom}, ${item.accentTo})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
          {item.bigNumber}
        </p>
      </div>

      {/* Divider */}
      <div className="w-px self-stretch" style={{ background: 'rgba(92,39,254,0.08)' }} />

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <p className="font-clash font-bold text-xl text-[#0D0D1A]">{item.title}</p>
          {item.highlight && <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse-soft shadow shadow-amber-200" />}
        </div>
        <p className="font-jakarta text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: 'var(--c-muted)', opacity: 0.65 }}>{item.subtitle}</p>
        <p className="font-body text-sm leading-snug hidden sm:block" style={{ color: 'var(--c-muted)' }}>{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="achievements" className="py-32" style={{ background: 'var(--c-warm)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="text-center mb-16">
          <span className="section-label">Recognition</span>
          <h2 className="heading-section text-5xl md:text-6xl">
            Key{' '}
            <span style={{ background: 'linear-gradient(135deg, #F5A623, #f43f5e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Achievements
            </span>
          </h2>
          <p className="font-body text-lg mt-6 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--c-muted)' }}>
            A snapshot of milestones, awards, and recognitions earned through academic excellence and real-world impact.
          </p>
        </motion.div>

        {/* Strips */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {achievements.map((a, i) => <AchievementStrip key={a.title} item={a} index={i} />)}
        </div>

        {/* Goal banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="relative overflow-hidden rounded-[24px] text-white noise-overlay"
          style={{ background: 'linear-gradient(135deg, #5C27FE 0%, #7B2FBE 55%, #00C9B1 100%)', boxShadow: '0 12px 48px rgba(92,39,254,0.30)' }}
        >
          <div className="absolute inset-0 opacity-[0.07] dot-grid" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center p-8 md:p-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target size={20} className="text-[#F5A623]" />
                <p className="font-jakarta text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(196,181,253,0.90)' }}>Goal</p>
              </div>
              <p className="font-body text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                To grow as a <span className="text-white font-semibold">Full Stack Developer</span>,{' '}
                <span className="text-white font-semibold">AI Engineer</span>, and{' '}
                <span className="text-white font-semibold">Java Developer</span> while contributing to innovative and meaningful products that create real-world impact.
              </p>
            </div>
            <div className="flex md:flex-col gap-8 md:gap-5 justify-center items-center">
              <div className="text-center">
                <p className="font-clash font-bold text-6xl leading-none tracking-tight">9.56</p>
                <p className="font-jakarta text-sm font-medium mt-1.5" style={{ color: 'rgba(196,181,253,0.80)' }}>CGPA Score</p>
              </div>
              <div className="hidden md:block w-16 h-px bg-white/20" />
              <div className="text-center">
                <p className="font-clash font-bold text-6xl leading-none tracking-tight">6mo</p>
                <p className="font-jakarta text-sm font-medium mt-1.5" style={{ color: 'rgba(196,181,253,0.80)' }}>Internship Exp.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
