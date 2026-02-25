import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/skills.module.css';
import { useScrollReveal, fadeUp, staggerContainer, staggerItem } from '../hooks/useScrollReveal';

const categories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Python',     icon: 'devicon-python-plain colored'     },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Java',       icon: 'devicon-java-plain colored'       },
      { name: 'C++',        icon: 'devicon-cplusplus-plain colored'  },
      { name: 'Swift',      icon: 'devicon-swift-plain colored'      },
      { name: 'Dart',       icon: 'devicon-dart-plain colored'       },
      { name: 'C',          icon: 'devicon-c-plain colored'          },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js',  icon: 'devicon-react-original colored'    },
      { name: 'Next.js',   icon: 'devicon-nextjs-original'           },
      { name: 'Angular',   icon: 'devicon-angularjs-plain colored'   },
      { name: 'Flutter',   icon: 'devicon-flutter-plain colored'     },
      { name: 'Tailwind',  icon: 'devicon-tailwindcss-plain colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored'   },
      { name: 'HTML5',     icon: 'devicon-html5-plain colored'       },
      { name: 'CSS3',      icon: 'devicon-css3-plain colored'        },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js',    icon: 'devicon-nodejs-plain colored'  },
      { name: 'Express',    icon: 'devicon-express-original'      },
      { name: 'FastAPI',    icon: 'devicon-fastapi-plain colored'  },
      { name: 'Flask',      icon: 'devicon-flask-original'        },
      { name: 'Spring Boot',icon: 'devicon-spring-plain colored'  },
      { name: 'GraphQL',    icon: 'devicon-graphql-plain colored'  },
      { name: 'REST APIs',  icon: 'devicon-nodejs-plain'          },
      { name: 'SQL',        icon: 'devicon-sqlite-plain colored'  },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS',            icon: 'devicon-amazonwebservices-plain colored' },
      { name: 'GCP',            icon: 'devicon-googlecloud-plain colored'       },
      { name: 'Docker',         icon: 'devicon-docker-plain colored'            },
      { name: 'Kubernetes',     icon: 'devicon-kubernetes-plain colored'        },
      { name: 'Git',            icon: 'devicon-git-plain colored'               },
      { name: 'GitHub Actions', icon: 'devicon-github-original'                 },
      { name: 'Kafka',          icon: 'devicon-apachekafka-original'            },
      { name: 'Jenkins',        icon: 'devicon-jenkins-plain colored'           },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MongoDB',    icon: 'devicon-mongodb-plain colored'    },
      { name: 'MySQL',      icon: 'devicon-mysql-plain colored'      },
      { name: 'Redis',      icon: 'devicon-redis-plain colored'      },
      { name: 'DynamoDB',   icon: 'devicon-dynamodb-plain colored'   },
      { name: 'Firebase',   icon: 'devicon-firebase-plain colored'   },
      { name: 'Supabase',   icon: 'devicon-supabase-plain colored'   },
      { name: 'Postman',    icon: 'devicon-postman-plain colored'    },
    ],
  },
  {
    id: 'ml',
    label: 'ML & AI',
    skills: [
      { name: 'TensorFlow',   icon: 'devicon-tensorflow-original colored' },
      { name: 'PyTorch',      icon: 'devicon-pytorch-original colored'    },
      { name: 'Keras',        icon: 'devicon-keras-plain colored'         },
      { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain colored'   },
      { name: 'OpenCV',       icon: 'devicon-opencv-plain colored'        },
      { name: 'Pandas',       icon: 'devicon-pandas-plain colored'        },
      { name: 'NumPy',        icon: 'devicon-numpy-plain colored'         },
      { name: 'Matplotlib',   icon: 'devicon-matplotlib-plain colored'    },
    ],
  },
];

function CategoryTab({ cat, isActive, onClick }) {
  return (
    <button
      className={isActive ? `${styles.catTab} ${styles.catActive}` : styles.catTab}
      onClick={onClick}
    >
      {cat.label}
    </button>
  );
}

function SkillItem({ skill }) {
  return (
    <motion.div className={styles.skillItem} variants={staggerItem}>
      <div className={styles.skillIconWrap}>
        <i className={`${skill.icon} ${styles.skillIcon}`}></i>
      </div>
      <span className={styles.skillName}>{skill.name}</span>
    </motion.div>
  );
}

const Skills = () => {
  const [activeId, setActiveId] = useState('languages');
  const { ref, controls } = useScrollReveal();
  const active = categories.find(c => c.id === activeId);

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>

        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className={styles.header}
        >
          <span className={styles.sectionTag}>Toolkit</span>
          <h2 className={styles.heading}>Skills</h2>
          <p className={styles.sub}>Technologies I use to build production-grade software</p>
        </motion.div>

        {/* Category tabs */}
        <div className={styles.catTabs}>
          {categories.map(cat => (
            <CategoryTab
              key={cat.id}
              cat={cat}
              isActive={activeId === cat.id}
              onClick={() => setActiveId(cat.id)}
            />
          ))}
        </div>

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className={styles.skillsPanel}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
          >
            {active.skills.map(skill => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </AnimatePresence>

{/* Marquee */}
<div className={styles.marqueeWrapper}>
  <div className={styles.marqueeTrack}>
    {[...categories.flatMap(c => c.skills), ...categories.flatMap(c => c.skills)].map((skill, i) => (
      <span key={`${skill.name}-${i}`} className={styles.marqueeChip}>
        <i className={`${skill.icon} ${styles.chipIcon}`}></i>
        {skill.name}
      </span>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Skills;
