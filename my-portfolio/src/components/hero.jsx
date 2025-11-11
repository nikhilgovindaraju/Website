


import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import styles from '../styles/hero.module.css';

function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.imageContainer}>
        <img
          src={`${import.meta.env.BASE_URL}profile-pic.png`}
          alt="Nikhil Govindaraju"
          className={styles.profilePic}
        />
      </div>

      <div className={styles.textContent}>
        <h1>
          Hi, I'm <span className={styles.name}>NIKHIL GOVINDARAJU</span>
        </h1>
        <h2>
  <span className={styles.typewriterWrapper}>
    <Typewriter
      words={[
        'Full-Stack Developer 💻',
        'AWS Cloud ☁️',
        'Building Scalable Systems 💡',
        'AI/ML Enthusiast 🤖',
        'Code. Ship. Impact.🎯',
        '⚛️ React-ing to Innovation',
        'Certified Scrum Master'
        ,
      ]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h2>

        <p className={styles.description}>
          MSCS @ USC | 2+ years experience in building scalable full-stack solutions.
          <br />
          I love solving real-world problems through clean code, intuitive UI/UX, and cloud-driven applications.
        </p>

        <div className={styles.buttonGroup}>
          <a
            href={`${import.meta.env.BASE_URL}NikhilGovindaraju.pdf`}
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 RESUME
          </a>

          <a href="#about" className={styles.workBtn}>
             Discover My Work 
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

