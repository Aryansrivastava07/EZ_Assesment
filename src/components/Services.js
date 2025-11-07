import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Film Production',
      image: 'https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=500&fit=crop'
    },
    {
      title: 'Branding',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop',
      highlight: true
    },
    {
      title: 'Art Curation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">The storyboard reveals the breadth of our craft.</h2>
          <div className="brush-stroke">
            <svg viewBox="0 0 800 30" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 15 Q 200 5, 400 15 T 800 15" 
                    stroke="#2c5282" 
                    strokeWidth="8" 
                    fill="none" 
                    strokeLinecap="round"
                    opacity="0.7"/>
            </svg>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.highlight ? 'service-card-highlight' : ''}`}>
              <div className="tape tape-left"></div>
              <div className="tape tape-right"></div>
              <div className="polaroid">
                <div className="polaroid-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="polaroid-caption">
                  <p>{service.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="decorative-border-bottom"></div>
    </section>
  );
};

export default Services;
