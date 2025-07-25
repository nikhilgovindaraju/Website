// import { FaCode, FaCloud, FaTools, FaDatabase, FaRobot, FaBrain, FaChartBar, FaUsers } from 'react-icons/fa';

// function Skills() {
//     const categories = [
//         {
//             icon: <FaCode size={40} />,
//             title: 'Languages',
//             skills: 'Python, JavaScript (ES6+), C, Swift, Dart, HTML5, CSS3'
//         },
//         {
//             icon: <FaTools size={40} />,
//             title: 'Frontend',
//             skills: 'React.js, Vue.js, Angular, Flutter, SwiftUI, UIKit'
//         },
//         {
//             icon: <FaCloud size={40} />,
//             title: 'Backend',
//             skills: 'Node.js, Express.js, Flask, Firebase, RESTful APIs, GraphQL'
//         },
//         {
//             icon: <FaCloud size={40} />,
//             title: 'Cloud & DevOps',
//             skills: 'AWS (EC2, S3), Google Cloud Platform, Oracle Cloud, Docker, Git, CI/CD, GitHub Actions'
//         },
//         {
//             icon: <FaDatabase size={40} />,
//             title: 'Databases',
//             skills: 'MongoDB, MySQL, PostgreSQL, Cloud Firestore'
//         },
//         {
//             icon: <FaBrain size={40} />,
//             title: 'Machine Learning',
//             skills: 'Scikit-learn, Pandas, NumPy, Matplotlib, Classification & Regression, Model Evaluation, Feature Engineering'
//         },
//         {
//             icon: <FaTools size={40} />,
//             title: 'Test Automation',
//             skills: 'Pytest, Cypress, Selenium, Mocha, Chai, E2E Testing, API Testing'
//         },
//         {
//             icon: <FaRobot size={40} />,
//             title: 'Data Science',
//             skills: 'Data Wrangling, AUC, F1-score, Cross-Validation, Tableau, Power BI, Matplotlib, Plotly, Seaborn'
//         },
//     ];

//     return (
//         <div id="skills">
//             <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Skills</h2>
//             <div style={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 justifyContent: 'center',
//                 gap: '2rem'
//             }}>
//                 {categories.map((cat, idx) => (
//                     <div key={idx} className="skill-card">
//                         <div>{cat.icon}</div>
//                         <h3>{cat.title}</h3>
//                         <p>{cat.skills}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Skills;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from '../styles/skills.module.css';

const categories = [
  {
    title: 'LANGUAGE & FRAMEWORKS',
    skills: [
      { name: 'Python', iconClass: 'devicon-python-plain' },
      { name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
      { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
      { name: 'C++', iconClass: 'devicon-cplusplus-plain' },
      { name: 'C', iconClass: 'devicon-c-plain' },
      { name: 'Java', iconClass: 'devicon-java-plain' },
      { name: 'Swift', iconClass: 'devicon-swift-plain' },
      { name: 'Dart', iconClass: 'devicon-dart-plain' },
    ],
  },
  {
    title: 'FRONTEND DEVELOPMENT',
    skills: [
      { name: 'HTML5', iconClass: 'devicon-html5-plain' },
      { name: 'CSS3', iconClass: 'devicon-css3-plain' },
      { name: 'React.js', iconClass: 'devicon-react-original' },
      { name: 'Next.js', iconClass: 'devicon-nextjs-original' },
      { name: 'Angular', iconClass: 'devicon-angularjs-plain' },
      { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain' },
      { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain' },
      { name: 'Flutter', iconClass: 'devicon-flutter-plain' },
      { name: 'SwiftUI', iconClass: 'devicon-swift-plain' },
      { name: 'Figma', iconClass: 'devicon-figma-plain' },
    ],
  },
  {
    title: 'BACKEND DEVELOPMENT',
    skills: [
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain' },
      { name: 'Express.js', iconClass: 'devicon-express-original' },
      { name: 'FastAPI', iconClass: 'devicon-fastapi-original' },
      { name: 'Flask', iconClass: 'devicon-flask-original' },
      { name: 'Spring Boot', iconClass: 'devicon-spring-plain' },
      { name: 'REST APIs', iconClass: 'devicon-rest-plain' },
      { name: 'Microservices', iconClass: 'devicon-microservice-plain' },
      { name: 'SQL', iconClass: 'devicon-sqlite-plain' },
    ],
  },
  {
    title: 'CLOUD & DEVOPS',
    skills: [
      { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain' },
      { name: 'GCP', iconClass: 'devicon-googlecloud-plain' },
      { name: 'Docker', iconClass: 'devicon-docker-plain' },
      { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain' },
      { name: 'Git', iconClass: 'devicon-git-plain' },
      { name: 'GitHub Actions', iconClass: 'devicon-githubactions-original' },
      { name: 'Kafka', iconClass: 'devicon-kafka-plain' },
      { name: 'CI/CD', iconClass: 'devicon-github-plain' },
    ],
  },
  {
    title: 'DATABASES & TOOLS',
    skills: [
      { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
      { name: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
      { name: 'MySQL', iconClass: 'devicon-mysql-plain' },
      { name: 'DynamoDB', iconClass: 'devicon-amazonwebservices-plain' },
      { name: 'Redis', iconClass: 'devicon-redis-plain' },
      { name: 'Postman', iconClass: 'devicon-postman-plain' },
      { name: 'Unit Testing', iconClass: 'devicon-jest-plain' },
      { name: 'Pytest', iconClass: 'devicon-python-plain' },
      { name: 'Jira', iconClass: 'devicon-jira-plain' },
    ],
  },
  {
    title: 'MACHINE LEARNING & AI',
    skills: [
      { name: 'TensorFlow', iconClass: 'devicon-tensorflow-original' },
      { name: 'PyTorch', iconClass: 'devicon-pytorch-original' },
      { name: 'Scikit-learn', iconClass: 'devicon-scikitlearn-plain' },
      { name: 'Keras', iconClass: 'devicon-keras-plain' },
      { name: 'OpenCV', iconClass: 'devicon-opencv-original' },
      { name: 'Pandas', iconClass: 'devicon-pandas-plain' },
      { name: 'NumPy', iconClass: 'devicon-numpy-plain' },
      { name: 'Matplotlib', iconClass: 'devicon-matplotlib-plain' },
      { name: 'Seaborn', iconClass: 'devicon-seaborn-plain' },
    ],
  },
];

export default function SkillsSection() {
  const [expanded, setExpanded] = useState({});

  // Auto-expand everything on small screens
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const allOpen = {};
      categories.forEach((_, idx) => (allOpen[idx] = true));
      setExpanded(allOpen);
    }
  }, []);

  const toggleCard = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>SKILLS</h2>

      <div className={styles.skillsGrid}>
        {categories.map((category, index) => {
          const isOpen = !!expanded[index];
          return (
            <div key={index} className={styles.skillCard}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className={styles.skillTags}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.skills.map((skill, i) => (
                      <div key={i} className={styles.skillTag}>
                        {skill.iconClass && (
                          <i className={`${skill.iconClass} colored ${styles.devIcon}`}></i>
                        )}
                        {skill.name}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer toggle is hidden on mobile via CSS */}
              <button
                className={styles.cardFooter}
                onClick={() => toggleCard(index)}
                aria-label={`Toggle ${category.title}`}
              >
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
