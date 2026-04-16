import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Download, Send, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  { icon:Mail,     label:'Email',    value:'abhinaykamagonda@gmail.com', href:'mailto:abhinaykamagonda@gmail.com', accentFrom:'#5C27FE', accentTo:'#7B2FBE', isMailto:true },
  { icon:Linkedin, label:'LinkedIn', value:'/in/abhinaykuruba',           href:'https://www.linkedin.com/in/abhinaykuruba/',             accentFrom:'#0077b5', accentTo:'#00a0dc' },
  { icon:Github,   label:'GitHub',   value:'Abhinay-12-k',                href:'https://github.com/Abhinay-12-k',                       accentFrom:'#0D0D1A', accentTo:'#374151' },
  { icon:MapPin,   label:'Location', value:'India 🇮🇳',                   href:null,                                                     accentFrom:'#059669', accentTo:'#0d9488' },
];

function ContactCard({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const inner = (
    <>
      <div className="w-11 h-11 rounded-[12px] flex items-center justify-center flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${item.accentFrom}, ${item.accentTo})`, boxShadow: `0 6px 20px ${item.accentFrom}35` }}>
        <item.icon size={18} className="text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-jakarta text-[10px] uppercase tracking-[0.16em] font-bold mb-0.5" style={{ color: 'var(--c-muted)', opacity: 0.65 }}>{item.label}</p>
        <p className="font-jakarta font-semibold text-sm truncate" style={{ color: 'var(--c-dark)' }}>{item.value}</p>
      </div>
      {item.href && <ArrowUpRight size={15} className="flex-shrink-0 transition-colors duration-200" style={{ color: 'rgba(92,39,254,0.30)' }} />}
    </>
  );

  const motionProps = {
    ref,
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay: index * 0.10, ease: [0.16,1,0.3,1] },
    ...(item.href ? { whileHover: { y: -3 } } : {}),
    onMouseEnter: item.href ? e => {
      e.currentTarget.style.borderColor = `${item.accentFrom}30`;
      e.currentTarget.style.boxShadow   = `0 8px 28px ${item.accentFrom}18`;
    } : undefined,
    onMouseLeave: item.href ? e => {
      e.currentTarget.style.borderColor = 'rgba(92,39,254,0.09)';
      e.currentTarget.style.boxShadow   = 'var(--shadow-card)';
    } : undefined,
  };

  const cls   = `group flex items-center gap-4 p-5 rounded-[16px] bg-white transition-all duration-300 ${item.href ? 'cursor-pointer' : 'cursor-default'}`;
  const style = { border: '1px solid rgba(92,39,254,0.09)', boxShadow: 'var(--shadow-card)' };

  return item.href
    ? <motion.a {...motionProps} href={item.href} {...(!item.isMailto && { target:'_blank', rel:'noopener noreferrer' })} className={cls} style={style}>{inner}</motion.a>
    : <motion.div {...motionProps} className={cls} style={style}>{inner}</motion.div>;
}

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="contact" className="py-32" style={{ background: 'linear-gradient(180deg, var(--c-pearl) 0%, var(--c-surface) 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="text-center mb-16">
          <span className="section-label">Get In Touch</span>
          <h2 className="heading-section text-5xl md:text-6xl">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="font-body text-lg mt-6 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--c-muted)' }}>
            Open to full-time roles, internships, freelance projects, and exciting collaborations. Let's build something impactful together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact cards grid */}
          <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
            {contactLinks.map((item, i) => <ContactCard key={item.label} item={item} index={i} />)}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="relative overflow-hidden rounded-[24px] text-white text-center noise-overlay"
            style={{ background: 'linear-gradient(135deg, #5C27FE 0%, #7B2FBE 50%, #0369a1 100%)', backgroundSize: '300% 300%', animation: 'gradientShift 8s ease infinite', boxShadow: '0 16px 48px rgba(92,39,254,0.28)' }}
          >
            <div className="absolute inset-0 dot-grid opacity-[0.06]" />
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl" />

            <div className="relative px-8 py-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full font-jakarta text-sm font-semibold mb-5">
                <Send size={12} /> Open to Opportunities
              </span>
              <h3 className="font-clash font-bold text-4xl mb-4 tracking-tight">Ready to work together?</h3>
              <p className="font-body text-base md:text-lg mb-8 max-w-md mx-auto leading-[1.8]" style={{ color: 'rgba(255,255,255,0.82)' }}>
                Whether it's a full-time role, a freelance project, or just a conversation about tech and AI — I'd love to connect.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="https://docs.google.com/document/d/1XNkYnYga9pbQ7vlEQjZsRcg5wYJeB7E0E-LqlOntDjg/edit?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white rounded-full font-jakarta font-semibold text-sm hover:shadow-2xl transition-all duration-300"
                  style={{ color: 'var(--c-indigo)' }}
                >
                  <Download size={15} /> Download Resume
                </motion.a>
                <motion.a
                  href="mailto:abhinaykamagonda@gmail.com"
                  whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm text-white rounded-full font-jakarta font-semibold text-sm border border-white/30 hover:bg-white/25 transition-all duration-300"
                >
                  <Mail size={15} /> Say Hello
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
