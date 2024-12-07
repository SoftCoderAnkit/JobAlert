import React, { useState } from 'react';

const News = () => {
  // YouTube video links array
  const videoLinks = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/9bZkp7q19f0',
    'https://www.youtube.com/embed/LsoLEjrDogU',
    'https://www.youtube.com/embed/XtSt_1I8KNw',
    'https://www.youtube.com/embed/fKp-1I9fzoQ',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    'https://www.youtube.com/embed/OoWIof-2TVg',
    // Add more links as necessary
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 3;  // Number of videos per page

  // Calculate the indices of the videos to display on the current page
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videoLinks.slice(indexOfFirstVideo, indexOfLastVideo);

  // Total pages
  const totalPages = Math.ceil(videoLinks.length / videosPerPage);

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to generate page numbers with "..." for skipped pages
  const getPageNumbers = () => {
    const pageNumbers = [];
    const range = 3;  // Number of pages before/after current page to display
    let startPage = Math.max(1, currentPage - range);
    let endPage = Math.min(totalPages, currentPage + range);

    // Include first page if not in range
    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push('...');
    }

    // Add page numbers within range
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Include last page if not in range
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Latest News and Videos</h2>

      <div className="row">
        {/* Embed YouTube Videos using iframe */}
        {currentVideos.map((videoUrl, index) => (
          <div key={index} className="col-md-4 mb-4">
            <iframe
              width="100%"
              height="315"
              src={videoUrl}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        {/* Previous Button */}
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
        >
          Previous
        </button>

        {/* Page Number Buttons */}
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`btn btn-outline-primary mx-1 ${currentPage === page ? 'active' : ''}`}
            onClick={() => typeof page === 'number' && paginate(page)}
            disabled={typeof page === 'string'}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() =>
            paginate(currentPage < totalPages ? currentPage + 1 : currentPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
