import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p>
        Welcome to <strong>Hire Alert</strong>, your go-to destination for discovering the latest job opportunities and career resources designed to help you succeed in your professional journey.
      </p>

      <h4 className="mt-4">Who We Are</h4>
      <p>
        Hire Alert is focused on bringing you the most recent job listings, industry news, and valuable career insights across various fields. Our mission is to connect job seekers with employers seamlessly, making it easier for you to find roles that match your skills and ambitions.
      </p>

      <h4 className="mt-4">What We Offer</h4>
      <ul>
        <li><strong>Fresh Job Listings:</strong> We provide real-time updates on job openings from diverse industries so you can stay ahead in your job search.</li>
        <li><strong>Career Trends:</strong> Keep up with the latest trends, advice, and news in the job market, from salary reports to skill demands.</li>
        <li><strong>Job Search Tips:</strong> Access our resources for expert guidance on resume writing, interview preparation, and strategies to stand out to employers.</li>
        <li><strong>Industry Insights:</strong> Whether your passion is in tech, healthcare, finance, or any other field, our platform provides tailored insights to help you understand the demands and opportunities in your chosen career path.</li>
      </ul>

      <h4 className="mt-4">Our Mission</h4>
      <p>
        At Hire Alert, we aim to empower job seekers with reliable information and tools for career growth. We believe that informed decisions lead to successful careers, and we are here to support you in making those choices confidently.
      </p>

      <h4 className="mt-4">Why Choose Hire Alert</h4>
      <ul>
        <li><strong>Wide Coverage:</strong> We cover various industries and job roles, ensuring options for everyone.</li>
        <li><strong>Latest Information:</strong> Our team ensures that our listings and resources are always up to date.</li>
        <li><strong>Easy-to-Use Platform:</strong> We prioritize a smooth, user-friendly experience for your job search.</li>
        <li><strong>Expert Insights:</strong> Learn from industry professionals and gain tips to enhance your job-hunting journey.</li>
      </ul>

      <p className="mt-4">
        Thank you for choosing Hire Alert as your trusted career resource. We’re here to support you every step of the way. For any questions or additional help, feel free to reach out to us.
      </p>

      <p className="text-center mt-5"><em>Happy job hunting!</em></p>
    </div>
  );
};

export default About;
