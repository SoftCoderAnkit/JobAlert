import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jobImage from '../Images/OIP.jpg'; // Importing the image from the src/Images folder

const Home = () => {
  const jobProfiles = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'A software engineer develops, designs, and maintains software applications.',
      salary: '₹ 20,000/month',
      experience: 'Fresher/Experienced',
      qualification: 'B.Tech, BCA',
      image: jobImage,
      color: 'primary',
    },
    {
      id: 2,
      title: 'Data Analyst',
      description: 'A data analyst interprets data to help companies make informed business decisions.',
      salary: '₹ 15,000/month',
      experience: 'Experienced',
      qualification: 'BCA, MCA',
      image: jobImage,
      color: 'success',
    },
    {
      id: 3,
      title: 'Customer Support Executive',
      description: 'A customer support executive handles customer queries and provides solutions.',
      salary: '₹ 12,000/month',
      experience: 'Fresher',
      qualification: '10th, 12th',
      image: jobImage,
      color: 'warning',
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      description: 'A marketing specialist creates strategies to promote products or services.',
      salary: '₹ 18,000/month',
      experience: 'Fresher/Experienced',
      qualification: '12th, Graduation',
      image: jobImage,
      color: 'info',
    },
    {
      id: 5,
      title: 'Sales Associate',
      description: 'A sales associate promotes and sells products to customers.',
      salary: '₹ 10,000/month',
      experience: 'Fresher',
      qualification: '10th, 12th',
      image: jobImage,
      color: 'danger',
    },
    {
      id: 6,
      title: 'BPO Executive',
      description: 'A BPO executive handles inbound/outbound calls for customer service.',
      salary: '₹ 12,000/month',
      experience: 'Fresher',
      qualification: '12th, Graduation',
      image: jobImage,
      color: 'secondary',
    },
    {
      id: 7,
      title: 'HR Coordinator',
      description: 'An HR coordinator manages hiring, onboarding, and employee relations.',
      salary: '₹ 18,000/month',
      experience: 'Experienced',
      qualification: 'BCA, MBA',
      image: jobImage,
      color: 'primary',
    },
    {
      id: 8,
      title: 'Content Writer',
      description: 'A content writer creates written content for websites, blogs, and marketing.',
      salary: '₹ 12,000/month',
      experience: 'Fresher',
      qualification: '12th, Graduation',
      image: jobImage,
      color: 'success',
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Available Job Profiles</h2>
      <div className="row">
        {jobProfiles.map((profile) => (
          <div key={profile.id} className="col-md-3 mb-4">
            <div className={`card border-${profile.color} shadow-sm`}>
              <img
                src={profile.image}
                alt={profile.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className={`card-title text-${profile.color}`}>{profile.title}</h5>
                <p className="card-text">{profile.description}</p>
                <p className="text-muted">Salary: {profile.salary}</p>
                <p className="text-muted">Experience: {profile.experience}</p>
                <p className="text-muted">Qualification: {profile.qualification}</p>
                <a href="/JOB" className={`btn btn-outline-${profile.color}`}>
                  Read More...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="contact" className="text-center mt-5">
        <h4 className="text-danger">Contact for More Details</h4>
        <p className="text-muted">For inquiries, please contact us:</p>
        <p className="font-weight-bold">Phone: +91 8789XXXXXX</p>
        <p className="font-weight-bold">
          Email: <a href="mailto:Hirealert234@gmail.com">Hirealert234@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
