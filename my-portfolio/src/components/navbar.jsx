// import React from "react";
// import styles from "../styles/navbar.module.css"; // make sure path matches

// const Navbar = () => {
//     return (
//         <div className={styles.navbar}>
//             <nav>
//                 <ul>
//                     <li><a href="#hero">HOME</a></li>
//                     <li><a href="#about">ABOUT</a></li>
//                     <li><a href="#experience">WORK</a></li>
//                     <li><a href="#projects">PROJECTS</a></li>
//                     <li><a href="#certifications">CERTIFICATIONS</a></li>
//                     <li><a href="#skills">SKILLS</a></li>
//                     <li><a href="#contact">CONTACT</a></li>
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;

import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          <li><a href="#hero">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#experience">WORK</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#certifications">CERTIFICATIONS</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#contact">CONTACT</a></li>

          <li className={styles.resumeItem}>
  <a
    href={`${import.meta.env.BASE_URL}NikhilGovindaraju.pdf`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.resumeBtn}
  >
    📄 RESUME
  </a>
</li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

