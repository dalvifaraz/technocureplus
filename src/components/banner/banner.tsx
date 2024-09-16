import React, { useEffect, useState } from 'react';
import './banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome to Tech Mart!',
      description: 'Your one-stop shop for all products and services.',
      buttonLabel: 'Shop Now',
      imgUrl: 'https://example.com/banner1.jpg', // Placeholder image URL
    },
    {
      title: 'Great Deals Await!',
      description: 'Discover amazing offers on the latest tech products.',
      buttonLabel: 'Discover Deals',
      imgUrl: 'https://example.com/banner2.jpg', // Placeholder image URL
    },
    {
      title: 'Premium Tech Services!',
      description: 'Get expert services and support for all your tech needs.',
      buttonLabel: 'Explore Services',
      imgUrl: 'https://example.com/banner3.jpg', // Placeholder image URL
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide effect with 2 seconds interval
  //    useEffect(() => {
  //     const timer = setInterval(() => {
  //       nextSlide();
  //     }, 2000);

  //     return () => clearInterval(timer);
  //   }, [currentSlide]);

  return (
    <section className='banner'>
      <div className='banner-carousel'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`banner-content ${
              index === currentSlide ? 'active' : ''
            }`}
            // style={{ backgroundImage: `url(${slide.imgUrl})` }}
          >
            <div className='banner-text'>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button>{slide.buttonLabel}</button>
            </div>
          </div>
        ))}
        <div className='arrow-container'>
          <button className='arrow prev' onClick={prevSlide}>
            &#10094;
          </button>
          <button className='arrow next' onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        {/* Navigation Dots */}
        <div className='dots-container'>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active-dot' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
