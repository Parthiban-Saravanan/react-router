// src/pages/AllCourses.jsx
import React from 'react';

const AllCourses = () => {
  return (
    <div className="page-container">
      <h1>All Courses</h1>
      <div className="cards-container">
        <div className="card">
          <img src="https://fixthephoto.com/images/content/full-stack-web-development.png" alt="All Course 1" />
          <h2>Full Stack Development</h2>
        </div>
        <div className="card">
          <img src="https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg" alt="All Course 2" />
          <h2>Data Science</h2>
        </div>
        <div className="card">
          <img src="https://www.leapit.co.uk/wp-content/uploads/2019/11/Cyber-Security-Importance-1080x675.jpeg" alt="All Course 3" />
          <h2>Cyber Security</h2>
        </div>
        <div className="card">
          <img src="https://www.colocationamerica.com/images/it-careers.jpg" alt="All Course 3" />
          <h2>Career</h2>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
