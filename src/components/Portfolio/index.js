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

const Portfolio = () => {
  // Array of project objects
  const projects = [
    {
      name: 'English to Sinhala Translator With Innapropriate Words Filter',
      images: [English2, English1],
      description:
        'English to Sinhala Translator with Innapropriate Words Filter using MongoDB, Express, React, Node.js, Tailwind CSS with RapidAPI.',
      githubUrl: 'https://github.com/IT21177828/SPM_SEES_Translator',
    },

    {
      name: 'Food category and Recipe with add to favorite feature using MERN Stack',
      images: [Recipes, Login],
      description:
        'Food category and Recipe with add to favorite feature using MERN Stack(MongoDB, Express, React, Node.js). User can view food categories and recipes. Also, user can add recipes to favorite list.',
      hostUrl: 'https://recipecode.netlify.app/',
      githubUrl: 'https://github.com/IT21182914/Codesec-Project',
    },
    {
      name: 'Recorded Food category and Recipe with add to favorite feature using MERN Stack',
      videos: [VideoProject2],
      description:
        'Recorded video of Food category and Recipe with add to favorite feature',
      hostUrl: 'https://recipecode.netlify.app/',
      githubUrl: 'https://github.com/IT21182914/Codesec-Project',
    },
    {
      name: 'Note Taking CRUD Application Using Python Flask, PostgresSQL and React',
      images: [flasknote1, flasknote2],
      description:
        'Simple Note Taking CRUD Application using Python Flask and React with Tailwind CSS. PostgresSQL used as the database.',
      githubUrl: 'https://github.com/IT21182914/first-flask-app/tree/main',
    },
    {
      name: 'React Barcodes Generator',
      images: [TicketGenerate, Barcode],
      description:
        'React Barcodes Generator using React and React-Barcode-Generator.',
      githubUrl: 'https://github.com/IT21182914/Barcode-Generator-MERN-Web-App',
    },
    {
      name: 'CRM System Using Python Django and MySQL Database.',
      images: [djangoCRM1, djangoCRM2, djangoCRM3],
      description:
        'First Django project which is CRM System Using Python Django and MySQL Database. Learnt Django Forms, Registration, Login, Logout, CRUD Operations with Bootstrap & MySQL database.',
      githubUrl: 'https://github.com/IT21182914/CRM-System-Using-Django',
    },
    {
      name: 'Simple Note Taking CRUD Application Using MERN Stack',
      images: [Note1, Note2],
      description:
        'Simple Note Taking CRUD Application using MERN Stack(MongoDB, Express, React, Node.js), Tailwind CSS',
      hostUrl: 'https://unwir-project.netlify.app/',
      githubUrl: 'https://github.com/IT21182914/Unwir-Project',
    },
    {
      name: 'Loyalty Points Management System',
      images: [AdminView, SearchUsers],
      description:
        'Loyalty Points Management System using MERN Stack(MongoDB, Express, React, Node.js), Tailwind CSS',
      githubUrl: 'https://github.com/IT21182914/Loyalty-Management-System',
    },
    {
      name: 'PartTime Job Finder Mobile Application Using Flutter',
      images: [Feedbacks, Chat, JobPosting],
      description:
        'PartTime Job Finder Mobile Application using Flutter, Firebase. User can find part time jobs and apply for them. Also, user can post part time jobs and manage them.real time chat feature & location based job search feature also included.',
      githubUrl: 'https://github.com/IT21182914/PartTimeNow_flutter_app-main',
    },
    {
      name: 'Construction Management System',
      images: [Con2],
      description:
        'Construction Management System using MERN Stack(MongoDB, Express, React, Node.js), Tailwind CSS and Firebase.',
      githubUrl:
        'https://github.com/IT21182914/SLIIT-Information-Technology-Project',
    },
    {
      name: 'Computer Shop Client Management System',
      images: [phpweb],
      description:
        'Computer Hardware Shop Client Management System using HTML, CSS, JavaScript, PHP, MySQL, and Bootstrap.',
      githubUrl: 'https://github.com/IT21182914/PHP_CRUD-Application',
    },
    {
      name: 'Job Search Mobile Application',
      images: [Job1, Job2, Job3],
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
      videos: [VideoProject],
      description: 'Recorded video of Construction Management System',
      githubUrl:
        'https://github.com/SLIITITP/itp-malabe-b07-itp_wd_b07_g01_t86',
    },
    {
      name: 'Recorded Computer Shop Client Management System',
      videos: [VideoProject1],
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
