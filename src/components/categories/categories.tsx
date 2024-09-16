import React, { useState, useEffect, useRef } from 'react';
import './categories.css';

interface Category {
  title: string;
  shortDesc: string;
  longDesc: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      title: 'Server Setup & Configuration',
      shortDesc: 'Professional server installation and configuration.',
      longDesc:
        'Get your servers installed, configured, and optimized for performance and security.',
    },
    {
      title: 'Custom Web Development',
      shortDesc: 'Build responsive, fast websites.',
      longDesc:
        'Full-stack development services tailored to your needs, including front-end and back-end solutions.',
    },
    {
      title: 'Backend Development',
      shortDesc: 'Robust backend solutions.',
      longDesc:
        'Design and implement APIs, databases, and server-side logic to handle complex operations.',
    },
    {
      title: 'PC Accessories & Hardware',
      shortDesc: 'Upgrade your workspace.',
      longDesc:
        'We offer a wide range of PC accessories, from monitors to ergonomic setups and other peripherals.',
    },
    {
      title: 'Advanced Security Services',
      shortDesc: 'Protect your data and systems.',
      longDesc:
        'Comprehensive security solutions to safeguard your IT infrastructure and sensitive data.',
    },
    {
      title: 'Software Installation & Support',
      shortDesc: 'Seamless software management.',
      longDesc:
        'Installation, troubleshooting, and maintenance for your business-critical software applications.',
    },
    {
      title: 'Mobile App Development',
      shortDesc: 'Build powerful mobile apps.',
      longDesc:
        'Custom Android and iOS app development services to meet your business and user needs.',
    },
    {
      title: 'Cloud Storage Solutions',
      shortDesc: 'Store your data securely in the cloud.',
      longDesc:
        'Reliable cloud storage and backup services, ensuring data accessibility and security.',
    },
    {
      title: 'Data Backup & Recovery',
      shortDesc: 'Data protection and recovery solutions.',
      longDesc:
        'Secure your data with our advanced backup and recovery services.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = 300;
        setVisibleItems(Math.floor(containerWidth / itemWidth));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + visibleItems) % categories.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - visibleItems + categories.length) % categories.length
    );
  };

  return (
    <section className='categories-section'>
      <h2>Our Services</h2>
      <div className='categories-carousel'>
        <button className='category-arrow-left' onClick={prevSlide}>
          &#10094;
        </button>
        <div className='category-container' ref={containerRef}>
          {categories
            .slice(currentIndex, currentIndex + visibleItems)
            .map((category, index) => (
              <div className='category-card' key={index}>
                <h3>{category.title}</h3>
                <p className='short-desc'>{category.shortDesc}</p>
                <div className='long-desc'>
                  <p>{category.longDesc}</p>
                </div>
              </div>
            ))}
        </div>
        <button className='category-arrow-right' onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Categories;
