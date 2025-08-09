

// import React from 'react';
// import styles from '../styles/experience.module.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import { Parallax } from 'react-scroll-parallax';

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
//             <Parallax speed={3}>
//                 <h2 className={styles.experienceTitle}>Work Experience</h2>
//             </Parallax>

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
//                             <img
//                                 src={exp.image}
//                                 alt={exp.company}
//                                 className={styles.experienceLogo}
//                             />
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
//                                     <span key={i} className={styles.skillTag}>
//                                         {skill}
//                                     </span>
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

// import React, { useState, useRef } from 'react';
// import styles from '../styles/experience.module.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import { Parallax } from 'react-scroll-parallax';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import exinousLogo from '../assets/exinous.png';
// import boschLogo from '../assets/bosch.png';
// import codespeedyLogo from '../assets/codespeedy.png';

// const experiences = [
//   {
//     role: 'Software Development Engineer',
//     company: 'Exinous Technologies India Pvt Ltd',
//     duration: 'Sep 2022 – Nov 2023',
//     image: exinousLogo,
//     achievements: [
//       'Built and optimized Navipoint Health website using React.js focusing on performance and accessibility.',
//       'Developed dynamic, reusable front-end components using Vue.js and TypeScript for a client ERP system.',
//       'Validated RESTful APIs using Postman and contributed to daily Scrum practices with CI integration.',
//       'Automated functional tests with Cypress, reducing QA cycles by 75%.'
//     ],
//     skills: ['React.js', 'Vue.js', 'TypeScript', 'Postman', 'Cypress', 'Scrum', 'Git', 'CI/CD']
//   },
//   {
//     role: 'Associate Software Engineer',
//     company: 'Bosch Global Software Technologies',
//     duration: 'June 2021 - Sep 2022',
//     image: boschLogo,
//     achievements: [
//       'Developed and automated test scripts using Python and Shell for Linux-based embedded systems.',
//       'Identified and documented critical defects using Pytest, GitLab, SVN, and Codebeamer.',
//       'Served as a Bosch Campus Ambassador promoting company initiatives and university engagement.'
//     ],
//     skills: ['Python', 'Shell', 'Linux', 'Pytest', 'GitLab', 'SVN', 'Embedded Systems']
//   },
//   {
//     role: 'Software Engineer Intern',
//     company: 'Robert Bosch Engineering and Business Solutions',
//     duration: 'March 2021 - June 2021',
//     image: boschLogo,
//     achievements: [
//       'Designed and executed automation test scripts for the Bosch MeasureOn Android app using Java.',
//       'Used Appium, UI Automator, and Maven within Android Studio to improve test coverage.'
//     ],
//     skills: ['Java', 'Appium', 'UI Automator', 'Maven', 'Android Studio']
//   },
//   {
//     role: 'Python Programming Intern',
//     company: 'Codespeedy Technology Pvt Ltd',
//     duration: 'August 2019 - Jan 2020',
//     image: codespeedyLogo,
//     achievements: [
//       'Created Python programming tutorials and coding solutions for learners.',
//       'Authored technical articles covering algorithms, data structures, and Python applications.',
//       'Improved the platform’s SEO and user engagement with quality content creation.'
//     ],
//     skills: ['Python', 'Technical Writing', 'Content Creation', 'Algorithms', 'SEO']
//   }
// ];

// const Experience = () => {
//   const [showPrev, setShowPrev] = useState(false);
//   const [showNext, setShowNext] = useState(true);

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section className={styles.experienceSection} id="experience">
//       <Parallax speed={3}>
//         <h2 className={styles.experienceTitle}>Work Experience</h2>
//       </Parallax>

//       <div className={styles.swiperContainer}>
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           slidesPerView={1}
//           className={styles.experienceSwiper}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//           onSlideChange={(swiper) => {
//             setShowPrev(!swiper.isBeginning);
//             setShowNext(!swiper.isEnd);
//           }}
//           onSwiper={(swiper) => {
//             setShowPrev(!swiper.isBeginning);
//             setShowNext(!swiper.isEnd);
//           }}
//         >
//           {experiences.map((exp, index) => (
//             <SwiperSlide key={index}>
//               <div className={styles.cardWrapper}>
//                 <div className={styles.experienceCard}>
//                   <div className={styles.cardHeader}>
//                     <img src={exp.image} alt={exp.company} className={styles.experienceLogo} />
//                     <div className={styles.titleBlock}>
//                       <h3>{exp.role}</h3>
//                       <h4>{exp.company}</h4>
//                       <p className={styles.duration}>{exp.duration}</p>
//                     </div>
//                   </div>
//                   <div className={styles.experienceContent}>
//                     <ul>
//                       {exp.achievements.map((achievement, i) => (
//                         <li key={i}>{achievement}</li>
//                       ))}
//                     </ul>
//                     <div className={styles.skills}>
//                       {exp.skills.map((skill, i) => (
//                         <span key={i} className={styles.skillTag}>{skill}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {showPrev && <div ref={prevRef} className={`swiper-button-prev ${styles.arrow}`}></div>}
//         {showNext && <div ref={nextRef} className={`swiper-button-next ${styles.arrow}`}></div>}
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from 'react';
import styles from '../styles/experience.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import exinousLogo from '../assets/exinous.png';
import boschLogo from '../assets/bosch.png';
import codespeedyLogo from '../assets/codespeedy.png';
import jubilantLogo from '../assets/jubilant.png';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Jubilant HollisterStier LLC',
    duration: 'May 2025 – Aug 2025',
    image: jubilantLogo,
    achievements: [
      'Architected and deployed TimeStudy, a cloud-native analytics platform for real-time task management',
      'Integrated JWT-based role access for secure, real-time task insights and analytics',
      'Designed PostgreSQL schemas and built RESTful APIs with authentication and authorization',
      'Developed unit-tested backend services and interactive dashboards',
      'Enabled scalability and future ML integration with modular API and data design'
    ],
    skills: ['Next.js', 'PostgreSQL', 'AWS', 'Node.js', 'RESTful APIs & JWT', 'CI/CD']
  },
  {
    role: 'Software Development Engineer',
    company: 'Exinous Technologies',
    duration: 'Sep 2022 – Nov 2023',
    image: exinousLogo,
    achievements: [
      'Revamped Navipoint Health website with React.js and SEO optimizations, boosting performance and accessibility.',
      'Developed reusable Vue.js + TypeScript ERP components reducing maintenance overhead by 30%',
      'Accelerated delivery of multimodule features by 25% through component standardization and collaborative code reviews',
      'Validated RESTful APIs using Postman, enhancing API reliability and performance.',
    ],
    skills: ['React.js', 'Postman', 'TypeScript', 'Github','Agile Methodolgies']
  },
  {
    role: 'Associate Software Engineer',
    company: 'Bosch Global Software Tech',
    duration: 'June 2021 – Sep 2022',
    image: boschLogo,
    achievements: [
      'Built Python & Shell diagnostic tools for embedded Linux (Bosch D-tect 200), improving system performance.',
      'Enhanced C++ firmware for real-time sensor data rendering, delivering smoother UI responsiveness',
      'Designed health-check utilities for field diagnostics and faster fault recovery in embedded units',
      'Contributed to production-ready firmware upgrades across industrial product lines'
    ],
    skills: ['Python', 'Shell Scripting', 'Embedded Linux', 'C++', 'Embedded Systems', 'GitLab']
  },
  {
    role: 'Software Engineering Intern',
    company: 'Robert Bosch Engineering',
    duration: 'March 2021 – June 2021',
    image: boschLogo,
    achievements: [
      'Developed and automated test workflows for the Bosch MeasrOn Android app using Java, Appium, and UIAutomator, ensuring consistent cross-platform reliability and reducing manual QA effort',
      'Designed scalable mobile test cases in Android Studio, gaining hands-on expertise in mobile app development lifecycles, debugging, and test-driven development (TDD)'
    ],
    skills: ['Java', 'Appium', 'Android Studio', 'Automation Testing']
  },
  {
    role: 'Python Intern',
    company: 'Codespeedy Technology',
    duration: 'Aug 2019 – Jan 2020',
    image: codespeedyLogo,
    achievements: [
      'Developed beginner-friendly Python scripts and annotated examples to teach fundamental programming concepts clearly and effectively',
      'Authored educational content and simplified complex logic into accessible formats, increasing learner engagement and comprehension',
      'Strengthened communication skills by translating complex engineering topics into digestible learning modules for new programmers'
    ],
    skills: ['Python', 'Technical Writing', 'DSA', 'Problem Solving', 'Content Creation']
  }
];

const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.title}>WORK EXPERIENCE</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className={styles.swiper}
      >
        {experiences.map((exp, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <img src={exp.image} alt={exp.company} className={styles.logo} />
              <h3 className={styles.company}>{exp.company}</h3>
              <p className={styles.duration}>{exp.duration}</p>
              <h4 className={styles.role}>{exp.role}</h4>
              <ul className={styles.achievementList}>
                {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
              <div className={styles.skillTags}>
                {exp.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={`swiper-button-prev ${styles.arrow}`}><FaArrowLeft /></div>
        <div className={`swiper-button-next ${styles.arrow}`}><FaArrowRight /></div>
      </Swiper>
    </section>
  );
};

export default Experience;
