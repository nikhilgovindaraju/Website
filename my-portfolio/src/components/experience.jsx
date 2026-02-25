import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/experience.module.css';
import { useScrollReveal, fadeUp } from '../hooks/useScrollReveal';

import exinousLogo    from '../assets/exinous.png';
import boschLogo      from '../assets/bosch.png';
import codespeedyLogo from '../assets/codespeedy.png';
import jubilantLogo   from '../assets/jubilant.png';

const experiences = [
  {
    id: 'jubilant',
    role: 'Software Engineering Intern',
    company: 'Jubilant HollisterStier',
    shortName: 'Jubilant HollisterStier',
    period: 'May 2025 – Aug 2025',
    location: 'Spokane, WA',
    type: 'Internship',
    logo: jubilantLogo,
    color: '#4f8ef7',
    bullets: [
      'Architected and deployed TimeStudy, a cloud-native analytics platform for real-time task management and workforce insights',
      'Integrated JWT-based role access control for secure, real-time task insights across departments',
      'Designed PostgreSQL schemas and built RESTful APIs with full authentication and authorization layers',
      'Developed unit-tested backend services and interactive dashboards with live data visualisation',
      'Enabled future ML integration with modular API and data pipeline design',
    ],
    skills: ['Next.js', 'PostgreSQL', 'AWS', 'Node.js', 'JWT', 'CI/CD', 'RESTful APIs'],
  },
  {
    id: 'exinous',
    role: 'Software Development Engineer',
    company: 'Exinous Technologies',
    shortName: 'Exinous Technologies',
    period: 'Sep 2022 – Nov 2023',
    location: 'Mysuru, India',
    type: 'Full-time',
    logo: exinousLogo,
    color: '#38bdf8',
    bullets: [
      'Revamped Navipoint Health website with React.js and SEO optimisations, boosting performance and accessibility scores',
      'Developed reusable Vue.js + TypeScript ERP components reducing maintenance overhead by 30%',
      'Accelerated delivery of multimodule features by 25% through component standardisation and rigorous code reviews',
      'Validated RESTful APIs using Postman across multiple microservices, enhancing reliability and performance',
    ],
    skills: ['React.js', 'Vue.js', 'TypeScript', 'Postman', 'Git', 'Agile', 'ERP'],
  },
  {
    id: 'bosch-sde',
    role: 'Associate Software Engineer',
    company: 'Bosch Global Software',
    shortName: 'Bosch Global Software',
    period: 'Jun 2021 – Sep 2022',
    location: 'Bengaluru, India',
    type: 'Full-time',
    logo: boschLogo,
    color: '#7eb3ff',
    bullets: [
      'Built Python & Shell diagnostic tools for embedded Linux (Bosch D-tect 200), improving system performance significantly',
      'Enhanced C++ firmware for real-time sensor data rendering, delivering smoother UI responsiveness on device',
      'Designed health-check utilities for field diagnostics enabling faster fault recovery in embedded units',
      'Contributed to production-ready firmware upgrades across multiple industrial product lines',
    ],
    skills: ['Python', 'Shell', 'C++', 'Embedded Linux', 'GitLab', 'Firmware'],
  },
  {
    id: 'bosch-intern',
    role: 'Software Engineering Intern',
    company: 'Robert Bosch Engineering & Business Solutions',
    shortName: 'Robert Bosch', 
    period: 'Mar 2021 – Jun 2021',
    location: 'Bengaluru, India',
    type: 'Internship',
    logo: boschLogo,
    color: '#7eb3ff',
    bullets: [
      'Developed and automated test workflows for the Bosch MeasrOn Android app using Java and Appium framework',
      'Designed scalable mobile test cases in Android Studio following test-driven development practices',
    ],
    skills: ['Java', 'Appium', 'Android Studio', 'TDD', 'Mobile Testing'],
  },
  {
    id: 'codespeedy',
    role: 'Python Developer Intern',
    company: 'Codespeedy Technology pvt ltd',
    shortName: 'Codespeedy Technology',
    period: 'Aug 2019 – Jan 2020',
    location: 'Remote',
    type: 'Internship',
    logo: codespeedyLogo,
    color: '#4f8ef7',
    bullets: [
      'Developed beginner-friendly Python scripts and annotated code examples to teach core programming concepts',
      'Authored educational content translating complex topics into accessible, well-structured learning modules',
    ],
    skills: ['Python', 'Technical Writing', 'DSA', 'Content Creation'],
  },
];

function TabBtn({ exp, isActive, onClick }) {
  return (
    <button
      className={isActive ? `${styles.tabBtn} ${styles.tabActive}` : styles.tabBtn}
      onClick={onClick}
    >
      <img src={exp.logo} alt={exp.company} className={styles.tabLogo} />
      <div className={styles.tabText}>
        <span className={styles.tabName}>{exp.shortName}</span>
        <span className={styles.tabPeriod}>{exp.period.split('–')[0].trim()}</span>
      </div>
      {isActive && <div className={styles.tabIndicator}></div>}
    </button>
  );
}

function BulletItem({ text }) {
  return (
    <li className={styles.bullet}>
      <span className={styles.bulletArrow}>▹</span>
      {text}
    </li>
  );
}

function SkillTag({ name }) {
  return <span className={styles.skill}>{name}</span>;
}

const Experience = () => {
  const [activeId, setActiveId] = useState('jubilant');
  const { ref, controls } = useScrollReveal();
  const active = experiences.find(e => e.id === activeId);

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.inner}>

        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className={styles.header}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine}></span>
            Career
            <span className={styles.labelLine}></span>
          </div>
          <h2 className={styles.heading}>Work Experience</h2>
        </motion.div>

        <div className={styles.layout}>

          {/* Tab list */}
          <div className={styles.tabList}>
            {experiences.map(exp => (
              <TabBtn
                key={exp.id}
                exp={exp}
                isActive={activeId === exp.id}
                onClick={() => setActiveId(exp.id)}
              />
            ))}
          </div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              className={styles.panel}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x:  0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Panel header */}
              <div className={styles.panelHeader}>
                <div className={styles.panelMeta}>
                  <h3 className={styles.role}>{active.role}</h3>
                  <p className={styles.company}>
                    @ {active.company}
                  </p>
                  <div className={styles.metaRow}>
                    <span className={styles.period}>{active.period}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.location}>{active.location}</span>
                    <span className={styles.typeBadge}>{active.type}</span>
                  </div>
                </div>
                <img src={active.logo} alt={active.company} className={styles.panelLogo} />
              </div>

              {/* Bullets */}
              <ul className={styles.bullets}>
                {active.bullets.map(b => (
                  <BulletItem key={b} text={b} />
                ))}
              </ul>

              {/* Skills */}
              <div className={styles.skills}>
                {active.skills.map(s => (
                  <SkillTag key={s} name={s} />
                ))}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Experience;