import { useEffect, useState } from 'react'
import DilanShanukaPDF from '../../assets/images/DilanShanuka.pdf';



import {
  faFigma,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faJava,
  faNode,
  faPhp
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () => setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const handleDownloadCV = () => {
    fetch(DilanShanukaPDF)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'DilanShanuka.pdf';
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading CV:', error);
      });
  };
  
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am a 3rd-year undergraduate at SLIIT, 
          seeking a software engineering internship. 
          With a strong passion for software engineering, 
          I am excited to apply my knowledge and skills in a professional 
          environment. I am particularly interested in working on 
          projects that involve cutting-edge technologies
           and offer opportunities for growth and learning.
          </p>
          <p align="LEFT">
          I have hands-on experience in the MERN stack and
           Kotlin with Android Studio through university projects.
            This has given me a strong foundation in both front-end and
             back-end development,
           enabling me to create dynamic web applications and mobile apps.
          </p>
          <p>
          In addition to my technical skills, 
          I'm a dedicated cricketer and skilled guitarist & trumpet player.
           These interests contribute to my problem-solving abilities and 
           attention to detail, making me a well-rounded developer. 
           I'm ready to bring my diverse background
           and enthusiasm for technology to an established IT company.
          </p>
          <button className='button' onClick={handleDownloadCV}>Download CV</button>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
           
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face1">
              <FontAwesomeIcon icon={faPhp} color="#DD0031" />
            </div>
            <div className="face1">
              <FontAwesomeIcon icon={faFigma} color="#DD0031" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
