import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faUser,
  faAt,
  faComment,
  faGlobe,
  faRocket,
  faStar,
  faCode,
  faHeart,
  faCheckCircle,
  faSpinner,
  faExclamationCircle,
  faCoffee,
  faLocationDot,
  faClock,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [isVisible, setIsVisible] = useState(false);
  const [activeInput, setActiveInput] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      await emailjs.sendForm(
        'service_fjvaekm',
        'template_wkpxpyk',
        form.current,
        'CPlfvbXo4wQGBP2Tj'
      );
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
        form.current.reset();
      }, 4000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const contactMethods = [
    {
      icon: faEnvelope,
      title: 'Email Me',
      subtitle: 'Get in touch',
      value: 'dilanshanuka999@gmail.com',
      link: 'mailto:dilanshanuka999@gmail.com',
      color: '#00f5ff',
      gradient: 'linear-gradient(135deg, #00f5ff 0%, #0099cc 100%)',
    },
    {
      icon: faWhatsapp,
      title: 'WhatsApp',
      subtitle: 'Quick chat',
      value: '+94 71 047 9052',
      link: 'https://wa.me/94710479052',
      color: '#25d366',
      gradient: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
    },
    {
      icon: faLocationDot,
      title: 'Location',
      subtitle: 'Come visit',
      value: 'Tissamaharama, Sri Lanka',
      link: '#map-section',
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
    },
  ];

  const socialLinks = [
    { icon: faLinkedin, color: '#0077b5', name: 'LinkedIn', link: '#' },
    { icon: faGithub, color: '#333', name: 'GitHub', link: '#' },
    { icon: faTwitter, color: '#1da1f2', name: 'Twitter', link: '#' },
    { icon: faInstagram, color: '#e4405f', name: 'Instagram', link: '#' },
    { icon: faSkype, color: '#00aff0', name: 'Skype', link: '#' },
  ];

  const quickStats = [
    {
      icon: faCode,
      number: '30+',
      label: 'Projects Completed',
      color: '#00f5ff',
    },
    {
      icon: faRocket,
      number: '5+',
      label: 'Years Experience',
      color: '#ffd700',
    },
    {
      icon: faStar,
      number: '1',
      label: 'Company Founded',
      color: '#ff6b6b',
    },
    {
      icon: faHeart,
      number: '24/7',
      label: 'Business Support',
      color: '#00ff88',
    },
  ];

  const availabilityHours = [
    {
      day: 'Monday - Friday',
      hours: '9:00 AM - 6:00 PM',
      timezone: 'Sri Lanka Time',
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 4:00 PM',
      timezone: 'Sri Lanka Time',
    },
    { day: 'Sunday', hours: 'By Appointment', timezone: 'Flexible' },
  ];

  return (
    <>
      <div className="container contact-page">
        {/* Hero Section */}
        <div className="contact-hero">
          <div className="hero-background">
            <div className="floating-elements">
              <div className="float-element element-1">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="float-element element-2">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className="float-element element-3">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <div className="float-element element-4">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="float-element element-5">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
          </div>

          <div className="hero-content">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'L',
                  'e',
                  't',
                  "'",
                  's',
                  ' ',
                  'C',
                  'o',
                  'n',
                  'n',
                  'e',
                  'c',
                  't',
                ]}
                idx={15}
              />
            </h1>
            <p className="hero-subtitle">
              Interested in Software Engineering, Entrepreneurship, discussing
              Business Growth strategies, or Leadership development? Let's
              connect and explore how{' '}
              <span className="tech-spot-brand">Tech Spot</span>
              can collaborate on innovative tech solutions!
            </p>

            <div className="quick-stats">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-item"
                  style={{ '--stat-color': stat.color }}
                >
                  <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="contact-main">
          {/* Contact Methods Section */}
          <section className="contact-methods-section">
            <div className="section-header">
              <h2>How to Reach Me</h2>
              <p>Choose your preferred way to get in touch</p>
            </div>

            {/* Contact Profile */}
            <div className="contact-profile">
              <img
                src="/Me/Me.jpg"
                alt="Dilan Shanuka - Contact Me"
                className="contact-profile-image"
              />
              <div className="contact-greeting">
                <h3>
                  Looking for Software Engineering expertise or Business Growth
                  insights?
                </h3>
                <p>
                  As the Founder & CEO of{' '}
                  <span className="tech-spot-brand">Tech Spot</span> in
                  Tissamaharama, I'm passionate about connecting with
                  entrepreneurs, developers, and business leaders who value
                  innovative tech solutions, scalable business strategies, and
                  leadership development.
                </p>
              </div>
            </div>

            <div className="contact-methods-grid">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="method-card"
                  style={{ '--method-gradient': method.gradient }}
                >
                  <div className="method-header">
                    <div className="method-icon">
                      <FontAwesomeIcon icon={method.icon} />
                    </div>
                    <div className="method-info">
                      <h3>{method.title}</h3>
                      <span className="method-subtitle">{method.subtitle}</span>
                    </div>
                  </div>
                  <div className="method-value">{method.value}</div>
                  <div className="method-overlay"></div>
                </a>
              ))}
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="contact-columns">
            {/* Left Column - Form */}
            <section className="form-section">
              <div className="form-container">
                <div className="form-header">
                  <h2>Send a Message</h2>
                  <p>
                    Tell me about your mobile tech needs and let's explore how
                    <span className="tech-spot-brand">Tech Spot</span> can
                    provide the perfect smartphone, repair service, or tech
                    accessory solution
                  </p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="form-grid">
                    <div className="input-wrapper">
                      <div className="input-group">
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setActiveInput('name')}
                          onBlur={() => setActiveInput('')}
                          className={activeInput === 'name' ? 'active' : ''}
                          required
                        />
                        <label>Full Name</label>
                        <div className="input-border"></div>
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <div className="input-group">
                        <FontAwesomeIcon icon={faAt} className="input-icon" />
                        <input
                          type="email"
                          name="from_email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setActiveInput('email')}
                          onBlur={() => setActiveInput('')}
                          className={activeInput === 'email' ? 'active' : ''}
                          required
                        />
                        <label>Email Address</label>
                        <div className="input-border"></div>
                      </div>
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <div className="input-group">
                      <FontAwesomeIcon icon={faGlobe} className="input-icon" />
                      <input
                        type="text"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setActiveInput('subject')}
                        onBlur={() => setActiveInput('')}
                        className={activeInput === 'subject' ? 'active' : ''}
                        required
                      />
                      <label>Subject</label>
                      <div className="input-border"></div>
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <div className="input-group textarea-group">
                      <FontAwesomeIcon
                        icon={faComment}
                        className="input-icon"
                      />
                      <textarea
                        name="message"
                        placeholder="Tell me about your project, ideas, or just say hello!"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setActiveInput('message')}
                        onBlur={() => setActiveInput('')}
                        className={activeInput === 'message' ? 'active' : ''}
                        rows="5"
                        required
                      />
                      <label>Message</label>
                      <div className="input-border"></div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`submit-btn ${formStatus}`}
                    disabled={formStatus === 'sending'}
                  >
                    <span className="btn-content">
                      {formStatus === 'idle' && (
                        <>
                          <FontAwesomeIcon icon={faPaperPlane} />
                          <span>Send Message</span>
                        </>
                      )}
                      {formStatus === 'sending' && (
                        <>
                          <FontAwesomeIcon
                            icon={faSpinner}
                            className="spinning"
                          />
                          <span>Sending...</span>
                        </>
                      )}
                      {formStatus === 'success' && (
                        <>
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span>Message Sent!</span>
                        </>
                      )}
                      {formStatus === 'error' && (
                        <>
                          <FontAwesomeIcon icon={faExclamationCircle} />
                          <span>Try Again</span>
                        </>
                      )}
                    </span>
                    <div className="btn-glow"></div>
                  </button>
                </form>

                {formStatus === 'success' && (
                  <div className="status-message success">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <div>
                      <strong>Message sent successfully!</strong>
                      <p>
                        I'll get back to you within 24 hours. Looking forward to
                        connecting!
                      </p>
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="status-message error">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    <div>
                      <strong>Oops! Something went wrong.</strong>
                      <p>Please try again or contact me directly via email.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Right Column - Info */}
            <section className="info-section">
              {/* Availability Card */}
              <div className="info-card availability-card">
                <div className="card-header">
                  <FontAwesomeIcon icon={faClock} className="card-icon" />
                  <h3>Availability</h3>
                </div>
                <div className="availability-list">
                  {availabilityHours.map((schedule, index) => (
                    <div key={index} className="availability-item">
                      <div className="day">{schedule.day}</div>
                      <div className="hours">{schedule.hours}</div>
                      <div className="timezone">{schedule.timezone}</div>
                    </div>
                  ))}
                </div>
                <div className="availability-note">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <span>Urgent projects? I'm flexible with timing!</span>
                </div>
              </div>

              {/* About Me Card */}
              <div className="info-card about-card">
                <div className="card-header">
                  <FontAwesomeIcon icon={faUser} className="card-icon" />
                  <h3>About Me</h3>
                </div>
                <div className="about-content">
                  <p>
                    I'm a passionate Software Engineer, Entrepreneur, and the
                    Founder & CEO of
                    <span className="tech-spot-brand"> Tech Spot</span>, a
                    growing mobile technology and accessories business in
                    Tissamaharama, Sri Lanka.
                  </p>
                  <p>
                    My journey blends technical expertise in full-stack
                    development with entrepreneurial vision. I develop custom
                    software solutions like our cloud-based POS and repair
                    tracking system while leading business strategy and
                    operations.
                  </p>
                  <p>
                    I'm committed to building technology that solves real
                    business problems and creating sustainable, scalable
                    business models.
                  </p>
                </div>
                <div className="skills-preview">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">DevOps</span>
                  <span className="skill-tag">AI/ML</span>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="info-card social-card">
                <div className="card-header">
                  <FontAwesomeIcon icon={faGlobe} className="card-icon" />
                  <h3>Connect With Me</h3>
                </div>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="social-link"
                      title={social.name}
                      style={{ '--social-color': social.color }}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Map Section */}
          <section className="map-section" id="map-section">
            <div className="section-header">
              <h2>Find Me Here</h2>
              <p>Located in the beautiful city of Tissamaharama, Sri Lanka</p>
            </div>

            <div className="map-container">
              <div className="map-info">
                <div className="location-card">
                  <div className="location-header">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="location-icon"
                    />
                    <div className="location-details">
                      <h3>Dilan Shanuka</h3>
                      <p>Tissamaharama, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="location-description">
                    <FontAwesomeIcon icon={faCoffee} />
                    <span>Come over for a cup of coffee! ☕</span>
                  </div>
                  <div className="location-coordinates">
                    <span>Lat: 6.2815°N</span>
                    <span>Lng: 81.3076°E</span>
                  </div>
                </div>
              </div>

              <div className="map-wrapper">
                <MapContainer
                  center={[6.2815, 81.3076]}
                  zoom={13}
                  className="leaflet-map"
                  scrollWheelZoom={true}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    maxZoom={19}
                  />
                  <Marker position={[6.2815, 81.3076]}>
                    <Popup className="custom-popup">
                      <div className="popup-content">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="popup-icon"
                        />
                        <div className="popup-text">
                          <strong>Dilan Shanuka</strong>
                          <p>Come over for a cup of coffee! ☕</p>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
