import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Experience from './components/experience.jsx';
import Projects from './components/projects.jsx';
import Skills from './components/skills.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Stars from './components/stars.jsx';   // ⭐ IMPORT THE STARS COMPONENT
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function App() {
    return (
        <>
            <Stars />   {/* ⭐ OUTSIDE the main so not blocked by scrolling */}
            <Navbar />
            <main>
                <section id="hero"><Hero /></section>
                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Projects /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
            </main>
            <Footer />
        </>
    );
}

export default App;
