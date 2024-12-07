import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import jobImage1 from '../Images/OIP.jpg'; // Example images
import jobImage2 from '../Images/OIP.jpg';
import jobImage3 from '../Images/OIP.jpg';

const ITI = () => {
  const jobProfiles = [
    { 
      id: 1, 
      title: 'Software Engineer', 
      description: 'कुल पद: 1\n\nपद का नाम: Software Engineer\n\nयोग्यता: B.Tech, BCA\n...',
      salary: '₹20,000/month', 
      qualification: 'B.Tech, BCA', 
      image: jobImage1 // Unique image for this job
    },
    { 
      id: 2, 
      title: 'Data Analyst', 
      description: 'कुल पद: 1\n\nपद का नाम: Data Analyst\n\nयोग्यता: BCA, MCA\n...',
      salary: '₹15,000/month', 
      qualification: 'BCA, MCA', 
      image: jobImage2 // Unique image for this job
    },
    { 
      id: 3, 
      title: 'HR Coordinator', 
      description: 'कुल पद: 1\n\nपद का नाम: HR Coordinator\n\nयोग्यता: MBA, BCA\n...',
      salary: '₹18,000/month', 
      qualification: 'MBA, BCA', 
      image: jobImage3 // Unique image for this job
    },
    // Add more job profiles with their unique images here
  ];

  const jobsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobProfiles.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(jobProfiles.length / jobsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Job Listings</h2>

      <div className="row">
        {currentJobs.map((job) => (
          <div key={job.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={job.image} // Render the unique image for each job
                alt={job.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{job.title}</h5>
                <p className="card-text">{job.description.slice(0, 50)}...</p>
                <p className="text-muted">Salary: {job.salary}</p>
                <p className="text-muted">Qualification: {job.qualification}</p>
                
                {/* Link to the new page with job ID */}
                <Link to={`/job/${job.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`btn btn-outline-primary mx-1 ${currentPage === pageNumber ? 'active' : ''}`}
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ITI;
