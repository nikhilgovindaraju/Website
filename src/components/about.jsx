import React from "react";
import styles from "../styles/about.module.css";
import { motion } from "framer-motion";

import uscLogo from '../assets/usc.png';
import jceLogo from '../assets/jce.png';  // Assuming that's your JSS logo



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
            👨‍💻 Passionate Front-End & Full Stack Developer | 2+ years coding dynamic, user-friendly apps.<br/>
🎓 Currently pursuing my M.S. in Computer Science @ USC | 🚀 Dreaming big & building bigger!

            </p>

            <div className={styles.subSection}>
                <h3>Education</h3>
                <div className={styles.eduList}>
                    <div className={styles.eduItem}>
                        <img src= {uscLogo} alt="USC" />
                        <div className={styles.eduDetails}>
                            <h4>University of Southern California - Masters in Computer Science</h4>
                            <p>Coursework: Analysis of Algorithms, Database Systems, Web Technologies, Information Retrieval & Web Search Engines, ML for Data Science, Applied
                            Cryptography</p>
                        </div>
                    </div>
                    <div className={styles.eduItem}>
                        <img src={jceLogo} alt="Undergrad" />
                        <div className={styles.eduDetails}>
                            <h4>JSS Science and Technology University - B.E. Information Science and Engineering</h4>
                            <p>Coursework: Data Structures, Data Mining, Operating Systems, Software Engineering, Distributed Computing, Computer Networks, Computer Organization &
                            Architecture</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.subSection}>
                <h3>Certifications & Achievements</h3>
                <ul className={styles.certList}>
                    <li>AWS Certified Cloud Practitioner</li>
                    <li>OCI AI Foundations</li>
                    <li>ML & AI by NASSCOM</li>
                    <li>Certified Scrum Master</li>
                </ul>
            </div>
        </motion.section>
    );
};

export default About;
