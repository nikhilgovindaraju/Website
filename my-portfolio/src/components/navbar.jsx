import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/navbar.module.css';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home',     href: '#hero'           },
  { label: 'About',    href: '#about'          },
  { label: 'Work',     href: '#experience'     },
  { label: 'Projects', href: '#projects'       },
  { label: 'Certs',    href: '#certifications' },
  { label: 'Skills',   href: '#skills'         },
  { label: 'Contact',  href: '#contact'        },
];

function NavLink({ label, href, activeSection }) {
  const id = href.replace('#', '');
  const isActive = activeSection === id;
  const cn = isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  return (
    <li>
      <a href={href} className={cn}>
        {label}
        {isActive ? <span className={styles.activeDot}></span> : null}
      </a>
    </li>
  );
}

function MobileNavLink({ label, href, activeSection, onClick }) {
  const id = href.replace('#', '');
  const isActive = activeSection === id;
  const cn = isActive
    ? `${styles.mobileLink} ${styles.mobileActive}`
    : styles.mobileLink;
  return (
    <li>
      <a href={href} className={cn} onClick={onClick}>
        {label}
      </a>
    </li>
  );
}

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''));
    const observers = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleLinkClick = () => setMenuOpen(false);
  const handleMenuToggle = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const headerCn = scrolled
    ? `${styles.header} ${styles.scrolled}`
    : styles.header;

  const drawerCn = menuOpen
    ? `${styles.mobileDrawer} ${styles.drawerOpen}`
    : styles.mobileDrawer;

  const resumeHref = `${import.meta.env.BASE_URL}NikhilGovindaraju.pdf`;

  const ThemeBtn = () => {
    if (theme === 'dark') {
      return (
        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
          <FiSun size={18}></FiSun>
        </button>
      );
    }
    return (
      <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
        <FiMoon size={18}></FiMoon>
      </button>
    );
  };

  const HamburgerBtn = () => {
    if (menuOpen) {
      return (
        <button className={styles.hamburger} onClick={handleMenuToggle} aria-label="Close menu">
          <FiX size={22}></FiX>
        </button>
      );
    }
    return (
      <button className={styles.hamburger} onClick={handleMenuToggle} aria-label="Open menu">
        <FiMenu size={22}></FiMenu>
      </button>
    );
  };

  return (
    <header className={headerCn}>

      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo} onClick={handleLinkClick}>
          NG<span className={styles.logoDot}>.</span>
        </a>

        <ul className={styles.navLinks}>
          {navLinks.map(link => (
            <NavLink
              key={link.href}
              label={link.label}
              href={link.href}
              activeSection={activeSection}
            />
          ))}
        </ul>

        <div className={styles.navRight}>
          <ThemeBtn></ThemeBtn>
          <a href={resumeHref} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
            Resume ↗
          </a>
          <HamburgerBtn></HamburgerBtn>
        </div>
      </nav>

      <div className={drawerCn}>
        <ul className={styles.mobileLinks}>
          {navLinks.map(link => (
            <MobileNavLink
              key={link.href}
              label={link.label}
              href={link.href}
              activeSection={activeSection}
              onClick={handleLinkClick}
            />
          ))}
          <li>
            <a href={resumeHref} target="_blank" rel="noopener noreferrer" className={styles.mobileResume} onClick={handleLinkClick}>
              Resume ↗
            </a>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Navbar;