import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/about.module.css';
import uscLogo  from '../assets/usc.png';
import jssLogo  from '../assets/jce.png';
import { useScrollReveal, fadeUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from '../hooks/useScrollReveal';

const stats = [
  { value: '2+',  label: 'Years of Experience', desc: 'Full-time & internships'         },
  { value: '15+', label: 'Projects Built',       desc: 'From idea to production'        },
  { value: '30+', label: 'Technologies',         desc: 'Languages, frameworks & tools'  },
  { value: '4',   label: 'Domains',              desc: 'Full Stack, Cloud, AI Powered Apps, Mobile'  },
];

const education = [
  {
    logo: uscLogo,
    school: 'University of Southern California',
    short: 'USC Viterbi School of Engineering',
    degree: 'M.S. Computer Science',
    gpa: '3.81 / 4.0',
    period: '2024 – 2025',
    location: 'Los Angeles, CA',
    courses: ['Analysis of Algorithms', 'Web Technologies', 'Database Systems', 'Machine Learning', 'Applied Cryptography', 'Advanced Game Dev', 'Information Retrieval and Search Engines'],
    current: false,
  },
  {
    logo: jssLogo,
    school: 'JSS Science & Technology University',
    short: 'Mysuru, India',
    degree: 'B.E. Information Science',
    gpa: '9.01 / 10',
    period: '2017 – 2021',
    location: 'Mysuru, India',
    courses: ['Data Structures', 'Operating Systems', 'Computer Networks', 'Distributed Systems', 'Data Mining', 'Software Engineering'],
    current: false,
  },
];

function StatCard({ stat }) {
  return (
    <motion.div className={styles.statCard} variants={staggerItem}>
      <span className={styles.statValue}>{stat.value}</span>
      <span className={styles.statLabel}>{stat.label}</span>
      <span className={styles.statDesc}>{stat.desc}</span>
    </motion.div>
  );
}

function EduCard({ edu, index }) {
  return (
    <motion.div
      className={edu.current ? `${styles.eduCard} ${styles.eduCurrent}` : styles.eduCard}
      variants={index === 0 ? slideInLeft : slideInRight}
    >
      {edu.current && (
        <div className={styles.currentBadge}>
          <span className={styles.currentDot}></span>
          Currently Enrolled
        </div>
      )}

      <div className={styles.eduTop}>
        <img src={edu.logo} alt={edu.school} className={styles.eduLogo} />
        <div className={styles.eduInfo}>
          <h3 className={styles.eduSchool}>{edu.school}</h3>
          <p className={styles.eduShort}>{edu.short}</p>
        </div>
      </div>

      <div className={styles.eduMid}>
        <div className={styles.eduDegreeWrap}>
          <span className={styles.eduDegree}>{edu.degree}</span>
          <span className={styles.eduPeriod}>{edu.period}</span>
        </div>
        <div className={styles.gpaWrap}>
          <span className={styles.gpaLabel}>GPA</span>
          <span className={styles.gpaValue}>{edu.gpa}</span>
        </div>
      </div>

      <div className={styles.eduCourses}>
        <p className={styles.coursesLabel}>Coursework</p>
        <div className={styles.chips}>
          {edu.courses.map(c => (
            <span key={c} className={styles.chip}>{c}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const About = () => {
  const { ref: introRef,  controls: introControls  } = useScrollReveal();
  const { ref: statsRef,  controls: statsControls  } = useScrollReveal();
  const { ref: eduRef,    controls: eduControls    } = useScrollReveal();

  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>

        {/* ---- Intro ---- */}
        <motion.div
          ref={introRef}
          className={styles.intro}
          variants={fadeUp}
          initial="hidden"
          animate={introControls}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine}></span>
            About Me
            <span className={styles.labelLine}></span>
          </div>

          <h2 className={styles.heading}>
            I build things that
            <span className={styles.accent}> live on the internet</span>
          </h2>

          <div className={styles.bioGrid}>
          <p className={styles.bio}>
  I'm a <strong>Full Stack Developer</strong> with 2+ years of
  industry experience building scalable, cloud-native systems.
  I care deeply about clean architecture, intuitive interfaces,
  and shipping products that make a real difference.
</p>
<p className={styles.bio}>
  <strong>M.S. CS graduate, USC Viterbi School of Engineering.</strong> I've
  worked across healthcare, embedded systems, and SaaS — and I'm
  actively looking for full-time roles where I can contribute
  from day one.
</p>
          </div>
        </motion.div>

        {/* ---- Stats ---- */}
        <motion.div
          ref={statsRef}
          className={styles.statsGrid}
          variants={staggerContainer}
          initial="hidden"
          animate={statsControls}
        >
          {stats.map(s => (
            <StatCard key={s.label} stat={s} />
          ))}
        </motion.div>

        {/* ---- Education ---- */}
        <motion.div
          ref={eduRef}
          className={styles.eduSection}
          variants={staggerContainer}
          initial="hidden"
          animate={eduControls}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine}></span>
            Education
            <span className={styles.labelLine}></span>
          </div>
          <div className={styles.eduGrid}>
            {education.map((edu, i) => (
              <EduCard key={edu.school} edu={edu} index={i} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;