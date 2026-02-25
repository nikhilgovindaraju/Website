import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from '../styles/footer.module.css';

function openLink(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <span className={styles.logo}>
            NG<span className={styles.dot}>.</span>
          </span>
          <p className={styles.tagline}>Building things that matter.</p>
        </div>

        {/* Center */}
        <p className={styles.copy}>
          © {year} Nikhil Govindaraju. Designed &amp; built from scratch.
        </p>

        {/* Right */}
        <div className={styles.socials}>
          <button
            className={styles.socialBtn}
            onClick={() => openLink('mailto:ngovinda@usc.edu')}
            aria-label="Email"
          >
            <FiMail size={16}></FiMail>
          </button>
          <button
            className={styles.socialBtn}
            onClick={() => openLink('https://www.linkedin.com/in/nikhil-govindaraju/')}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={16}></FiLinkedin>
          </button>
          <button
            className={styles.socialBtn}
            onClick={() => openLink('https://github.com/nikhilgovindaraju')}
            aria-label="GitHub"
          >
            <FiGithub size={16}></FiGithub>
          </button>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarFill}></div>
      </div>

    </footer>
  );
};

export default Footer;