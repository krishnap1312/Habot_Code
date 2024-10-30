import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/IZLp-TZyDkQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-container">
        <div className="header">
          <span className="buyer">Buyer</span>
          
          <span className="supplier">Supplier</span>
        </div>
        <ul className="features-list">
          <li><i className="bi bi-check-circle-fill"></i> Post your requirements.</li>
          <li><i className="bi bi-check-circle-fill"></i> Sit back for multiple suppliers to contact you.</li>
          <li><i className="bi bi-check-circle-fill"></i> Choose among the suppliers based on the ratings and reviews.</li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureSection;
