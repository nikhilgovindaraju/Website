// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import styles from '../styles/hero.module.css';
// import { Parallax } from 'react-scroll-parallax';

// function Hero() {
//     return (
//         <section className={styles.heroSection} id="hero">
//             <Parallax speed={-5}>
//                 <img
//                     src={`${import.meta.env.BASE_URL}profile-pic.png`}
//                     alt="Profile"
//                     className={styles.profilePic}
//                 />
//             </Parallax>

//             <Parallax speed={5}>
//                 <h1>
//                     Hi, I'm <span className={styles.name}>Nikhil Govindaraju</span>
//                 </h1>
//             </Parallax>

//             <Parallax speed={2}>
//                 <h2>
//                     <Typewriter
//                         words={[
//                             'Full Stack Engineer 💻',
//                             'Cloud & ML Enthusiast ☁️',
//                             'Photographer 📸',
//                             'Passionate Problem Solver 🔎',
//                             'Creative Cook 🍳'
//                         ]}
//                         loop={true}
//                         cursor
//                         cursorStyle="|"
//                         typeSpeed={70}
//                         deleteSpeed={50}
//                         delaySpeed={1200}
//                     />
//                 </h2>
//             </Parallax>

//             <Parallax speed={2}>
//                 <p className={styles.description}>
//                     MSCS @ USC | 2+ years experience in building scalable full-stack solutions. <br />
//                     I love solving real-world problems through clean code, intuitive UI/UX, and cloud-driven applications.
//                 </p>
//             </Parallax>

//             <a
//                 href={`${import.meta.env.BASE_URL}NikhilGovindaraju.pdf`}
//                 className={styles.resumeBtn}
//                 target='_blank'
//                 rel='noopener noreferrer'
//             >
//                 📄 Resume
//             </a>
//             <p className={styles.scrollDown}>⬇ Discover My Work</p>
//         </section>
//     );
// }

// export default Hero;


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
            ↓ Discover My Work ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

