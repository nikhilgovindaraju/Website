import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import styles from '../styles/hero.module.css';

const roles = [
  'Full-Stack Software Engineer',
  'AWS Cloud',
  'Scalable API Design',
  'Building Production-Grade Systems',
  'Distributed Systems & Cloud Architectures',
  'AI-Integrated Full-Stack Applications',
];

// const stats = [
//   { value: '2+',  label: 'Years Exp'     },
//   { value: '15+', label: 'Projects'      },
//   { value: '10+', label: 'Certifications' },
// ];

function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay]   = useState('');
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const Hero = () => {
  const role    = useTypewriter(roles);
  const resumeHref = `${import.meta.env.BASE_URL}NikhilGovindaraju.pdf`;

  return (
    <section className={styles.hero} id="hero">

      {/* Left column */}
      <div className={styles.left}>

        {/* Status badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x:   0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badgeDot}></span>
          Actively Looking For Full-time Roles
        </motion.div>

        {/* Name */}
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Nikhil
          <br />
          <span className={styles.nameAccent}>Govindaraju</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          className={styles.roleRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className={styles.rolePrefix}>{'>'}</span>
          <span className={styles.roleText}>{role}</span>
          <span className={styles.cursor}>|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
  M.S. Computer Science graduate from USC with 2+ years of
  industry experience building full-stack systems, cloud-native
  APIs, and AI-powered products. Ready to contribute from day one.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href={resumeHref} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            <FiDownload size={16}></FiDownload>
            Resume
          </a>
          <a href="#projects" className={styles.btnGhost}>
            See my work
            <FiArrowRight size={16}></FiArrowRight>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <button
            className={styles.socialBtn}
            onClick={() => window.open('https://github.com/nikhilgovindaraju', '_blank')}
            aria-label="GitHub"
          >
            <FiGithub size={18}></FiGithub>
          </button>
          <button
            className={styles.socialBtn}
            onClick={() => window.open('https://www.linkedin.com/in/nikhil-govindaraju/', '_blank')}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18}></FiLinkedin>
          </button>
        </motion.div>

      </div>

      {/* Right column */}
      <div className={styles.right}>

        {/* Profile image card */}
        <motion.div
          className={styles.imageCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1   }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}profile-pic.png`}
            alt="Nikhil Govindaraju"
            className={styles.profilePic}
          />
          <div className={styles.imageGlow}></div>

          {/* Floating tag top */}
          <div className={styles.floatTop}>
            <span className={styles.floatDot}></span>
            USC M.S. CS '25
          </div>


        </motion.div>

{/* Tech stack chips */}
<motion.div
  className={styles.techStack}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y:  0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
  {['React', 'Node.js', 'AWS', 'Python', 'PostgreSQL'].map(tech => (
    <span key={tech} className={styles.techChip}>{tech}</span>
  ))}
</motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className={styles.scrollLine}></div>
      </motion.div>

    </section>
  );
};

export default Hero;