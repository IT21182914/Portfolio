import React from 'react';
import './ResponsiveImage.scss';

const ResponsiveImage = ({
  src,
  alt,
  className = '',
  aspectRatio = '16/9',
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  srcSet,
  ...props
}) => {
  return (
    <div
      className={`responsive-image-container ${className}`}
      style={{ aspectRatio }}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        sizes={sizes}
        srcSet={srcSet}
        className="responsive-image"
        {...props}
      />
    </div>
  );
};

export default ResponsiveImage;
