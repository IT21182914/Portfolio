import React, { useState, useEffect } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faReact,
  faNodeJs,
  faPython,
  faPhp,
  faJava,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faPlay,
  faPause,
  faExpand,
  faCode,
  faMobile,
  faDesktop,
  faDatabase,
  faCloud,
  faFilter,
  faSearch,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

// Import your images and videos
import Tip from '../../assets/images/Tip.png';
import Tip2 from '../../assets/images/Tip2.png';
import Tip3 from '../../assets/images/Tip3.png';
import phpweb from '../../assets/images/phpweb.png';
import Job1 from '../../assets/images/Job1.jpg';
import Job2 from '../../assets/images/Job2.jpg';
import Job3 from '../../assets/images/Job3.jpg';
import Con2 from '../../assets/images/Con2.png';
import Barcode from '../../assets/images/Barcode.png';
import English1 from '../../assets/images/English1.jpeg';
import English2 from '../../assets/images/English2.jpeg';
import AdminView from '../../assets/images/Admin View.png';
import SearchUsers from '../../assets/images/Search Users.png';
import TicketGenerate from '../../assets/images/Ticket Generate.png';
import Feedbacks from '../../assets/images/Feedbacks.jpg';
import Chat from '../../assets/images/Chat.jpg';
import JobPosting from '../../assets/images/Job Posting.jpg';
import Note1 from '../../assets/images/Note1.png';
import Note2 from '../../assets/images/Note2.png';
import Login from '../../assets/images/Login.png';
import Recipes from '../../assets/images/Recipes.png';
import VideoProject from '../../assets/videos/video.mp4';
import VideoProject1 from '../../assets/videos/phpVideo.mp4';
import VideoProject2 from '../../assets/videos/Recipe.mp4';
import flasknote1 from '../../assets/images/flasknote1.png';
import flasknote2 from '../../assets/images/flasknote2.png';
import djangoCRM1 from '../../assets/images/djangoCRM1.png';
import djangoCRM2 from '../../assets/images/djangoCRM2.png';
import djangoCRM3 from '../../assets/images/djangoCRM3.png';
import Github from '../../assets/videos/Github.mp4';
import Github1 from '../../assets/images/Github1.png';
import Github2 from '../../assets/images/Github2.png';
import Home from '../../assets/images/Home.png';
import ThreeJSHome from '../../assets/images/ThreeJSHome.png';
import TechSpotVideo from '../../assets/videos/TechSpot.mp4';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      name: 'Tech Spot Mobile Repair & Accessories Shop',
      category: 'web',
      type: 'Full Stack',
      technologies: ['React', 'Three.js', 'Tailwind CSS'],
      techIcons: [faReact, faJs],
      images: [ThreeJSHome, Home],
      videos: [TechSpotVideo],
      description:
        'Developed fully responsive website for my own mobile repair & accessories shop using React, Three.js, Tailwind CSS. Features 3D animations, modern UI/UX, and responsive design.',
      features: [
        '3D Animations',
        'Responsive Design',
        'Modern UI/UX',
        'Performance Optimized',
      ],
      hostUrl: 'https://techspot99.netlify.app/',
      githubUrl: 'https://github.com/IT21182914/Tech-Spot-Official',
      status: 'Live',
      year: '2024',
    },
    {
      id: 2,
      name: 'English to Sinhala Translator with Filter',
      category: 'web',
      type: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'RapidAPI'],
      techIcons: [faReact, faNodeJs, faDatabase],
      images: [English2, English1],
      description:
        'Advanced translation system with inappropriate words filtering using MERN stack and RapidAPI integration.',
      features: [
        'Real-time Translation',
        'Content Filtering',
        'API Integration',
        'Modern UI',
      ],
      githubUrl: 'https://github.com/IT21177828/SPM_SEES_Translator',
      status: 'Completed',
      year: '2024',
    },
    {
      id: 3,
      name: 'GitHub API Repository Explorer',
      category: 'web',
      type: 'Full Stack',
      technologies: ['React', 'Node.js', 'GitHub API', 'Tailwind CSS'],
      techIcons: [faReact, faNodeJs, faGithub],
      images: [Github1, Github2],
      videos: [Github],
      description:
        'Interactive GitHub repository explorer with search, like, and analytics features using GitHub API.',
      features: [
        'Repository Search',
        'Like System',
        'Analytics Dashboard',
        'User Profiles',
      ],
      githubUrl: 'https://github.com/IT21182914/Github-like-app',
      status: 'Completed',
      year: '2024',
    },
    {
      id: 4,
      name: 'Recipe Management System',
      category: 'web',
      type: 'Full Stack',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      techIcons: [faReact, faNodeJs, faDatabase],
      images: [Recipes, Login],
      videos: [VideoProject2],
      description:
        'Food category and recipe management with favorites feature using MERN stack.',
      features: [
        'Recipe Categories',
        'Favorites System',
        'User Authentication',
        'Responsive Design',
      ],
      hostUrl: 'https://recipecode.netlify.app/',
      githubUrl: 'https://github.com/IT21182914/Codesec-Project',
      status: 'Live',
      year: '2023',
    },
    {
      id: 5,
      name: 'Flask Note Taking App',
      category: 'web',
      type: 'Full Stack',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'React'],
      techIcons: [faPython, faReact, faDatabase],
      images: [flasknote1, flasknote2],
      description:
        'Simple yet powerful note-taking CRUD application using Python Flask backend and React frontend.',
      features: [
        'CRUD Operations',
        'PostgreSQL Database',
        'RESTful API',
        'Modern Frontend',
      ],
      githubUrl: 'https://github.com/IT21182914/first-flask-app/tree/main',
      status: 'Completed',
      year: '2023',
    },
    {
      id: 6,
      name: 'CRM System',
      category: 'web',
      type: 'Backend',
      technologies: ['Python', 'Django', 'MySQL', 'Bootstrap'],
      techIcons: [faPython, faDatabase],
      images: [djangoCRM1, djangoCRM2, djangoCRM3],
      description:
        'Comprehensive CRM system built with Django featuring user management and MySQL integration.',
      features: [
        'User Management',
        'CRUD Operations',
        'Authentication',
        'Admin Panel',
      ],
      githubUrl: 'https://github.com/IT21182914/CRM-System-Using-Django',
      status: 'Completed',
      year: '2023',
    },
    {
      id: 7,
      name: 'PartTime Job Finder App',
      category: 'mobile',
      type: 'Mobile App',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      techIcons: [faMobile],
      images: [Feedbacks, Chat, JobPosting],
      description:
        'Mobile application for finding part-time jobs with real-time chat and location-based search.',
      features: [
        'Real-time Chat',
        'Location Search',
        'Job Posting',
        'User Feedback',
      ],
      githubUrl: 'https://github.com/IT21182914/PartTimeNow_flutter_app-main',
      status: 'Completed',
      year: '2023',
    },
    {
      id: 8,
      name: 'Construction Management System',
      category: 'web',
      type: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase'],
      techIcons: [faReact, faNodeJs, faDatabase, faCloud],
      images: [Con2],
      videos: [VideoProject],
      description:
        'Comprehensive construction project management system with real-time collaboration features.',
      features: [
        'Project Management',
        'Real-time Updates',
        'File Storage',
        'Team Collaboration',
      ],
      githubUrl:
        'https://github.com/IT21182914/SLIIT-Information-Technology-Project',
      status: 'Completed',
      year: '2023',
    },
    {
      id: 9,
      name: 'Computer Shop Management',
      category: 'web',
      type: 'Full Stack',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      techIcons: [faPhp, faDatabase],
      images: [phpweb],
      videos: [VideoProject1],
      description:
        'Client management system for computer hardware shop with inventory tracking.',
      features: [
        'Client Management',
        'Inventory Tracking',
        'Sales Reports',
        'Admin Panel',
      ],
      githubUrl: 'https://github.com/IT21182914/PHP_CRUD-Application',
      status: 'Completed',
      year: '2022',
    },
    {
      id: 10,
      name: 'Job Search Mobile App',
      category: 'mobile',
      type: 'Mobile App',
      technologies: ['Kotlin', 'Firebase', 'Android Studio'],
      techIcons: [faMobile, faCloud],
      images: [Job1, Job2, Job3],
      description:
        'Android job search application with Firebase backend and modern material design.',
      features: [
        'Job Search',
        'Application Tracking',
        'Profile Management',
        'Real-time Notifications',
      ],
      githubUrl: 'https://github.com/IT21177828/JobHuntz_MobileApp_MAD_Project',
      status: 'Completed',
      year: '2022',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: faCode },
    { id: 'web', name: 'Web Applications', icon: faDesktop },
    { id: 'mobile', name: 'Mobile Apps', icon: faMobile },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev < selectedProject.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : selectedProject.images.length - 1
      );
    }
  };

  return (
    <>
      <div className="container portfolio-page">
        <div className="portfolio-header">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>

          <div className="portfolio-stats">
            <div className="stat-item">
              <span className="stat-number">{projects.length}+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              <FontAwesomeIcon icon={category.icon} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image-container">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-tech-icons">
                    {project.techIcons.map((icon, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={icon}
                        className="tech-icon"
                      />
                    ))}
                  </div>
                  <button className="view-project-btn">
                    <FontAwesomeIcon icon={faExpand} />
                    View Project
                  </button>
                </div>
                <div className="project-status">
                  <span
                    className={`status-badge ${project.status.toLowerCase()}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="project-year">{project.year}</span>
                </div>

                <div className="project-type">
                  <FontAwesomeIcon
                    icon={project.category === 'mobile' ? faMobile : faDesktop}
                  />
                  <span>{project.type}</span>
                </div>

                <p className="project-description">
                  {project.description.substring(0, 120)}...
                </p>

                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn github-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Code</span>
                  </a>
                  {project.hostUrl && (
                    <a
                      href={project.hostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn live-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeProjectModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeProjectModal}>
                ×
              </button>

              <div className="modal-content">
                <div className="modal-media">
                  {selectedProject.images &&
                    selectedProject.images.length > 0 && (
                      <div className="image-gallery">
                        <img
                          src={selectedProject.images[currentImageIndex]}
                          alt={selectedProject.name}
                          className="modal-image"
                        />
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              className="gallery-nav prev"
                              onClick={prevImage}
                            >
                              <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button
                              className="gallery-nav next"
                              onClick={nextImage}
                            >
                              <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                            <div className="gallery-dots">
                              {selectedProject.images.map((_, i) => (
                                <span
                                  key={i}
                                  className={`dot ${
                                    i === currentImageIndex ? 'active' : ''
                                  }`}
                                  onClick={() => setCurrentImageIndex(i)}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                  {selectedProject.videos && (
                    <div className="video-gallery">
                      {selectedProject.videos.map((video, i) => (
                        <video key={i} controls className="modal-video">
                          <source src={video} type="video/mp4" />
                        </video>
                      ))}
                    </div>
                  )}
                </div>

                <div className="modal-info">
                  <div className="modal-header">
                    <h2>{selectedProject.name}</h2>
                    <div className="modal-meta">
                      <span className="project-type">
                        <FontAwesomeIcon
                          icon={
                            selectedProject.category === 'mobile'
                              ? faMobile
                              : faDesktop
                          }
                        />
                        {selectedProject.type}
                      </span>
                      <span className="project-year">
                        {selectedProject.year}
                      </span>
                    </div>
                  </div>

                  <p className="modal-description">
                    {selectedProject.description}
                  </p>

                  <div className="modal-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-actions">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn github-btn"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      View Code
                    </a>
                    {selectedProject.hostUrl && (
                      <a
                        href={selectedProject.hostUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-btn live-btn"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
