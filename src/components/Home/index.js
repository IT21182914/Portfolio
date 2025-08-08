import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/download11-removebg-preview.png';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faRocket,
  faBrain,
  faChartLine,
  faUsers,
  faBuilding,
  faCog,
  faDatabase,
  faCloud,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faNode,
  faDocker,
  faAws,
  faPython,
  faGithub,
  faStripe,
} from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isVisible, setIsVisible] = useState(false);

  const nameArray = ['i', 'l', 'a', 'n', '', 'S', 'h', 'a', 'n', 'u', 'k', 'a'];
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    ' ',
    '&',
    ' ',
    'E',
    'n',
    't',
    'r',
    'e',
    'p',
    'r',
    'e',
    'n',
    'e',
    'u',
    'r',
  ];

  const specialties = [
    { icon: faBuilding, text: 'Founder & CEO' },
    { icon: faCode, text: 'Full-Stack Developer' },
    { icon: faCloud, text: 'DevOps Engineer' },
    { icon: faBrain, text: 'AI Innovator' },
  ];

  const techStack = [
    { name: 'React', level: 92 },
    { name: 'Node.js', level: 88 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Docker', level: 82 },
    { name: 'AWS', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'Supabase', level: 88 },
    { name: 'Stripe', level: 75 },
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
                    <FontAwesomeIcon
                      icon={specialty.icon}
                      className="role-icon"
                    />
                    <span className="role-text">{specialty.text}</span>
                  </div>
                ))}
              </div>

              <p className="hero-subtitle">
                Founder & CEO,{' '}
                <span className="tech-spot-brand">Tech Spot</span> | Full-Stack
                Developer | DevOps & AI Innovator
              </p>

              <p className="description">
                I build scalable applications, manage{' '}
                <span className="tech-spot-brand">Tech Spot</span> mobile
                technology store, and create custom software solutions that
                drive business efficiency.
              </p>

              <div className="cta-buttons">
                <a
                  href="https://wa.me/94710479052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  <span>Contact Me</span>
                  <div className="button-bg"></div>
                </a>
                <a
                  href="https://techspotlk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  <span>Visit Tech Spot</span>
                </a>
                <Link to="/portfolio" className="tertiary-button">
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
