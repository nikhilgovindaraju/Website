import { FaCode, FaCloud, FaTools, FaDatabase, FaRobot, FaBrain, FaChartBar, FaUsers } from 'react-icons/fa';

function Skills() {
    const categories = [
        {
            icon: <FaCode size={40} />,
            title: 'Languages',
            skills: 'Python, JavaScript (ES6+), C, Swift, Dart, HTML5, CSS3'
        },
        {
            icon: <FaTools size={40} />,
            title: 'Frontend',
            skills: 'React.js, Vue.js, Angular, Flutter, SwiftUI, UIKit'
        },
        {
            icon: <FaCloud size={40} />,
            title: 'Backend',
            skills: 'Node.js, Express.js, Flask, Firebase, RESTful APIs, GraphQL'
        },
        {
            icon: <FaCloud size={40} />,
            title: 'Cloud & DevOps',
            skills: 'AWS (EC2, S3), Google Cloud Platform, Oracle Cloud, Docker, Git, CI/CD, GitHub Actions'
        },
        {
            icon: <FaDatabase size={40} />,
            title: 'Databases',
            skills: 'MongoDB, MySQL, PostgreSQL, Cloud Firestore'
        },
        {
            icon: <FaBrain size={40} />,
            title: 'Machine Learning',
            skills: 'Scikit-learn, Pandas, NumPy, Matplotlib, Classification & Regression, Model Evaluation, Feature Engineering'
        },
        {
            icon: <FaTools size={40} />,
            title: 'Test Automation',
            skills: 'Pytest, Cypress, Selenium, Mocha, Chai, E2E Testing, API Testing'
        },
        {
            icon: <FaRobot size={40} />,
            title: 'Data Science',
            skills: 'Data Wrangling, AUC, F1-score, Cross-Validation, Tableau, Power BI, Matplotlib, Plotly, Seaborn'
        },
    ];

    return (
        <div id="skills">
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Skills</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem'
            }}>
                {categories.map((cat, idx) => (
                    <div key={idx} className="skill-card">
                        <div>{cat.icon}</div>
                        <h3>{cat.title}</h3>
                        <p>{cat.skills}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
