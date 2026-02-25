
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from '../styles/certifications.module.css';
import { useScrollReveal, fadeUp, staggerContainer, staggerItem } from '../hooks/useScrollReveal';
import React, { useState } from 'react';

import csmImg      from '../assets/certifications/csm.png';
import awsImg      from '../assets/certifications/aws.png';
import ociImg      from '../assets/certifications/oci.png';
import agileImg    from '../assets/certifications/agile.png';
import flutterImg  from '../assets/certifications/flutter.png';
import angularImg  from '../assets/certifications/angular.png';
import agenticImg  from '../assets/certifications/agentic-ai.png';
import awsCloudImg from '../assets/certifications/awscloudnative.png';
import projectImg  from '../assets/certifications/projectmgmnt.png';
import nasscomImg  from '../assets/certifications/nasscom.png';
import reactImg    from '../assets/certifications/reactessential.png';
import googleAIImg  from '../assets/certifications/google-ai-essentials.png';



const featured = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: 'Feb 2026',
    image: googleAIImg,
    tags: ['AI tools', 'Prompt engineering', 'LLM', 'Generative AI'],
    link: 'https://www.coursera.org/account/accomplishments/specialization/ZAB5SYJXCVHX',
  },

  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Jan 2025',
    image: awsImg,
    tags: ['Cloud', 'AWS'],
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },

  {
    title: 'Certified Scrum Master',
    issuer: 'Scrum Alliance',
    date: 'Oct 2023',
    image: csmImg,
    tags: ['Agile', 'Scrum'],
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },
  {
    title: 'Agentic AI & Multi-Agent Systems',
    issuer: 'Udemy',
    date: '2025',
    tags: ['AI', 'LLM'],
    image: agenticImg,
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },

];

const rest = [
  {
    title: 'OCI AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Nov 2024',
    image: ociImg,
    tags: ['Cloud', 'AI'],
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },

  {
    title: 'AWS Cloud Native Architecture',
    issuer: 'Amazon Web Services',
    date: '2024',
    tags: ['AWS', 'Architecture'],
    image: awsCloudImg,
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },
  {
    title: 'Agile Project Management',
    issuer: 'Google',
    date: '2023',
    tags: ['Agile', 'PM'],
    image: agileImg,
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },
  {
    title: 'Flutter Development Bootcamp',
    issuer: 'Udemy',
    date: '2023',
    tags: ['Flutter', 'Mobile'],
    image: flutterImg,
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },
  {
    title: 'Angular — The Complete Guide',
    issuer: 'Udemy',
    date: '2022',
    tags: ['Angular', 'Frontend'],
    image: angularImg,
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },
  {
    title: 'React Essential Training',
    issuer: 'LinkedIn Learning',
    date: '2022',
    tags: ['React', 'Frontend'],
    image: reactImg,
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },
  {
    title: 'Project Management',
    issuer: 'Simplilearn',
    date: '2022',
    tags: ['PM'],
    image: projectImg,
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },
  {
    title: 'ML & AI Foundations',
    issuer: 'NASSCOM',
    date: '2022',
    tags: ['ML', 'AI'],
    image: nasscomImg,
    link: 'https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/',
  },
];

function openLink(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function FeaturedCard({ cert }) {
  return (
    <motion.div
      className={styles.featuredCard}
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => openLink(cert.link)}
    >
      <div className={styles.featuredImageWrap}>
        <img src={cert.image} alt={cert.title} className={styles.featuredImage} />
        <div className={styles.featuredOverlay}>
          <FiArrowUpRight size={20}></FiArrowUpRight>
        </div>
      </div>
      <div className={styles.featuredContent}>
        <div className={styles.featuredTags}>
          {cert.tags.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <p className={styles.featuredTitle}>{cert.title}</p>
        <p className={styles.featuredIssuer}>{cert.issuer}</p>
        <p className={styles.featuredDate}>{cert.date}</p>
      </div>
    </motion.div>
  );
}

function RestRow({ cert }) {
  return (
    <motion.div
      className={styles.restRow}
      variants={staggerItem}
      onClick={() => openLink(cert.link)}
    >
      <div className={styles.restThumb}>
        <img src={cert.image} alt={cert.title} className={styles.restThumbImg} />
      </div>
      <div className={styles.restInfo}>
        <p className={styles.restTitle}>{cert.title}</p>
        <p className={styles.restMeta}>{cert.issuer} · {cert.date}</p>
      </div>
      <div className={styles.restTags}>
        {cert.tags.map(t => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
      <button
        className={styles.restLink}
        onClick={(e) => { e.stopPropagation(); openLink(cert.link); }}
      >
        <FiArrowUpRight size={14}></FiArrowUpRight>
      </button>
    </motion.div>
  );
}

const Certifications = () => {
  const { ref: headerRef, controls: headerControls } = useScrollReveal();
  const { ref: featRef,   controls: featControls   } = useScrollReveal();
  const { ref: restRef,   controls: restControls   } = useScrollReveal();
  const [showMore, setShowMore] = useState(false);
  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.inner}>

        <motion.div
          ref={headerRef}
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate={headerControls}
        >
          <div className={styles.headerLeft}>
            <span className={styles.sectionTag}>Credentials</span>
            <h2 className={styles.heading}>Certifications</h2>
            <p className={styles.sub}>
              Industry-recognized credentials in Cloud, AI &amp; Software Engineering
            </p>
          </div>
          <div className={styles.totalBadge}>
            <span className={styles.totalNum}>{featured.length + rest.length}</span>
            <span className={styles.totalLabel}>credentials</span>
          </div>
        </motion.div>

        {/* Featured 3 */}
        <motion.div
          ref={featRef}
          className={styles.featuredGrid}
          variants={staggerContainer}
          initial="hidden"
          animate={featControls}
        >
          {featured.map(cert => (
            <FeaturedCard key={cert.title} cert={cert} />
          ))}
        </motion.div>

{/* Rest as rows */}
<div className={styles.restWrapper}>
  <AnimatePresence>
    {showMore && (
      <motion.div
        className={styles.restList}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <p className={styles.restLabel}>More Certifications</p>
        {rest.map(cert => (
          <RestRow key={cert.title} cert={cert} />
        ))}
      </motion.div>
    )}
  </AnimatePresence>

  <button
    className={styles.toggleBtn}
    onClick={() => setShowMore(prev => !prev)}
  >
    {showMore
      ? 'Show Less ↑'
      : `Show ${rest.length} More Certifications ↓`}
  </button>
</div>

      </div>
    </section>
  );
};

export default Certifications;