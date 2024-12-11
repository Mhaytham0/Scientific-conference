import React from 'react';
import './main-pic.css'; // Optional: For styling

function PictureComponent({ src, alt, width, height, style }) {
  return (
    <div className="picture-container" style={{ textAlign: 'center' }}>
      <img 
        src={src} 
        alt={alt} 
        style={{ 
          width: width || 'auto', 
          height: height || 'auto', 
          borderRadius: '8px', 
          ...style 
        }} 
      />
    </div>
  );
}

export default PictureComponent;
