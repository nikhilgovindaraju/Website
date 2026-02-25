import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import styles from '../styles/projects.module.css';

import weatherImg       from '../assets/weather.png';
import iosImg           from '../assets/ios.png';
import ehrImg           from '../assets/EHR.png';
import digitImg         from '../assets/digitrecognition.png';
import portfolioImg     from '../assets/portfolio.png';
import seqalignImg      from '../assets/seqalign.png';
import routeItImg       from '../assets/routeit.png';
import transferLearning from '../assets/transferlearning.png';
import leaveNow         from '../assets/LeaveNow.png';
import timeFreezeLogo   from '../assets/timeFreeze.png';

const projects = [
  {
    title: 'EHR-AI: Secure Health Records',
    description: 'Secure EHR platform with AES-256 encryption, role-based access, and Redis caching cutting API latency by 50%. GPT-powered chatbot boosting engagement by 60%. Deployed on AWS with Dockerized CI/CD.',
    technologies: ['Python', 'FastAPI', 'AWS', 'Docker', 'Redis', 'GPT-3', 'PostgreSQL'],
    github: 'https://github.com/nikhilgovindaraju/EHR-AI',
    image: ehrImg,
    category: 'fullstack',
    featured: true,
  },
  {
    title: 'LeaveNow: Intelligent Commute Planner',
    description: 'Microservices-based commute planner using Calendar, Maps, and Weather APIs for real-time event-driven leave-by notifications and smart replanning.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'Docker', 'Kubernetes'],
    github: 'https://github.com/nikhilgovindaraju/Distributed-Order-Fulfillment-Platform',
    image: leaveNow,
    category: 'fullstack',
    featured: true,
  },
  {
    title: 'Weather Monitoring App',
    description: 'MEAN Stack web app with real-time weather visualisation using HighCharts, Node.js backend, and MongoDB persistence.',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Highcharts'],
    github: 'https://github.com/nikhilgovindaraju/WeatherApp',
    image: weatherImg,
    category: 'fullstack',
    featured: true,
  },
  {
    title: 'Waste Classification — Transfer Learning',
    description: '9-class waste image classifier using transfer learning with ResNet, EfficientNet, and VGG. High AUC and F1-scores on limited training data.',
    technologies: ['Python', 'Keras', 'TensorFlow', 'ResNet', 'EfficientNet'],
    github: 'https://github.com/nikhilgovindaraju/WasteClassification',
    image: transferLearning,
    category: 'ml',
    featured: false,
  },
  {
    title: 'iOS Weather App',
    description: 'Native iOS app with Swift and UIKit, location-based services, and weather data visualisation synced with the web platform.',
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Node.js', 'REST APIs'],
    github: 'https://github.com/nikhilgovindaraju/iosAppDevelpment',
    image: iosImg,
    category: 'mobile',
    featured: false,
  },
  {
    title: 'Route It — Smart Travelling',
    description: 'Cross-platform Flutter app with real-time route optimisation and Google Maps integration for smart travel planning.',
    technologies: ['Flutter', 'Dart', 'Google Maps', 'Firebase'],
    github: 'https://github.com/nikhilgovindaraju/route_it_v2',
    image: routeItImg,
    category: 'mobile',
    featured: false,
  },
  {
    title: 'TimeFreeze Runner',
    description: 'Top-down survival Unity game with strategic time-freeze mechanics, particle systems, and motion controls built for a USC Game Development course.',
    technologies: ['Unity', 'C#', 'Particle Systems', 'Audio Engine'],
    github: 'https://csci-526.github.io/main-half-a-dozen/AlphaBuild/',
    image: timeFreezeLogo,
    category: 'other',
    featured: false,
  },
  {
    title: 'Handwritten Digit Recognition',
    description: 'EMNIST-based classifier for handwritten English alphabets using Keras with strong accuracy across all character categories.',
    technologies: ['Python', 'Keras', 'TensorFlow', 'EMNIST'],
    github: 'https://github.com/nikhilgovindaraju',
    image: digitImg,
    category: 'ml',
    featured: false,
  },
  {
    title: 'Sequence Alignment',
    description: 'Memory-efficient sequence alignment using Dynamic Programming and Divide-and-Conquer optimised for large biological datasets.',
    technologies: ['Python', 'Dynamic Programming', 'Algorithms'],
    github: 'https://github.com/nikhilgovindaraju/SequenceAlignment',
    image: seqalignImg,
    category: 'other',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description: 'Fully responsive developer portfolio with React, Framer Motion animations, dark/light mode, and GitHub Pages deployment.',
    technologies: ['React', 'Framer Motion', 'CSS Modules', 'Vite'],
    github: 'https://github.com/nikhilgovindaraju/Portfolio',
    image: portfolioImg,
    category: 'fullstack',
    featured: false,
  },
];

const filters = [
  { label: 'All',        value: 'all'      },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Mobile',     value: 'mobile'   },
  { label: 'ML / AI',    value: 'ml'       },
  { label: 'Other',      value: 'other'    },
];

function openLink(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function FilterBtn({ label, value, active, onClick }) {
  return (
    <button
      className={active
        ? `${styles.filterBtn} ${styles.filterActive}`
        : styles.filterBtn}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function ProjectCard({ proj }) {
  return (
    <motion.div
      className={proj.featured
        ? `${styles.card} ${styles.featuredCard}`
        : styles.card}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
    >
      {proj.featured && (
        <div className={styles.featuredBadge}>Featured</div>
      )}

      <div className={styles.imageWrap}>
        <img src={proj.image} alt={proj.title} className={styles.image} />
        <div className={styles.overlay}>
          <button
            className={styles.overlayBtn}
            onClick={() => openLink(proj.github)}
          >
            <FiGithub size={15}></FiGithub>
            View on GitHub
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{proj.title}</h3>
          <button
            className={styles.linkBtn}
            onClick={() => openLink(proj.github)}
            aria-label="Open project"
          >
            <FiArrowUpRight size={15}></FiArrowUpRight>
          </button>
        </div>
        <p className={styles.description}>{proj.description}</p>
        <div className={styles.techRow}>
          {proj.technologies.slice(0, 4).map(t => (
            <span key={t} className={styles.tech}>{t}</span>
          ))}
          {proj.technologies.length > 4 && (
            <span className={styles.tech}>+{proj.technologies.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.headerLeft}>
            <span className={styles.sectionTag}>Work</span>
            <h2 className={styles.heading}>Projects</h2>
          </div>
          <div className={styles.filters}>
            {filters.map(f => (
              <FilterBtn
                key={f.value}
                label={f.label}
                value={f.value}
                active={active === f.value}
                onClick={() => setActive(f.value)}
              />
            ))}
          </div>
        </motion.div>

        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map(proj => (
              <ProjectCard key={proj.title} proj={proj} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;