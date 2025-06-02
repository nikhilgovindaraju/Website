import React from "react";
import styles from "../styles/about.module.css";
import { motion } from "framer-motion";

import uscLogo from '../assets/usc.png';
import jceLogo from '../assets/jce.png';

const certifications = [
  { title: "AWS Certified Cloud Practitioner", link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/" },
  { title: "OCI AI Foundations", link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/" },
  { title: "ML & AI by NASSCOM", link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/" },
  { title: "Certified Scrum Master", link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/" }
];

const About = () => {
  return (
    <motion.section
      className={styles.aboutSection}
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p className={styles.intro}>
        👨‍💻 Passionate Full Stack Developer | 2+ years coding dynamic, user-friendly apps.<br />
        🎓 Currently pursuing my M.S. in Computer Science @ USC | 🚀 Dreaming big & building bigger!
      </p>

      <div className={styles.subSection}>
        <h3>Education</h3>
        <div className={styles.eduList}>
          <div className={styles.eduItem}>
            <img src={uscLogo} alt="USC" />
            <div className={styles.eduDetails}>
              <h4>University of Southern California – M.S. in Computer Science</h4>
              <p>
                Coursework: Analysis of Algorithms, Database Systems, Web Technologies, Information Retrieval & Web Search Engines, ML for Data Science, Applied Cryptography
              </p>
              <p><strong>GPA:</strong> 3.78 / 4.0</p>
            </div>
          </div>

          <div className={styles.eduItem}>
            <img src={jceLogo} alt="Undergrad" />
            <div className={styles.eduDetails}>
              <h4>JSS Science and Technology University – B.E. in Information Science and Engineering</h4>
              <p>
                Coursework: Data Structures, Data Mining, Operating Systems, Software Engineering, Distributed Computing, Computer Networks, Computer Organization & Architecture
              </p>
              <p><strong>GPA:</strong> 9.01 / 10</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.subSection}>
        <h3>Certifications & Achievements</h3>
        <ul className={styles.certList}>
          {certifications.map((cert, i) => (
            <li key={i}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default About;
