import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Award, Zap } from 'lucide-react';

const hackathons = [
  { name:'AIX Anantapur Police Hackathon', achievement:'Round 1 Winner', position:'1st in Round', project:'Multilingual FIR Generator', category:'AI for Public Safety', subtitle:'with IncuX AI', icon:Trophy, accentFrom:'#F5A623', accentTo:'#E8890C', isWinner:true, number:'01' },
  { name:'Tech Clash Hackathon 2K26',      achievement:'Runner-up',       position:'2nd Place',   project:'Citizen Grievance Management Portal', category:'Open Innovation',  icon:Medal,  accentFrom:'#5C27FE', accentTo:'#7B2FBE', number:'02' },
  { name:'Cynosure Hackathon',             achievement:'Top 5 Teams',     position:'Top 5',       project:'CitizenCare AI',                     category:'Smart Governance', subtitle:'SVU University', icon:Award, accentFrom:'#00C9B1', accentTo:'#0891b2', number:'03' },
];

function HackEntry({ h, index, isLast }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.16,1,0.3,1] }}
      className="relative flex gap-8"
    >
      {/* Left connector */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-1">
        <div className="relative z-10 w-12 h-12 rounded-[14px] flex items-center justify-center shadow-lg flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${h.accentFrom}, ${h.accentTo})`, boxShadow: `0 8px 24px ${h.accentFrom}40` }}>
          <h.icon size={20} className="text-white" />
        </div>
        {!isLast && <div className="mt-3 flex-1 w-0.5 rounded-full min-h-[3rem] timeline-line" />}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="flex-1 mb-8 group relative overflow-hidden rounded-[20px] bg-white"
        style={{ border: '1px solid rgba(92,39,254,0.08)', boxShadow: 'var(--shadow-card)', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${h.accentFrom}36`;
          e.currentTarget.style.boxShadow   = `0 12px 40px ${h.accentFrom}18`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(92,39,254,0.08)';
          e.currentTarget.style.boxShadow   = 'var(--shadow-card)';
        }}
      >
        {/* Accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
          style={{ background: `linear-gradient(to bottom, ${h.accentFrom}, ${h.accentTo})` }} />

        {/* Faded watermark number */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 font-clash font-bold text-9xl opacity-[0.04] select-none pointer-events-none tracking-tighter"
          style={{ color: h.accentFrom }}>{h.number}</div>

        <div className="px-7 py-6 pl-8 relative">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-jakarta font-bold text-white"
                style={{ background: `linear-gradient(to right, ${h.accentFrom}, ${h.accentTo})` }}>
                {h.position}
              </span>
              {h.isWinner && (
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-jakarta font-bold"
                  style={{ background: 'rgba(245,166,35,0.12)', color: '#F5A623', border: '1px solid rgba(245,166,35,0.25)' }}>
                  <Zap size={9} fill="currentColor" /> WINNER
                </span>
              )}
            </div>
            <span className="font-jakarta text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(92,39,254,0.05)', color: 'var(--c-muted)', border: '1px solid rgba(92,39,254,0.08)' }}>
              {h.category}
            </span>
          </div>
          <h3 className="font-clash font-bold text-xl text-[#0D0D1A] group-hover:text-[#5C27FE] transition-colors mb-0.5 tracking-tight">
            {h.name}
          </h3>
          {h.subtitle && <p className="font-body text-xs font-medium mb-4" style={{ color: 'var(--c-muted)' }}>{h.subtitle}</p>}
          {!h.subtitle && <div className="mb-4" />}
          <div className="flex flex-wrap gap-6 font-body text-sm">
            <div>
              <p className="font-jakarta text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: 'var(--c-muted)', opacity: 0.7 }}>Project Built</p>
              <p className="font-jakarta font-bold" style={{ color: 'var(--c-dark)' }}>{h.project}</p>
            </div>
            <div>
              <p className="font-jakarta text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: 'var(--c-muted)', opacity: 0.7 }}>Achievement</p>
              <p className="font-jakarta font-bold" style={{ color: h.accentFrom }}>🏅 {h.achievement}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hackathons() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="hackathons" className="py-32" style={{ background: 'var(--c-lavender)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="text-center mb-16">
          <span className="section-label">Competitions</span>
          <h2 className="heading-section text-5xl md:text-6xl">
            Hackathon{' '}
            <span style={{ background: 'linear-gradient(135deg, #F5A623, #E8890C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Achievements
            </span>
          </h2>
          <p className="font-body text-lg mt-6 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--c-muted)' }}>
            Competed in multiple hackathons, building innovative AI-powered solutions under tight deadlines.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {hackathons.map((h, i) => <HackEntry key={h.name} h={h} index={i} isLast={i === hackathons.length - 1} />)}
        </div>

        {/* Stats strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-4 max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-10 py-6 px-8 rounded-[20px]"
            style={{ background: '#fff', border: '1px solid rgba(92,39,254,0.09)', boxShadow: 'var(--shadow-card)' }}>
            {[
              { num: '3', label: 'Hackathons Participated' },
              { num: '2', label: 'Podium Finishes'         },
              { num: '1', label: 'Round 1 Winner'          },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-clash font-bold text-5xl gradient-text-gold">{stat.num}</p>
                <p className="font-jakarta text-xs font-medium mt-1" style={{ color: 'var(--c-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
