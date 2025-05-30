import './index.scss';
import { useState, useEffect } from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faStackOverflow,
  faWhatsapp,
  faDocker,
  faPython,
  faAws,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faCode,
  faServer,
  faBrain,
  faCloud,
  faCog,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const devOpsIcons = [
    { icon: faDocker, label: 'Docker', color: '#0db7ed' },
    { icon: faServer, label: 'DevOps', color: '#00f5ff' },
    { icon: faBrain, label: 'AI/ML', color: '#ff6b6b' },
    { icon: faCloud, label: 'Cloud', color: '#ffd700' },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/dilan-shanuka-750552195/',
      icon: faLinkedin,
      label: 'LinkedIn',
      color: '#0077b5',
    },
    {
      href: 'https://github.com/IT21182914',
      icon: faGithub,
      label: 'GitHub',
      color: '#333',
    },
    {
      href: 'https://www.youtube.com/channel/UCNtyR40eSgU6BKTx9TRNdng',
      icon: faYoutube,
      label: 'YouTube',
      color: '#ff0000',
    },
    {
      href: 'https://stackoverflow.com/users/15040717/dilan-shanuka',
      icon: faStackOverflow,
      label: 'Stack Overflow',
      color: '#f58025',
    },
    {
      href: 'https://Wa.me/+94710479052',
      icon: faWhatsapp,
      label: 'WhatsApp',
      color: '#25d366',
    },
  ];

  const navigationItems = [
    { to: '/', icon: faHome, label: 'HOME', exact: true },
    { to: '/about', icon: faUser, label: 'ABOUT' },
    { to: '/portfolio', icon: faSuitcase, label: 'PORTFOLIO' },
    { to: '/contact', icon: faEnvelope, label: 'CONTACT' },
  ];

  return (
    <div className="nav-bar">
      {/* Enhanced Logo Section */}
      <div className="logo-section">
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
          <div className="logo-container">
            <img src={LogoS} alt="Dilan Shanuka Logo" className="main-logo" />
            <div className="logo-glow"></div>
          </div>
          <img className="sub-logo" src={LogoSubtitle} alt="dilanshanuka" />
        </Link>

        {/* Status Indicator */}
        <div className="status-indicator">
          <div
            className={`status-dot ${isOnline ? 'online' : 'offline'}`}
          ></div>
          <span className="status-text">
            {isOnline ? 'Available' : 'Offline'}
          </span>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <nav className={showNav ? 'mobile-show' : ''}>
        {navigationItems.map((item, index) => (
          <NavLink
            key={item.to}
            exact={item.exact ? 'true' : undefined}
            activeclassname="active"
            className={`nav-link ${item.label.toLowerCase()}-link`}
            to={item.to}
            onClick={() => setShowNav(false)}
          >
            <div className="nav-icon-container">
              <FontAwesomeIcon icon={item.icon} />
              <div className="nav-background"></div>
            </div>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          className="close-icon"
        />
      </nav>

      {/* DevOps/AI Tech Stack Indicators */}
      <div className="tech-stack">
        <div className="tech-title">Tech Stack</div>
        {devOpsIcons.map((tech, index) => (
          <div
            key={index}
            className="tech-item"
            title={tech.label}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <FontAwesomeIcon
              icon={tech.icon}
              style={{ color: tech.color }}
              className="tech-icon"
            />
            <div className="tech-pulse"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Social Links */}
      <div className="social-section">
        <div className="social-title">Connect</div>
        <ul className="social-links">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                title={social.label}
                className="social-link"
                style={{ '--hover-color': social.color }}
              >
                <FontAwesomeIcon icon={social.icon} className="social-icon" />
                <div className="social-bg"></div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* System Info Panel */}
      <div className="system-info">
        <div className="system-time">
          {currentTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </div>
        <div className="system-date">
          {currentTime.toLocaleDateString([], {
            month: 'short',
            day: 'numeric',
          })}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        className="hamburger-icon"
      />

      {/* Background Animation */}
      <div className="sidebar-bg-animation">
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
      </div>
    </div>
  );
};

export default Sidebar;
