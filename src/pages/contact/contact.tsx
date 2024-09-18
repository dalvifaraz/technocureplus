import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import './contact.css';
import { faqs } from './contact-mock-data';

const ContactUs = () => {
  return (
    <div className='contact-us-container'>
      <h2>Contact Us</h2>
      <div style={{ display: 'flex' }}>
        <div className='contact-info'>
          <h3>Reach us at</h3>
          <div className='info-section'>
            <FaPhone className='icon' />
            <p>Call Us: +1-800-TECH-CART</p>
          </div>
          <div className='info-section'>
            <FaEnvelope className='icon' />
            <p>Email: support@techcart.com</p>
          </div>
          <div className='info-section'>
            <FaMapMarkerAlt className='icon' />
            <p>123 Tech Avenue, Silicon Valley, CA</p>
          </div>
        </div>

        <div className='contact-form'>
          <h3>Send Us a Message</h3>
          <form>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your name...'
              required
            />

            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your email...'
              required
            />

            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              placeholder='Write your message...'
              required
            ></textarea>

            <button type='submit'>Submit</button>
          </form>
        </div>
        <div style={{ flex: 0.5, display: 'flex', flexDirection: 'column' }}>
          <div className='working-hours'>
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9 AM - 6 PM</p>
            <p>Saturday: 10 AM - 4 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className='social-media'>
            <h3>Follow Us</h3>
            <div className='icons'>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebook />
              </a>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noreferrer'
              >
                <FaTwitter />
              </a>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className='faq-section'>
          <h3>Frequently Asked Questions</h3>
          <div className='faq-item'>
            {faqs.map((item, index) => {
              return (
                <>
                  <h4>{index + 1}.) {item.question}</h4>
                  <p>{item.answer}</p>
                </>
              );
            })}
          </div>
        </div>

        <div className='map-container'>
          <h3>Our Location</h3>
          {/* You can integrate Google Maps iframe here */}
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.907964624274!2d-122.08385168454415!3d37.38747497983257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb1b1b1b1b1b1%3A0x7b1d1c1a8b1c1b1!2sSilicon+Valley!5e0!3m2!1sen!2sus!4v1634111111111!5m2!1sen!2sus'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            title='Google Maps'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
