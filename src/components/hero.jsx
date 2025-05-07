import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import styles from '../styles/hero.module.css';

function Hero() {
    return (
        <section className={styles.heroSection} id="hero">
            <img src={`${import.meta.env.BASE_URL}profile-pic.png`} alt="Profile" className={styles.profilePic} />
            <h1>
                Hi, I'm <span className={styles.name}>Nikhil Govindaraju</span>
            </h1>
            <h2>
                <Typewriter
                    words={[
                        'Full Stack Engineer 💻',
                        'Cloud & ML Enthusiast ☁️',
                        'Photographer 📸',
                        'Passionate Problem Solver 🔎',
                        'Creative Cook 🍳'
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                />
            </h2>

            <p className={styles.description}>
                MSCS @ USC | 2+ years experience in building scalable full-stack solutions. <br />
                I love solving real-world problems through clean code, intuitive UI/UX, and cloud-driven applications.
            </p>

            <a href={`${import.meta.env.BASE_URL}NikhilGovindaraju.pdf`} className={styles.resumeBtn} download>
                📄 Resume
            </a>
            <p className={styles.scrollDown}>↓ Scroll Down to Explore More</p>
        </section>
    );
}

export default Hero;
