import React from 'react';
import { privacyPolicyData } from './privacy-mock-data';
import './privacy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>Effective Date: {new Date().toDateString()}</p>

      {privacyPolicyData.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          {section.list && (
            <ul>
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
