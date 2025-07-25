import React, { useState } from "react";
import styles from "../styles/certifications.module.css";

// ---- sample images (replace with yours) ----
import oci from "../assets/certifications/oci.png";
import aws from "../assets/certifications/aws.png";
import scrum from "../assets/certifications/csm.png";
import angular from "../assets/certifications/angular.png";
import reactImg from "../assets/certifications/reactessential.png";
import nasscom from "../assets/certifications/nasscom.png";
import flutter from "../assets/certifications/flutter.png";
import cloudnative from "../assets/certifications/awscloudnative.png";
import pmi from "../assets/certifications/projectmgmnt.png";
import agile from "../assets/certifications/agile.png";


const CERTS = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate 2024",
    organization: "Oracle",
    issued: "2024",
    image: oci,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["Cloud", "Oracle", "AI"]
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "AWS",
    issued: "2025",
    image: aws,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["Cloud", "AWS"]
  },
  {
    title: "Certified Scrum Master",
    organization: "Scrum Alliance",
    issued: "2024",
    image: scrum,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["Agile", "Scrum"]
  },
  {
    title: "React Essential Training",
    organization: "LinkedIn Learning",
    issued: "2025",
    image: reactImg,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["Frontend", "React"]
  },
  {
    title: "Complete Angular Course 2024",
    organization: "Udemy",
    issued: "2024",
    image: angular,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["Frontend", "Angular"]
  },
  {
    title: "Software Project Management",
    organization: "PMI",
    issued: "2025",
    image: pmi,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["SDLC", "Project Management"]
  },
  {
    title: "Agile Software Development",
    organization: "Comptia",
    issued: "2025",
    image: agile,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["Agile", "Software Development"]
  },
  {
    title: "Machine Learning & AI",
    organization: "Nasscom Foundation",
    issued: "2020",
    image: nasscom,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["ML/AI"]
  },
  {
    title: "AWS Fundamentals: Going Cloud-Native",
    organization: "AWS",
    issued: "2020",
    image: cloudnative,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["Cloud", "AWS"]
  },
  {
    title: "Complete Flutter Development Bootcamp with Dart",
    organization: "Udemy",
    issued: "2021",
    image: flutter,
    link: "https://www.linkedin.com/in/nikhil-govindaraju/details/certifications/",
    tags: ["Mobile app", "Development", "Dart"]
  }
];

const INITIAL = 3;

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null); // the cert opened in modal

  const visible = showAll ? CERTS : CERTS.slice(0, INITIAL);

  return (
    <section className={styles.section} id="certifications">
      <h2 className={styles.title}>CERTIFICATIONS</h2>

      <div className={styles.grid}>
        {visible.map((c, i) => (
          <article
            key={i}
            className={styles.card}
            onClick={() => setActive(c)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActive(c)}
          >
            <div className={styles.imageBox}>
              <img src={c.image} alt={c.title} />
              <span className={styles.yearBadge}>{c.issued}</span>
              <div className={styles.imageOverlay}>
              </div>
            </div>

            <div className={styles.meta}>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.org}>{c.organization}</p>

              {c.tags?.length ? (
                <div className={styles.tags}>
                  {c.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <button
                className={styles.credentialBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(c.link, "_blank");
                }}
              >
                Show credential
              </button>
            </div>
          </article>
        ))}
      </div>

      {CERTS.length > INITIAL && (
        <div className={styles.toggleContainer}>
          <button
          className={styles.toggleBtn}
          onClick={() => setShowAll((s) => !s)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Modal */}
      {active && (
        <div className={styles.modalBackdrop} onClick={() => setActive(null)}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className={styles.close}
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className={styles.modalHeader}>
              <h3>{active.title}</h3>
              <p className={styles.org}>{active.organization}</p>
            </div>

            <div className={styles.modalImageBox}>
              <img src={active.image} alt={active.title} />
            </div>

            <button
              className={styles.modalBtn}
              onClick={() => window.open(active.link, "_blank")}
            >
              View credential
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
