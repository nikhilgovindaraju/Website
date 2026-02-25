import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle, FiCamera } from 'react-icons/fi';
import styles from '../styles/contact.module.css';
import { useScrollReveal, fadeUp } from '../hooks/useScrollReveal';

const socials = [
  {
    label: 'Email',
    value: 'nikhil.govindaraju312@gmail.com',
    href: 'mailto:nikhil.govindaraju312@gmail.com',
    Icon: FiMail,
    color: '#4f8ef7',
  },
  {
    label: 'LinkedIn',
    value: 'nikhil-govindaraju',
    href: 'https://www.linkedin.com/in/nikhil-govindaraju/',
    Icon: FiLinkedin,
    color: '#0a66c2',
  },
  {
    label: 'GitHub',
    value: 'nikhilgovindaraju',
    href: 'https://github.com/nikhilgovindaraju',
    Icon: FiGithub,
    color: '#8b949e',
  },
  {
    label: 'Instagram',
    value: '_thesnapguy_',
    href: 'https://www.instagram.com/_thesnapguy_/',
    Icon: FiCamera,
    color: '#e1306c',
  },
];

function SocialRow({ s }) {
  const Icon = s.Icon;
  return (
    <button
      className={styles.socialRow}
      onClick={() => window.open(s.href, '_blank', 'noopener,noreferrer')}
    >
      <div
        className={styles.socialIcon}
        style={{ background: `${s.color}18`, color: s.color }}
      >
        <Icon size={18}></Icon>
      </div>
      <div className={styles.socialText}>
        <span className={styles.socialLabel}>{s.label}</span>
        <span className={styles.socialValue}>{s.value}</span>
      </div>
      <span className={styles.socialArrow}>↗</span>
    </button>
  );
}

function SubmitBtn({ status }) {
  if (status === 'loading') {
    return (
      <button className={styles.submitBtn} disabled>
        <span className={styles.spinner}></span>
        Sending...
      </button>
    );
  }
  if (status === 'success') {
    return (
      <button className={`${styles.submitBtn} ${styles.submitSuccess}`} disabled>
        <FiCheck size={16}></FiCheck>
        Message Sent!
      </button>
    );
  }
  if (status === 'error') {
    return (
      <button className={`${styles.submitBtn} ${styles.submitError}`} disabled>
        <FiAlertCircle size={16}></FiAlertCircle>
        Failed — try email
      </button>
    );
  }
  return (
    <button type="submit" className={styles.submitBtn}>
      <FiSend size={15}></FiSend>
      Send Message
    </button>
  );
}

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const { ref: leftRef,  controls: leftControls  } = useScrollReveal();
  const { ref: rightRef, controls: rightControls } = useScrollReveal();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }).catch(() => {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    });
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>

        <motion.div
          ref={leftRef}
          className={styles.left}
          variants={fadeUp}
          initial="hidden"
          animate={leftControls}
        >
          <span className={styles.sectionTag}>Get In Touch</span>
          <h2 className={styles.heading}>Let's build something great</h2>
          <p className={styles.bio}>
          I'm a recent M.S. CS graduate actively looking for
  <strong> full-time software engineering roles</strong>.
  Beyond that, I'm always open to freelance work, open-source
  collaboration, side projects, or just a good conversation
  about tech. If you have an idea, an opportunity, or want
  to build something together, reach out.
          </p>

          <div className={styles.availability}>
            <span className={styles.availDot}></span>
            <span className={styles.availText}>
            Open to full-time, freelance &amp; collaboration
            </span>
          </div>

          <div className={styles.socials}>
            {socials.map(s => (
              <SocialRow key={s.label} s={s} />
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={rightRef}
          className={styles.right}
          variants={fadeUp}
          initial="hidden"
          animate={rightControls}
          transition={{ delay: 0.15 }}
        >
          <div className={styles.formCard}>
            <p className={styles.formTitle}>Send a message</p>
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder="What's on your mind?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <SubmitBtn status={status} />

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;