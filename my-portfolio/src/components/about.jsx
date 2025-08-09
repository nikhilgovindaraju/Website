// import React from "react";
// import styles from "../styles/about.module.css";
// import { motion } from "framer-motion";

// import uscLogo from '../assets/usc.png';
// import jceLogo from '../assets/jce.png';

// const certifications = [
//   { title: "AWS Certified Cloud Practitioner", link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/" },
//   { title: "OCI AI Foundations", link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/" },
//   { title: "ML & AI by NASSCOM", link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/" },
//   { title: "Certified Scrum Master", link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/" }
// ];

// const About = () => {
//   return (
//     <motion.section
//       className={styles.aboutSection}
//       id="about"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <h2>About Me</h2>
//       <p className={styles.intro}>
//         👨‍💻 Passionate Full Stack Developer | 2+ years coding dynamic, user-friendly apps.<br />
//         🎓 Currently pursuing my M.S. in Computer Science @ USC | 🚀 Dreaming big & building bigger!
//       </p>

//       <div className={styles.subSection}>
//         <h3>Education</h3>
//         <div className={styles.eduList}>
//           <div className={styles.eduItem}>
//             <img src={uscLogo} alt="USC" />
//             <div className={styles.eduDetails}>
//               <h4>University of Southern California – M.S. in Computer Science</h4>
//               <p>
//                 Coursework: Analysis of Algorithms, Database Systems, Web Technologies, Information Retrieval & Web Search Engines, ML for Data Science, Applied Cryptography
//               </p>
//               <p><strong>GPA:</strong> 3.78 / 4.0</p>
//             </div>
//           </div>

//           <div className={styles.eduItem}>
//             <img src={jceLogo} alt="Undergrad" />
//             <div className={styles.eduDetails}>
//               <h4>JSS Science and Technology University – B.E. in Information Science and Engineering</h4>
//               <p>
//                 Coursework: Data Structures, Data Mining, Operating Systems, Software Engineering, Distributed Computing, Computer Networks, Computer Organization & Architecture
//               </p>
//               <p><strong>GPA:</strong> 9.01 / 10</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.subSection}>
//         <h3>Certifications & Achievements</h3>
//         <ul className={styles.certList}>
//           {certifications.map((cert, i) => (
//             <li key={i}>
//               <a href={cert.link} target="_blank" rel="noopener noreferrer">
//                 {cert.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.section>
//   );
// };

// export default About;


import React from 'react';
import styles from '../styles/about.module.css';
import uscLogo from '../assets/usc.png';
import jssLogo from '../assets/jce.png';

const education = [
  {
    logo: uscLogo,
    university: 'University of Southern California, Viterbi School of Engineering',
    degree: 'M.S. in Computer Science',
    gpa: '3.78 / 4.0',
    coursework: [
      'Analysis of Algorithms', 'Web Technologies', 'Database Systems',
      'Information Retrieval', 'Machine Learning', 'Advance Game Developement','Applied Cryptography'
    ]
  },
  {
    logo: jssLogo,
    university: 'JSS Science & Technology University',
    degree: 'B.E. in Information Science',
    gpa: '9.01 / 10',
    coursework: [
      'Data Structures', 'Operating Systems', 'Computer Networks',
      'Distributed Systems', 'Software Engineering','Data Mining','Computer Organization & Architecture'

    ]
  }
];

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2>WHO I AM</h2>
      <p className={styles.summary}>
  I’m a <span className={styles.highlight}>Full Stack Developer</span> with 2+ years of experience engineering scalable, cloud-native systems using modern web technologies.
  Currently pursuing my <span className={styles.highlight}>M.S. in Computer Science @ USC</span>, specializing in system design, API development, and performance optimization.
</p>

      <h3 className={styles.sectionTitle}>EDUCATION 🎓</h3>

      <div className={styles.grid}>
        {education.map((edu, index) => (
          <div key={index} className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              {/* FRONT */}
              <div className={styles.flipCardFront}>
                <img src={edu.logo} alt={edu.university} className={styles.eduImage} />
                <h4 className={styles.university}>{edu.university}</h4>
                <p className={styles.degree}>{edu.degree}</p>
                <p className={styles.gpa}>GPA: {edu.gpa}</p>
              </div>

              {/* BACK */}
              <div className={styles.flipCardBack}>
                <h4 className={styles.courseworkHeading}>Relevant Coursework</h4>
                <ul className={styles.courseList}>
                  {edu.coursework.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
