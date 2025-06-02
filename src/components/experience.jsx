

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

import React, { useState, useRef } from 'react';
import styles from '../styles/experience.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Parallax } from 'react-scroll-parallax';

import 'swiper/css';
import 'swiper/css/pagination';

import exinousLogo from '../assets/exinous.png';
import boschLogo from '../assets/bosch.png';
import codespeedyLogo from '../assets/codespeedy.png';
import jubilantLogo from '../assets/jubilant.png';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Jubilant HollisterStier LLC',
    duration: 'May 2025 – Aug 2025',
    image: jubilantLogo,
    achievements: [
      'Leading development of a MERN-based workforce analytics platform with real-time dashboards for business insights.',
      'Designed RESTful APIs and MongoDB schemas to enable flexible querying across roles, tasks, and locations.',
      'Optimizing large-scale SQL queries and indexes to accelerate data retrieval in high-traffic environments.',
      'Supporting backup automation and collaborating on schema redesign to enhance system resilience.'
    ],
    skills: ['React.js', 'JavaScript', 'MongoDB', 'AWS', 'Agile Development', 'SQL', 'DBMS', 'RESTful APIs']
  },
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
  const swiperRef = useRef(null);

  return (
    <section className={styles.experienceSection} id="experience">
      <Parallax speed={3}>
        <h2 className={styles.experienceTitle}>Work Experience</h2>
      </Parallax>

      <div className={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className={styles.experienceSwiper}
        >
          {experiences.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className={styles.cardWrapper}>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <img src={exp.image} alt={exp.company} className={styles.experienceLogo} />
                    <div className={styles.titleBlock}>
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                      <p className={styles.duration}>{exp.duration}</p>
                    </div>
                  </div>
                  <div className={styles.experienceContent}>
                    <ul className={styles.achievementList}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    <div className={styles.skills}>
                      {exp.skills.map((skill, i) => (
                        <span key={i} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.swipeHint}>
  <span className={styles.swipeArrow}>Swipe &lt;&lt;</span>
  <span className={styles.swipeArrow}>Swipe &gt;&gt;</span>
</div>

      </div>
    </section>
  );
};

export default Experience;
