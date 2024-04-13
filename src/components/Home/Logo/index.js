import { useRef } from 'react';
import LogoS from '../../../assets/images/download11-removebg-preview.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();
  const rightImageRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" ref={solidLogoRef} src={LogoS} />

      <div className="image-container">
        <img
          className="right-image"
          ref={rightImageRef}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiYyz3cmq7sEMssxzvrZjvktYnv6t25W8OA&usqp=CAU"
        />
      </div>

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          {/* SVG paths */}
        </g>
      </svg>
    </div>
  );
};

export default Logo;
