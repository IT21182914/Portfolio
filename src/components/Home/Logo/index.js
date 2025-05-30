import { useRef, useEffect } from 'react';
import LogoS from '../../../assets/images/download11-removebg-preview.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    // Animate logo entrance
    const timer = setTimeout(() => {
      if (solidLogoRef.current) {
        solidLogoRef.current.style.opacity = '1';
      }
      if (bgRef.current) {
        bgRef.current.style.opacity = '0.8';
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      {/* Enhanced Logo with Glow Effect */}
      <div className="logo-wrapper">
        <img
          className="solid-logo"
          ref={solidLogoRef}
          src={LogoS}
          alt="Dilan Shanuka Logo"
        />

        {/* Animated Background Circles */}
        <div className="bg-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>

      {/* Tech Stack Orbit Animation */}
      <div className="tech-orbit">
        <div className="orbit-ring orbit-1">
          <div className="tech-icon react">⚛️</div>
          <div className="tech-icon node">🟢</div>
        </div>
        <div className="orbit-ring orbit-2">
          <div className="tech-icon docker">🐳</div>
          <div className="tech-icon k8s">☸️</div>
        </div>
        <div className="orbit-ring orbit-3">
          <div className="tech-icon python">🐍</div>
          <div className="tech-icon ai">🤖</div>
        </div>
      </div>

      {/* Modern SVG Background Pattern */}
      <svg
        className="svg-background"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ffd700" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated Background Shapes */}
        <g
          className="svg-container"
          fill="url(#logoGradient)"
          filter="url(#glow)"
        >
          <polygon
            className="shape shape-1"
            points="200,50 350,150 300,300 100,300 50,150"
            opacity="0.3"
          />
          <circle
            className="shape shape-2"
            cx="200"
            cy="200"
            r="80"
            opacity="0.2"
          />
          <rect
            className="shape shape-3"
            x="150"
            y="150"
            width="100"
            height="100"
            rx="20"
            opacity="0.2"
          />
        </g>
      </svg>

      {/* Particle Effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
