import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code2, Star, Zap, Award } from 'lucide-react';

const featured = {
  name: 'Nexora AI',
  tagline: 'AI-Powered Intern Hiring Platform',
  description: 'A startup-based intelligent system designed to evaluate and hire top interns using AI-driven analysis. Includes a smart hiring index that analyzes candidate performance and delivers actionable insights.',
  tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  github: 'https://github.com/Abhinay-12-k/NEXORA.AI',
  live: 'https://nexora-ai-frontend.onrender.com',
  tag: 'AI • Startup',
};

const tier2 = [
  { id:2, name:'CitizenCare AI', tagline:'Multilingual Grievance Management', description:'An AI-powered grievance management system with multilingual AI chatbots, automated officer assignment, multiple role-based dashboards, surveillance maps, and heatmap visualization. Recognized by district authorities.', tech:['MongoDB','Express.js','React.js','Node.js','AI Integration'], github:'https://github.com/Abhinay-12-k/CitizenCareAI', live:'https://citizencareai.onrender.com', accentFrom:'#5C27FE', accentTo:'#00C9B1', tag:'AI • Governance', award:'🏆 Award Winning' },
  { id:3, name:'Hope Bridge',    tagline:'NGO Donation Platform',            description:'A full-featured NGO platform enabling seamless donation management with user and admin functionalities. Provides an intuitive interface for handling contributions and monitoring activities in real time.', tech:['React.js','Tailwind CSS','Firebase'],                       github:'https://github.com/Abhinay-12-k/Hope-Bridge',     live:'https://hope-bridge-ngo.onrender.com', accentFrom:'#f43f5e', accentTo:'#ec4899', tag:'NGO • Social' },
];

const tier3 = [
  { id:4, name:'CloudGuard AI',           tagline:'AI Cloud Fault Prediction',              description:'An AI-based cloud fault prediction system that monitors and predicts potential CPU/system failures. Designed to improve reliability, uptime, and performance in cloud environments.',                                    tech:['TypeScript','AI Concepts','Monitoring','Data Analysis'], github:'https://github.com/Abhinay-12-k/CloudGuardAI',               live:'https://cloudguardai-tirb.onrender.com', accentFrom:'#00C9B1', accentTo:'#0891b2' },
  { id:5, name:'Student Management App',  tagline:'Java Spring Boot Backend',                description:'A robust student management system for efficiently storing and managing student records. Built with Java and Spring Boot, demonstrating RESTful API design and MVC architecture.',                                        tech:['Java','Spring Boot','MySQL','REST API'],                   github:'https://github.com/Abhinay-12-k/Student_Management_App', live:null,                                    accentFrom:'#059669', accentTo:'#0d9488' },
  { id:6, name:'Foundational RAG Agent',  tagline:'Retrieval-Augmented Generation System',  description:'A RAG system integrated with an AI agent capable of answering queries using contextual knowledge from documents. Demonstrates practical GenAI implementation.',                                                        tech:['Python','RAG','AI Agents','LLM'],                         github:'https://github.com/Abhinay-12-k/foundation-rag-agent',   live:null,                                    accentFrom:'#F5A623', accentTo:'#ea580c' },
];

function ProjectCard({ project, delay = 0 }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16,1,0.3,1] }}
      className="group flex flex-col bg-white rounded-[20px] overflow-hidden cursor-default"
      style={{ border: '1px solid rgba(92,39,254,0.08)', boxShadow: 'var(--shadow-card)', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}
      onMouseEnter={e => {
        e.currentTarget.style.transform   = 'translateY(-5px) scale(1.01)';
        e.currentTarget.style.boxShadow   = `0 4px 8px rgba(92,39,254,0.06), 0 24px 64px ${project.accentFrom}22`;
        e.currentTarget.style.borderColor = `${project.accentFrom}30`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform   = '';
        e.currentTarget.style.boxShadow   = 'var(--shadow-card)';
        e.currentTarget.style.borderColor = 'rgba(92,39,254,0.08)';
      }}
    >
      <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${project.accentFrom}, ${project.accentTo})` }} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-jakarta font-bold text-white" style={{ background: `linear-gradient(to right, ${project.accentFrom}, ${project.accentTo})` }}>
            {project.tag || `${project.accentFrom === '#00C9B1' ? 'AI • DevOps' : 'Full Stack'}`}
          </span>
          {project.award && (
            <span className="px-2 py-0.5 text-[10px] font-bold font-jakarta rounded-full" style={{ background: 'rgba(245,166,35,0.10)', color: '#F5A623', border: '1px solid rgba(245,166,35,0.25)' }}>
              {project.award}
            </span>
          )}
        </div>
        <h3 className="font-clash font-bold text-xl text-[#0D0D1A] mb-0.5 tracking-tight group-hover:text-[#5C27FE] transition-colors">{project.name}</h3>
        <p className="font-jakarta text-[11px] font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--c-muted)', letterSpacing: '0.10em' }}>{project.tagline}</p>
        <p className="font-body text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--c-muted)' }}>{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => <span key={t} className="tag-code text-[10px] px-2 py-0.5">{t}</span>)}
        </div>
        <div className="flex gap-2 mt-auto pt-4" style={{ borderTop: '1px solid rgba(92,39,254,0.06)' }}>
          <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-jakarta font-semibold text-sm transition-all duration-200"
            style={{ background: 'rgba(92,39,254,0.04)', border: '1px solid rgba(92,39,254,0.12)', color: 'var(--c-indigo)' }}
          >
            <Github size={13} /> GitHub
          </motion.a>
          {project.live
            ? <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white font-jakarta font-semibold text-sm"
                style={{ background: `linear-gradient(to right, ${project.accentFrom}, ${project.accentTo})` }}
              >
                <ExternalLink size={13} /> Live Demo
              </motion.a>
            : <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-jakarta font-semibold text-sm cursor-not-allowed select-none"
                style={{ background: 'rgba(92,39,254,0.03)', color: 'rgba(74,74,106,0.45)', border: '1px solid rgba(92,39,254,0.06)' }}>
                <Code2 size={13} /> Backend Only
              </div>
          }
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedCard() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16,1,0.3,1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-[24px] text-white mb-8 cursor-default noise-overlay"
      style={{
        background: 'linear-gradient(135deg, #5b21b6 0%, #4338ca 55%, #0369a1 100%)',
        boxShadow: '0 20px 60px rgba(92,39,254,0.28), 0 4px 16px rgba(0,0,0,0.08)',
      }}
    >
      <div className="absolute inset-0 dot-grid opacity-[0.06]" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 p-6 md:p-7 items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-jakarta font-bold">
              <Star size={11} fill="currentColor" className="text-amber-300" /> Featured Project
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-jakarta font-bold">
              <Zap size={11} fill="currentColor" className="text-cyan-300" /> AI • Startup
            </span>
          </div>
          <h3 className="font-clash font-bold text-4xl md:text-5xl mb-2 leading-[0.95] tracking-tight">{featured.name}</h3>
          <p className="font-jakarta font-semibold text-xs uppercase tracking-[0.18em] mb-3" style={{ color: 'rgba(196,181,253,0.95)' }}>{featured.tagline}</p>
          <p className="font-body text-sm leading-relaxed mb-5 max-w-xl" style={{ color: 'rgba(255,255,255,0.82)' }}>{featured.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {featured.tech.map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-jakarta font-semibold bg-white/15 backdrop-blur-sm border border-white/20">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <motion.a href={featured.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full text-sm font-jakarta font-semibold hover:bg-white/25 transition-all duration-200"
            >
              <Github size={14} /> View Code
            </motion.a>
            <motion.a href={featured.live} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#5C27FE] rounded-full text-sm font-jakarta font-semibold hover:shadow-xl transition-all duration-200"
            >
              <ExternalLink size={14} /> Live Demo
            </motion.a>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center gap-3 pr-2">
          <div className="w-16 h-16 rounded-[16px] bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Zap size={28} className="text-cyan-300" fill="currentColor" />
          </div>
          <div className="text-center">
            <p className="font-clash font-bold text-3xl tracking-tight">MERN</p>
            <p className="font-jakarta text-[10px] uppercase font-bold tracking-[0.18em] mt-1" style={{ color: 'rgba(196,181,253,0.85)' }}>Full Stack + AI</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="projects" className="py-32" style={{ background: 'var(--c-pearl)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="text-center mb-14">
          <span className="section-label">Portfolio</span>
          <h2 className="heading-section text-5xl md:text-6xl">Featured <span className="gradient-text">Projects</span></h2>
          <p className="font-body text-lg mt-6 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--c-muted)' }}>
            Real-world applications spanning AI systems, governance platforms, startup products, and full-stack solutions.
          </p>
        </motion.div>
        <FeaturedCard />
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {tier2.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 0.10} />)}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tier3.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 0.08} />)}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-12">
          <motion.a href="https://github.com/Abhinay-12-k" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-jakarta font-semibold text-sm transition-all duration-300"
            style={{ background: '#fff', border: '1px solid rgba(92,39,254,0.14)', boxShadow: 'var(--shadow-card)', color: 'var(--c-indigo)' }}
          >
            <Github size={15} /> View all on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
