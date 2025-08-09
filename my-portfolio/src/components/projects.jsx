import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "../styles/projects.module.css";

import weatherImg from '../assets/weather.png';
import iosImg from '../assets/ios.png';
import ehrImg from '../assets/EHR.png';
import digitImg from '../assets/digitrecognition.png';
import portfolioImg from '../assets/portfolio.png';
import seqalignImg from '../assets/seqalign.png';
import routeItImg from '../assets/routeit.png';
import transferLearning from '../assets/transferlearning.png';
import amazonLogo from '../assets/amazon.png';


const projects = [
    {
        title: "Weather Monitoring Application",
        technologies: ["MEAN Stack", "Google Cloud", "RESTful APIs", "Highcharts"],
        description: " Engineered a responsive web application using Angular and TypeScript frontend with Node.js/Express backend, integrating MongoDB for data persistence and real-time weather monitoring and location services, featuring interactive weather visualization using HighCharts.",
        github: "https://github.com/nikhilgovindaraju/WeatherApp",
        image: weatherImg
    },
    {
        title: "Weather App (iOS)",
        technologies: ["Node.js", "Express", "Swift","SwiftUI"],
        description: "Developed a complementary native iOS mobile application using Swift and UIKit, implementing location-based services and weather data visualization, with RESTful API integration for seamless data synchronization with the web platform.",
        github: "https://github.com/nikhilgovindaraju/iosAppDevelpment",
        image: iosImg
    },
    {
        title: "Secure EHR Audit System",
        technologies: ["Python", "FastAPI", "Blockchain", "AWS/Docker","Supabase", "Redis", "GPT-3","PostgreSQL"],
        description: "Built a secure EHR platform with AES-256, role-based access, and Redis caching, cutting API latency by 50%, and integrated a GPT-powered chatbot with dynamic FAQs to boost engagement by 60%. Deployed on AWS with Dockerized CI/CD and achieved near-zero downtime.",
        github: "https://github.com/nikhilgovindaraju/EHR-AI",
        image: ehrImg
    },
    {
        title: "Distributed Order Fulfillment Platform",
        technologies: ['Java', 'Spring Boot', 'Apache Kafka',' Node.js','MongoDB','Docker','Kubernetes'],
        description: "Built a scalable microservices platform simulating Amazon's fulfillment flow with Kafka-driven event handling, predictive restocking in Node.js, and resilient containerized infrastructure using Kubernetes, DLQs, and circuit breakers.",
        github: "https://github.com/nikhilgovindaraju/Distributed-Order-Fulfillment-Platform",
        image: amazonLogo
    },
    {
        title: "Personal Portfolio Website",
        technologies: ["React", "CSS Modules", "Framer Motion", "Responsive Design", "GitHub Pages"],
        description: "Fully responsive portfolio showcasing projects, skills, and work experience using modern web technologies.",
        github: "https://github.com/nikhilgovindaraju/Portfolio",
        image: portfolioImg
    },
    {
        title: "Waste Classification via Transfer Learning",
        technologies: ["Python", "Keras", "TensorFlow", "Computer Vision", "Transfer Learning","scikit-learn"],
        description: "Built a 9-class waste image classifier using transfer learning with pre-trained CNNs (ResNet, EfficientNet, VGG), applying Keras/TensorFlow, regularization, and augmentation to achieve high AUC and F1-scores on limited data.",
        github: "https://github.com/nikhilgovindaraju/WasteClassification",
        image: transferLearning
    },
    {
        title: "Sequence Alignment",
        technologies: ["Python", "Dynamic Programming", "Algorithms"],
        description: "Implemented efficient Sequence Alignment solutions using Dynamic Programming and Divide-and-Conquer, optimizing memory usage and ensuring accurate results across datasets.",
        github: "https://github.com/nikhilgovindaraju/SequenceAlignment",
        image: seqalignImg
    },
    {
        title: "Handwritten Digit Recognition",
        technologies: ["Python", "Classification", "Keras", "TensorFlow"],
        description: "Preprocessed the Emnist dataset and segmented it into categories that later helped in predicting digitally entered english alphabet using Keras library used for Machine Learning.",
        github: "https://github.com/nikhilgovindaraju",
        image: digitImg
    },
    {
        title: "Route It- Smart traveling",
        technologies: ["Flutter", "Google Maps", "Firebase", "Dart"],
        description: "Architected a scalable cross-platform mobile and web application using Flutter and Dart for the frontend, implementing real-time route optimization algorithms and integrating Google Maps API for location services, with Firebase Authentication for secure user management.",
        github: "https://github.com/nikhilgovindaraju/route_it_v2",
        image: routeItImg
    }
];

const Projects = () => {
    return (
        <section className={styles.projectsSection} id="projects">
            <h2>PROJECTS</h2>
            <div className={styles.grid}>
                {projects.map((proj, index) => (
                    <div key={index} className={styles.projectCard}>
                        <img src={proj.image} alt={proj.title} className={styles.projectImage} />
                        <h3>{proj.title}</h3>
                        <div className={styles.techTags}>
                            {proj.technologies.map((tech, idx) => (
                                <span key={idx}>{tech}</span>
                            ))}
                        </div>
                        <p>{proj.description}</p>
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                            <FaGithub /> GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
