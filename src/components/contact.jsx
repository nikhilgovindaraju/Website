import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/contact.module.css';

function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2>Let’s Connect</h2>
            <p>I’m open to full-time SDE roles and always excited to collaborate on impactful projects.</p>

            <div className={styles.buttonsContainer}>
                <a href="mailto:ngovinda@usc.edu" className={styles.contactBtn}>
                    <FaEnvelope /> Email Me
                </a>
                <a href="https://linkedin.com/in/nikhilgovindaraju" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/nikhilgovindaraju" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                    <FaGithub /> GitHub
                </a>
            </div>
        </section>
    );
}

export default Contact;
