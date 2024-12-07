import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <h4 className="mb-3">Hire Alert</h4>
        <p>
          Thank you for choosing Hire Alert as your trusted career resource. We’re here to support you in your job search and career growth.
        </p>
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <a href="/about" className="text-white text-decoration-none">About Us</a>
          </li>
          <li className="list-inline-item">
            <a href="/jobs" className="text-white text-decoration-none">Jobs</a>
          </li>
          <li className="list-inline-item">
            <a href="/contact" className="text-white text-decoration-none">Contact</a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a>
          </li>
        </ul>
        <p className="small text-muted mb-0">&copy; {new Date().getFullYear()} Hire Alert. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
