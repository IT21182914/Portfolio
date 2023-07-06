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
import Con3 from '../../assets/images/Con3.png';


const Portfolio = () => {
  const projects = [
   
    {
        name: 'Construction Management System',
        images: [Con2], // Wrap the single image in an array
        description: 'Construction Management System using MERN Stack(MongoDB, Express, React, Node.js), Tailwind CSS and Firebase.',
        githubUrl: 'https://github.com/SLIITITP/itp-malabe-b07-itp_wd_b07_g01_t86',
      },



    {
      name: 'Computer Shop Client Management System',
      images: [phpweb], // Wrap the single image in an array
      description: 'Computer Hardware Shop Client Management System using HTML, CSS, JavaScript, PHP, MySQL, and Bootstrap.',
      githubUrl: 'https://github.com/IT21182914/PHP_CRUD-Application',
    },
    {
        name: 'Job Search Mobile Application',
        images: [Job1, Job2,Job3], // Wrap the single image in an array
        description: 'Job Search Mobile Application using Kotlin, Firebase, and Android Studio.',
        githubUrl: 'https://github.com/IT21177828/JobHuntz_MobileApp_MAD_Project',
      },

    {
        name: 'Tip Calculator Mobile Application',
        images: [Tip, Tip2, Tip3],
        description: 'Tip Calculator App using Kotlin and Android Studio.',
        githubUrl: 'https://github.com/IT21182914/Tip_Calculator_App',
      },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
      <h2 style={{
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '2rem 0',
  textTransform: 'uppercase',
  color: '#ffffff', // Set a contrasting color (white in this case)
  padding: '10px',
  animation: 'dance 1s infinite',
}}>
  Portfolio
</h2>





        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.name}</h3>
              <div className="image-gallery">
                {project.images.map((image, imageIndex) => (
                  <img key={imageIndex} src={image} alt={`Screenshot ${imageIndex + 1}`} className="project-image" />
                ))}
              </div>
              <p>{project.description}</p>
              <div className="button-container">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
