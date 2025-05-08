// import React, { useState } from 'react';
// import styles from '../styles/experience.module.css';
// import { motion, AnimatePresence } from 'framer-motion';

// import exinousLogo from '../assets/exinous.png';
// import boschLogo from '../assets/bosch.png';
// import codespeedyLogo from '../assets/codespeedy.png';

// const experiences = [
//     {
//         role: 'Software Development Engineer',
//         company: 'Exinous Technologies India Pvt Ltd',
//         duration: 'Sep 2022 – Nov 2023',
//         image: exinousLogo,
//         achievements: [
//             'Built and optimized Navipoint Health website using React.js focusing on performance and accessibility.',
//             'Developed dynamic, reusable front-end components using Vue.js and TypeScript for a client ERP system.',
//             'Validated RESTful APIs using Postman and contributed to daily Scrum practices with CI integration.',
//             'Automated functional tests with Cypress, reducing QA cycles by 75%.'
//         ],
//         skills: [
//             'React.js',
//             'Vue.js',
//             'TypeScript',
//             'Postman',
//             'Cypress',
//             'Scrum',
//             'Git',
//             'CI/CD'
//         ]
//     },
//     {
//         role: 'Associate Software Engineer',
//         company: 'Bosch Global Software Technologies',
//         duration: 'June 2021-Sep 2022',
//         image: boschLogo,
//         achievements: [
//             'Developed and automated test scripts using Python and Shell for Linux-based embedded systems, including Bosch’s D-tect 200 wall scanner, leading to a 20% reduction in code vulnerabilities by identifying and documenting critical defects through tools like Pytest, GitLab, SVN, and Codebeamer.',
//             'Served as a Bosch Campus Ambassador, promoting company initiatives and strengthening university engagement through technical outreach and brand representation.'
//         ],
//         skills: [
//             "Python",
//             "Shell",
//             "Linux",
//             "Pytest",
//             "GitLab",
//             "SVN",
//             "Embedded Systems",
//             "Automation Testing"
//         ]
//     },
//     {
//         role: 'Software Engineer Intern',
//         company: 'Robert Bosch Engineering and Business Solutions',
//         duration: 'March 2021-June 2021',
//         image: boschLogo,
//         achievements: [
//             'Designed and executed automation test scripts for the Bosch MeasureOn Android app using Java.',
//             'Leveraged Appium, UI Automator, and Maven within Android Studio, enhancing testing efficiency and coverage.'
//         ],
//         skills: [
//             "Java",
//             "Appium",
//             "UI Automator",
//             "Maven",
//             "Android Studio",
//             "Mobile Automation",
//             "Test Automation"
//         ]
//     },
//     {
//         role: 'Python Programming Intern',
//         company: 'Codespeedy Technology Pvt Ltd',
//         duration: 'August 2019-Jan 2020',
//         image: codespeedyLogo,
//         achievements: [
//             'Created Python programming tutorials and coding solutions, contributing educational content to help learners and developers.',
//             'Authored and published technical articles covering algorithms, data structures, and real-world Python applications.',
//             'Enhanced the platform’s technical SEO and user engagement through quality content creation.'
//         ],
//         skills: [
//             "Python",
//             "Technical Writing",
//             "Content Creation",
//             "Algorithms",
//             "Data Structures",
//             "SEO"
//         ]
        
//     }
// ];

// const Experience = () => {
//     const [index, setIndex] = useState(0);

//     const exp = experiences[index];

//     return (
//         <div className={styles.experienceSection} id="experience">
//             <h2>Work Experience</h2>

//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={index}
//                     className={styles.experienceCard}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -50 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <img src={exp.image} alt={exp.company} className={styles.experienceLogo} />
//                     <h3>{exp.role}</h3>
//                     <h4>{exp.company}</h4>
//                     <div className={styles.period}>{exp.duration}</div>
//                     <ul>
//                         {exp.achievements.map((achieve, idx) => (
//                             <li key={idx}>{achieve}</li>
//                         ))}
//                     </ul>
//                     <div className={styles.techTags}>
//                         {exp.skills.map((skill, idx) => (
//                             <span key={idx}>{skill}</span>
//                         ))}
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Dot indicators */}
//             <div className={styles.dotsContainer}>
//                 {experiences.map((_, i) => (
//                     <span
//                         key={i}
//                         className={`${styles.dot} ${index === i ? styles.activeDot : ''}`}
//                         onClick={() => setIndex(i)}
//                     ></span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Experience;

// import React from 'react';
// import styles from '../styles/experience.module.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import exinousLogo from '../assets/exinous.png';
// import boschLogo from '../assets/bosch.png';
// import codespeedyLogo from '../assets/codespeedy.png';

// const experiences = [
//     {
//         role: 'Software Development Engineer',
//         company: 'Exinous Technologies India Pvt Ltd',
//         duration: 'Sep 2022 – Nov 2023',
//         image: exinousLogo,
//         achievements: [
//             'Built and optimized Navipoint Health website using React.js focusing on performance and accessibility.',
//             'Developed dynamic, reusable front-end components using Vue.js and TypeScript for a client ERP system.',
//             'Validated RESTful APIs using Postman and contributed to daily Scrum practices with CI integration.',
//             'Automated functional tests with Cypress, reducing QA cycles by 75%.'
//         ],
//         skills: ['React.js', 'Vue.js', 'TypeScript', 'Postman', 'Cypress', 'Scrum', 'Git', 'CI/CD']
//     },
//     {
//         role: 'Associate Software Engineer',
//         company: 'Bosch Global Software Technologies',
//         duration: 'June 2021 - Sep 2022',
//         image: boschLogo,
//         achievements: [
//             'Developed and automated test scripts using Python and Shell for Linux-based embedded systems.',
//             'Identified and documented critical defects using Pytest, GitLab, SVN, and Codebeamer.',
//             'Served as a Bosch Campus Ambassador promoting company initiatives and university engagement.'
//         ],
//         skills: ['Python', 'Shell', 'Linux', 'Pytest', 'GitLab', 'SVN', 'Embedded Systems']
//     },
//     {
//         role: 'Software Engineer Intern',
//         company: 'Robert Bosch Engineering and Business Solutions',
//         duration: 'March 2021 - June 2021',
//         image: boschLogo,
//         achievements: [
//             'Designed and executed automation test scripts for the Bosch MeasureOn Android app using Java.',
//             'Used Appium, UI Automator, and Maven within Android Studio to improve test coverage.'
//         ],
//         skills: ['Java', 'Appium', 'UI Automator', 'Maven', 'Android Studio']
//     },
//     {
//         role: 'Python Programming Intern',
//         company: 'Codespeedy Technology Pvt Ltd',
//         duration: 'August 2019 - Jan 2020',
//         image: codespeedyLogo,
//         achievements: [
//             'Created Python programming tutorials and coding solutions for learners.',
//             'Authored technical articles covering algorithms, data structures, and Python applications.',
//             'Improved the platform’s SEO and user engagement with quality content creation.'
//         ],
//         skills: ['Python', 'Technical Writing', 'Content Creation', 'Algorithms', 'SEO']
//     }
// ];

// const Experience = () => {
//     return (
//         <section className={styles.experienceSection} id="experience">
//             <h2>Work Experience</h2>

//             <Swiper
//                 modules={[Navigation, Pagination]}
//                 navigation
//                 pagination={{ clickable: true }}
//                 spaceBetween={40}
//                 slidesPerView={1}
//                 className={styles.experienceSwiper}
//             >
//                 {experiences.map((exp, index) => (
//                     <SwiperSlide key={index}>
//                         <div className={styles.experienceCard}>
//                             <img src={exp.image} alt={exp.company} className={styles.experienceLogo} />
//                             <h3>{exp.role}</h3>
//                             <h4>{exp.company}</h4>
//                             <div className={styles.duration}>{exp.duration}</div>
//                             <ul>
//                                 {exp.achievements.map((achievement, i) => (
//                                     <li key={i}>{achievement}</li>
//                                 ))}
//                             </ul>
//                             <div className={styles.skills}>
//                                 {exp.skills.map((skill, i) => (
//                                     <span key={i} className={styles.skillTag}>{skill}</span>
//                                 ))}
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     );
// };

// export default Experience;

import React from 'react';
import styles from '../styles/experience.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Parallax } from 'react-scroll-parallax';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import exinousLogo from '../assets/exinous.png';
import boschLogo from '../assets/bosch.png';
import codespeedyLogo from '../assets/codespeedy.png';

const experiences = [
    {
        role: 'Software Development Engineer',
        company: 'Exinous Technologies India Pvt Ltd',
        duration: 'Sep 2022 – Nov 2023',
        image: exinousLogo,
        achievements: [
            'Built and optimized Navipoint Health website using React.js focusing on performance and accessibility.',
            'Developed dynamic, reusable front-end components using Vue.js and TypeScript for a client ERP system.',
            'Validated RESTful APIs using Postman and contributed to daily Scrum practices with CI integration.',
            'Automated functional tests with Cypress, reducing QA cycles by 75%.'
        ],
        skills: ['React.js', 'Vue.js', 'TypeScript', 'Postman', 'Cypress', 'Scrum', 'Git', 'CI/CD']
    },
    {
        role: 'Associate Software Engineer',
        company: 'Bosch Global Software Technologies',
        duration: 'June 2021 - Sep 2022',
        image: boschLogo,
        achievements: [
            'Developed and automated test scripts using Python and Shell for Linux-based embedded systems.',
            'Identified and documented critical defects using Pytest, GitLab, SVN, and Codebeamer.',
            'Served as a Bosch Campus Ambassador promoting company initiatives and university engagement.'
        ],
        skills: ['Python', 'Shell', 'Linux', 'Pytest', 'GitLab', 'SVN', 'Embedded Systems']
    },
    {
        role: 'Software Engineer Intern',
        company: 'Robert Bosch Engineering and Business Solutions',
        duration: 'March 2021 - June 2021',
        image: boschLogo,
        achievements: [
            'Designed and executed automation test scripts for the Bosch MeasureOn Android app using Java.',
            'Used Appium, UI Automator, and Maven within Android Studio to improve test coverage.'
        ],
        skills: ['Java', 'Appium', 'UI Automator', 'Maven', 'Android Studio']
    },
    {
        role: 'Python Programming Intern',
        company: 'Codespeedy Technology Pvt Ltd',
        duration: 'August 2019 - Jan 2020',
        image: codespeedyLogo,
        achievements: [
            'Created Python programming tutorials and coding solutions for learners.',
            'Authored technical articles covering algorithms, data structures, and Python applications.',
            'Improved the platform’s SEO and user engagement with quality content creation.'
        ],
        skills: ['Python', 'Technical Writing', 'Content Creation', 'Algorithms', 'SEO']
    }
];

const Experience = () => {
    return (
        <section className={styles.experienceSection} id="experience">
            <Parallax speed={3}>
                <h2 className={styles.experienceTitle}>Work Experience</h2>
            </Parallax>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={40}
                slidesPerView={1}
                className={styles.experienceSwiper}
            >
                {experiences.map((exp, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.experienceCard}>
                            <img
                                src={exp.image}
                                alt={exp.company}
                                className={styles.experienceLogo}
                            />
                            <h3>{exp.role}</h3>
                            <h4>{exp.company}</h4>
                            <div className={styles.duration}>{exp.duration}</div>
                            <ul>
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                            <div className={styles.skills}>
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className={styles.skillTag}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Experience;
