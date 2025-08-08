import React, { useEffect, useState, useMemo } from 'react';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faJava,
  faNode,
  faPhp,
  faDocker,
  faPython,
  faAws,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDownload,
  faRocket,
  faBrain,
  faServer,
  faCloud,
  faCog,
  faCode,
  faDatabase,
  faChartLine,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [skillProgress, setSkillProgress] = useState({});

  const skills = useMemo(() => [
    { name: 'React', level: 90, icon: faReact, color: '#61DAFB' },
    { name: 'Node.js', level: 85, icon: faNode, color: '#339933' },
    { name: 'Python', level: 80, icon: faPython, color: '#3776AB' },
    { name: 'Docker', level: 75, icon: faDocker, color: '#2496ED' },
    { name: 'AWS', level: 70, icon: faAws, color: '#FF9900' },
    { name: 'JavaScript', level: 88, icon: faJsSquare, color: '#F7DF1E' },
    { name: 'Java', level: 75, icon: faJava, color: '#007396' },
    { name: 'Git', level: 85, icon: faGitAlt, color: '#F05032' },
  ], []);

  const devOpsSkills = [
    { name: 'CI/CD', icon: faRocket, color: '#00f5ff' },
    { name: 'Kubernetes', icon: faServer, color: '#326CE5' },
    { name: 'Cloud Computing', icon: faCloud, color: '#FF9900' },
    { name: 'Infrastructure', icon: faCog, color: '#ffd700' },
  ];

  const aiMlSkills = [
    { name: 'Machine Learning', icon: faBrain, color: '#ff6b6b' },
    { name: 'Data Analysis', icon: faChartLine, color: '#00f5ff' },
    { name: 'Neural Networks', icon: faDatabase, color: '#ffd700' },
    { name: 'Model Deployment', icon: faShieldAlt, color: '#ff6b6b' },
  ];

  const achievements = [
    { number: '15+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '8+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        skills.forEach((skill, index) => {
          setTimeout(() => {
            setSkillProgress((prev) => ({
              ...prev,
              [skill.name]: skill.level,
            }));
          }, index * 200);
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skills]);

  const handleDownloadCV = async (event) => {
    // Prevent the default link behavior to handle download programmatically
    event.preventDefault();
    
    try {
      // Construct the CV URL
      const cvUrl = `${process.env.PUBLIC_URL}/DilanShanuka_SE_CV.pdf`;
      console.log('Attempting to download CV from:', cvUrl);
      
      // Check if file exists first
      const response = await fetch(cvUrl, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error(`CV file not found: ${response.status}`);
      }
      
      // Create download link
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'DilanShanuka_SE_CV.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // For mobile Safari compatibility
      link.setAttribute('download', 'DilanShanuka_SE_CV.pdf');
      
      // Add to DOM, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('CV download initiated successfully');
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      
      // Fallback: Use the link's default behavior
      try {
        const fallbackUrl = `${process.env.PUBLIC_URL}/DilanShanuka_SE_CV.pdf`;
        console.log('Trying fallback method with URL:', fallbackUrl);
        window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
      } catch (fallbackError) {
        console.error('Fallback method also failed:', fallbackError);
        
        // Final fallback: Let the browser handle the link naturally
        window.location.href = `${process.env.PUBLIC_URL}/DilanShanuka_SE_CV.pdf`;
      }
    }
  };

  const tabContent = {
    overview: (
      <div className="tab-content">
        <div className="about-intro">
          <h3>Full Stack Developer & DevOps Enthusiast</h3>
          <p>
            I am a passionate final year undergraduate at SLIIT, specializing in
            software engineering with a focus on modern web technologies, DevOps
            practices, and emerging AI/ML technologies. I thrive on building
            scalable applications and automating complex workflows.
          </p>
          <p>
            My journey in technology spans across full-stack development, cloud
            computing, and machine learning. I believe in writing clean,
            efficient code and implementing robust CI/CD pipelines that ensure
            seamless deployment and monitoring.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-label">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    skills: (
      <div className="tab-content">
        <div className="skills-section">
          <h3>Technical Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    style={{ color: skill.color }}
                    className="skill-icon"
                  />
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${skillProgress[skill.name] || 0}%`,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    devops: (
      <div className="tab-content">
        <div className="specialization-section">
          <h3>DevOps & Cloud Engineering</h3>
          <p>
            Passionate about automating infrastructure, implementing CI/CD
            pipelines, and ensuring scalable, reliable deployments. I work with
            containerization, orchestration, and cloud platforms to create
            robust development workflows.
          </p>
          <div className="specialization-grid">
            {devOpsSkills.map((skill, index) => (
              <div key={index} className="spec-card">
                <FontAwesomeIcon
                  icon={skill.icon}
                  style={{ color: skill.color }}
                  className="spec-icon"
                />
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    aiml: (
      <div className="tab-content">
        <div className="specialization-section">
          <h3>AI & Machine Learning</h3>
          <p>
            Exploring the frontiers of artificial intelligence and machine
            learning. I work with neural networks, data analysis, and model
            deployment to create intelligent applications that solve real-world
            problems.
          </p>
          <div className="specialization-grid">
            {aiMlSkills.map((skill, index) => (
              <div key={index} className="spec-card">
                <FontAwesomeIcon
                  icon={skill.icon}
                  style={{ color: skill.color }}
                  className="spec-icon"
                />
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  };

  return (
    <>
      <div className="container about-page">
        <div className="about-header">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <div className="about-tabs">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="about-content">
          <div className="content-section">
            {tabContent[activeTab]}

            <div className="cta-section">
              <a
                href={`${process.env.PUBLIC_URL}/DilanShanuka_SE_CV.pdf`}
                download="DilanShanuka_SE_CV.pdf"
                className="download-btn primary"
                onClick={handleDownloadCV}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDownload} />
                <span>Download CV</span>
                <div className="btn-glow"></div>
              </a>

              <div className="contact-info">
                <p>Ready to collaborate on innovative projects</p>
                <div className="contact-details">
                  <span>📧 dilanshanuka999@gmail.com</span>
                  <span>📱 +94 71 047 9052</span>
                </div>
              </div>
            </div>
          </div>

          <div className="visual-section">
            <div className="tech-ecosystem">
              <div className="central-hub">
                <div className="hub-core">
                  <FontAwesomeIcon icon={faCode} className="core-icon" />
                  <span>Full Stack</span>
                </div>
              </div>

              <div className="orbit-container">
                {/* Frontend Technologies */}
                <div className="tech-orbit frontend">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="orbit-icon react"
                  />
                  <FontAwesomeIcon
                    icon={faJsSquare}
                    className="orbit-icon js"
                  />
                  <FontAwesomeIcon icon={faHtml5} className="orbit-icon html" />
                  <FontAwesomeIcon icon={faCss3} className="orbit-icon css" />
                </div>

                {/* Backend Technologies */}
                <div className="tech-orbit backend">
                  <FontAwesomeIcon icon={faNode} className="orbit-icon node" />
                  <FontAwesomeIcon
                    icon={faPython}
                    className="orbit-icon python"
                  />
                  <FontAwesomeIcon icon={faJava} className="orbit-icon java" />
                  <FontAwesomeIcon icon={faPhp} className="orbit-icon php" />
                </div>

                {/* DevOps Technologies */}
                <div className="tech-orbit devops">
                  <FontAwesomeIcon
                    icon={faDocker}
                    className="orbit-icon docker"
                  />
                  <FontAwesomeIcon icon={faAws} className="orbit-icon aws" />
                  <FontAwesomeIcon
                    icon={faLinux}
                    className="orbit-icon linux"
                  />
                  <FontAwesomeIcon icon={faGitAlt} className="orbit-icon git" />
                </div>
              </div>

              <div className="tech-labels">
                <div className="label frontend-label">Frontend</div>
                <div className="label backend-label">Backend</div>
                <div className="label devops-label">DevOps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
