import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Hackathons from './components/Hackathons';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--c-surface)' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProblemSolving />
      <Projects />
      <Experience />
      <Hackathons />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
