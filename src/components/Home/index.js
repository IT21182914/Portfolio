import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/download11-removebg-preview.png';
import Logo from './Logo';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isVisible, setIsVisible] = useState(false);

  const nameArray = ['i', 'l', 'a', 'n', '', 'S', 'h', 'a', 'n', 'u', 'k', 'a'];
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  const specialties = [
    { icon: '🐳', text: 'DevOps Lover' },
    { icon: '🤖', text: 'AI/ML Enthusiast' },
    { icon: '☁️', text: 'Cloud Enthusiast' },
    { icon: '⚙️', text: 'Automation' },
  ];

  const techStack = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Docker', level: 80 },
    { name: 'Kubernetes', level: 75 },
    { name: 'AWS', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'TensorFlow', level: 70 },
    { name: 'CI/CD', level: 85 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        {/* Animated Background Elements */}
        <div className="floating-elements">
          <div className="floating-element docker">🐳</div>
          <div className="floating-element k8s">☸️</div>
          <div className="floating-element ai">🤖</div>
          <div className="floating-element cloud">☁️</div>
          <div className="floating-element code">💻</div>
        </div>

        <div className="main-content">
          <div className="text-zone">
            <div className="intro-section">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img
                  src={LogoTitle}
                  alt="Dilan Shanuka - Full Stack Developer"
                />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={22}
                />
              </h1>

              <div className="role-tags">
                {specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className={`role-tag ${isVisible ? 'animate-in' : ''}`}
                    style={{ animationDelay: `${2 + index * 0.2}s` }}
                  >
                    <span className="role-icon">{specialty.icon}</span>
                    <span className="role-text">{specialty.text}</span>
                  </div>
                ))}
              </div>

              <p className="description">
                Passionate about building scalable applications, automating
                infrastructure, and exploring the frontiers of artificial
                intelligence. I craft digital experiences that merge innovation
                with reliability.
              </p>

              <div className="cta-buttons">
                <Link to="/contact" className="primary-button">
                  <span>Let's Connect</span>
                  <div className="button-bg"></div>
                </Link>
                <Link to="/portfolio" className="secondary-button">
                  <span>View My Work</span>
                </Link>
              </div>
            </div>

            {/* Quick Skills Preview */}
            <div className={`skills-preview ${isVisible ? 'show' : ''}`}>
              <h3>Tech Arsenal</h3>
              <div className="skills-grid">
                {techStack.slice(0, 4).map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${3 + index * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="visual-section">
            <div className="hero-visual">
              {/* Profile Image */}
              <div className="profile-image-container">
                <img
                  src="/Me/Me.jpg"
                  alt="Dilan Shanuka - FullStack Developer"
                  className="profile-image"
                />
                <div className="profile-glow"></div>
              </div>

              <div className="glass-card">
                <div className="card-header">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="terminal-title">~/dilan-portfolio</span>
                </div>
                <div className="card-content">
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <span className="command">docker run --name portfolio</span>
                  </div>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <span className="command">
                      kubectl apply -f deployment.yaml
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <span className="command">python train_model.py</span>
                  </div>
                  <div className="output">✅ All systems operational</div>
                </div>
              </div>

              <div className="floating-tech-icons">
                <div className="tech-icon react">⚛️</div>
                <div className="tech-icon node">📗</div>
                <div className="tech-icon python">🐍</div>
                <div className="tech-icon aws">☁️</div>
              </div>
            </div>

            <Logo />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
