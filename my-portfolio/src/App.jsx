
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Experience from './components/experience.jsx';
import Projects from './components/projects.jsx';
import Skills from './components/skills.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Certifications from './components/Certifications.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { motion, useScroll } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
    const { scrollYProgress } = useScroll();

    return (
        <ThemeProvider>
            <motion.div
                className="scrollProgress"
                style={{ scaleX: scrollYProgress }}
            />
            
            <Navbar />
            <main>
                <div id="hero"><Hero /></div>
                <div id="about"><About /></div>
                <div id="experience"><Experience /></div>
                <div id="projects"><Projects /></div>
                <div id="certifications"><Certifications /></div>
                <div id="skills"><Skills /></div>
                <div id="contact"><Contact /></div>
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default App;