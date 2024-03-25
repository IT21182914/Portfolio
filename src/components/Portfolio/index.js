import React from 'react';
import './index.scss';
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
import VideoProject from '../../assets/videos/video.mp4';
import VideoProject1 from '../../assets/videos/phpVideo.mp4';
const Portfolio = () => {
  const projects = [
    {
      name: 'English to Sinhala Translator With Innapropriate Words Filter',
      images: [English2, English1], // Wrap the single image in an array
      description:
        'English to Sinhala Translator with Innapropriate Words Filter using MongoDB, Express, React, Node.js, Tailwind CSS with RapidAPI.',
      githubUrl: 'https://github.com/IT21177828/SPM_SEES_Translator',
    },
    {
      name: 'Simple Note Taking CRUD Application Using MERN Stack',
      images: [Note1, Note2], // Wrap the single image in an array
      description:
        'Simple Note Taking CRUD Application using MERN Stack(MongoDB, Express, React, Node.js), Tailwind CSS',
      hostUrl: 'https://unwir-project.netlify.app/',
      githubUrl: 'https://github.com/IT21182914/Unwir-Project',
    },
    {
      name: 'React Barcodes Generator',
      images: [TicketGenerate, Barcode], // Wrap the single image in an array
      description:
        'React Barcodes Generator using React and React-Barcode-Generator.',
      githubUrl: 'https://github.com/IT21182914/Barcode-Generator-MERN-Web-App',
    },
    {
      name: 'Loyalty Points Management System',
      images: [AdminView, SearchUsers], // Wrap the single image in an array
      description:
        'Loyalty Points Management System using MERN Stack(MongoDB, Express, React, Node.js), Tailwind CSS',
      githubUrl: 'https://github.com/IT21182914/Loyalty-Management-System',
    },
    {
      name: 'PartTime Job Finder Mobile Application Using Flutter',
      images: [Feedbacks, Chat, JobPosting], // Wrap the single image in an array
      description:
        'PartTime Job Finder Mobile Application using Flutter, Firebase. User can find part time jobs and apply for them. Also, user can post part time jobs and manage them.real time chat feature & location based job search feature also included.',
      githubUrl: 'https://github.com/IT21182914/PartTimeNow_flutter_app-main',
    },
    {
      name: 'Construction Management System',
      images: [Con2], // Wrap the single image in an array
      description:
        'Construction Management System using MERN Stack(MongoDB, Express, React, Node.js), Tailwind CSS and Firebase.',
      githubUrl:
        'https://github.com/IT21182914/SLIIT-Information-Technology-Project',
    },
    {
      name: 'Computer Shop Client Management System',
      images: [phpweb], // Wrap the single image in an array
      description:
        'Computer Hardware Shop Client Management System using HTML, CSS, JavaScript, PHP, MySQL, and Bootstrap.',
      githubUrl: 'https://github.com/IT21182914/PHP_CRUD-Application',
    },
    {
      name: 'Job Search Mobile Application',
      images: [Job1, Job2, Job3], // Wrap the single image in an array
      description:
        'Job Search Mobile Application using Kotlin, Firebase, and Android Studio.',
      githubUrl: 'https://github.com/IT21177828/JobHuntz_MobileApp_MAD_Project',
    },
    {
      name: 'Tip Calculator Mobile Application',
      images: [Tip, Tip2, Tip3],
      description: 'Tip Calculator App using Kotlin and Android Studio.',
      githubUrl: 'https://github.com/IT21182914/Tip_Calculator_App',
    },

    {
      name: 'Recorded Construction Management System',
      videos: [VideoProject], // Wrap the single video in an array
      description: 'Recorded video of Construction Management System',
      githubUrl:
        'https://github.com/SLIITITP/itp-malabe-b07-itp_wd_b07_g01_t86',
    },
    {
      name: 'Recorded Computer Shop Client Management System',
      videos: [VideoProject1], // Wrap the single video in an array
      description: 'Recorded video of Computer Shop Client Management System',
      githubUrl: 'https://github.com/IT21182914/PHP_CRUD-Application',
    },
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <h2
          style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '2rem 0',
            textTransform: 'uppercase',
            color: '#ffffff',
            padding: '10px',
            animation: 'dance 1s infinite',
          }}
        >
          Portfolio
        </h2>

        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.name}</h3>
              {project.images && (
                <div className="image-gallery">
                  {project.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={`Screenshot ${imageIndex + 1}`}
                      className="project-image"
                    />
                  ))}
                </div>
              )}
              {project.videos && (
                <div className="video-gallery">
                  {project.videos.map((video, videoIndex) => (
                    <video
                      key={videoIndex}
                      controls
                      className="project-video"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  ))}
                </div>
              )}
              <p>{project.description}</p>
              <div className="button-container">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  View on GitHub
                </a>
                {project.hostUrl && (
                  <a
                    href={project.hostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      margin: '0 10px',
                      display: 'inline-block',
                      transition: 'background-color 0.3s',
                    }}
                  >
                    See Web Application
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
