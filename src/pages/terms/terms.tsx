import React from 'react';
import { termsOfServiceData } from './terms-mock-data';
import './terms.css'

const TermsOfService = () => {
  return (
    <div className="terms-of-service-container">
      <h1>Terms of Service</h1>
      <p>Effective Date: {new Date().toDateString()}</p>

      {termsOfServiceData.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </div>
  );
};

export default TermsOfService;
