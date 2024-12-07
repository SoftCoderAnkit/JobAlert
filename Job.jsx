import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import jobImage from '../Images/OIP.jpg';
const Job = () => {
  const jobProfiles = [
    { 
      id: 1, 
      title: 'Software Engineer', 
      description: `
        कुल पद: 1
  
        पद का नाम: Software Engineer
  
        योग्यता: B.Tech, BCA
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹20,000/माह
      `, 
      salary: '₹ 20,000/month', 
      image: jobImage,
      qualification: 'B.Tech, BCA' 
    },
    { 
      id: 2, 
      title: 'Data Analyst', 
      description: `
        कुल पद: 1
  
        पद का नाम: Data Analyst
  
        योग्यता: BCA, MCA
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹15,000/माह
      `, 
      salary: '₹ 15,000/month', 
      qualification: 'BCA, MCA' 
    },
    { 
      id: 3, 
      title: 'HR Coordinator', 
      description: `
        कुल पद: 1
  
        पद का नाम: HR Coordinator
  
        योग्यता: MBA, BCA
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹18,000/माह
      `, 
      salary: '₹ 18,000/month', 
      qualification: 'MBA, BCA' 
    },
    { 
      id: 4, 
      title: 'Sales Executive', 
      description: `
        कुल पद: 1
  
        पद का नाम: Sales Executive
  
        योग्यता: 12th, Graduation
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹12,000/माह
      `, 
      salary: '₹ 12,000/month', 
      qualification: '12th, Graduation' 
    },
    { 
      id: 5, 
      title: 'Marketing Specialist', 
      description: `
        कुल पद: 1
  
        पद का नाम: Marketing Specialist
  
        योग्यता: Graduation
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹18,000/माह
      `, 
      salary: '₹ 18,000/month', 
      qualification: 'Graduation' 
    },
    { 
      id: 6, 
      title: 'BPO Executive', 
      description: `
        कुल पद: 1
  
        पद का नाम: BPO Executive
  
        योग्यता: 12th, Graduation
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹12,000/माह
      `, 
      salary: '₹ 12,000/month', 
      qualification: '12th, Graduation' 
    },
    { 
      id: 7, 
      title: 'Product Manager', 
      description: `
        कुल पद: 1
  
        पद का नाम: Product Manager
  
        योग्यता: B.Tech, MBA
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹25,000/माह
      `, 
      salary: '₹ 25,000/month', 
      qualification: 'B.Tech, MBA' 
    },
    { 
      id: 8, 
      title: 'Content Writer', 
      description: `
        कुल पद: 1
  
        पद का नाम: Content Writer
  
        योग्यता: Graduation
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹15,000/माह
      `, 
      salary: '₹ 15,000/month', 
      qualification: 'Graduation' 
    },
    { 
      id: 9, 
      title: 'Web Developer', 
      description: `
        कुल पद: 1
  
        पद का नाम: Web Developer
  
        योग्यता: B.Tech, BCA
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹22,000/माह
      `, 
      salary: '₹ 22,000/month', 
      qualification: 'B.Tech, BCA' 
    },
    { 
      id: 10, 
      title: 'Customer Support Executive', 
      description: `
        कुल पद: 1
  
        पद का नाम: Customer Support Executive
  
        योग्यता: 10th, 12th
  
        आवेदन प्रक्रिया: ऑनलाइन लिंक के माध्यम से
  
        आयु सीमा: न्यूनतम 18 वर्ष और अधिकतम 35 वर्ष
  
        शुल्क: सभी वर्गों के लिए आवेदन निशुल्क है।
  
        आवेदन प्रक्रिया:
        - रजिस्ट्रेशन: आवेदन करने के लिए सबसे पहले रजिस्टर करें।
        - दस्तावेज़ अपलोड करें: 10वीं की मार्कशीट और अन्य आवश्यक दस्तावेज अपलोड करें।
  
        चयन प्रक्रिया:
        इस भर्ती में चयन परीक्षा के आधार पर किया जाएगा।
  
        वेतन: ₹10,000/माह
      `, 
      salary: '₹ 10,000/month', 
      qualification: '10th, 12th' 
    }
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

export default Job;
