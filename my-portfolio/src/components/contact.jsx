import { FaEnvelope, FaLinkedin, FaGithub, FaCamera } from 'react-icons/fa';
import styles from '../styles/contact.module.css';

function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2>Let’s Connect</h2>
            <p>I’m open to Fall 2025 Co-ops and Full-time Roles and always excited to collaborate on impactful projects.</p>

            <div className={styles.buttonsContainer}>
                <a href="mailto:ngovinda@usc.edu" className={styles.contactBtn}>
                    <FaEnvelope /> Email Me
                </a>
                <a href="https://www.linkedin.com/in/nikhil-govindaraju/" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/nikhilgovindaraju" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                    <FaGithub /> GitHub
                </a>
                <a
          href="https://www.instagram.com/_thesnapguy_/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.contactBtn} ${styles.photoBtn}`}
        >
          <FaCamera /> Snaps
        </a>
            </div>
        </section>
    );
}

export default Contact;
