import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function CssCourse() {
  const navigate = useNavigate();
    const handleLinkClick = async (count,next) => {
    // You can perform your database call or any other action here
    // console.log(`Clicked on topic: ${count} (ID: 1)`);

    try {
        // Assuming user_id and course_id are defined somewhere in your component or can be fetched
        const user_id = sessionStorage.getItem("userId");
        const course_id = 3;

        const response = await axios.get('http://localhost:3001/get_relation', {
            params: {
                user_id,
                course_id,
                count
            }
        });

        if (response.data.success) {
            console.log('Data fetched:', response.data.data);
            navigate(next);
        } else {
            // console.log('Error fetching data:', response.data.message);
            alert("Complete previous levels")
            navigate("/css-course")
        }
    } catch (error) {
        console.error('API call failed:', error);
    }
};
  return (
    <div className="course-container">
      <h1 className="course-title">Css Course</h1>
      
      {/* Basic Level */}
      <div className="level-container">
        <h2 className="level-title">Basic</h2>
        <div className="topic-buttons">
          <Link to="/css-basic-topic-1" className="topic-link">What is CSS</Link>
          <Link to="/css-basic-topic-2" className="topic-link">Inline CSS</Link>
          <Link to="/css-basic-topic-3" className="topic-link">Internal CSS</Link>
          <Link to="/css-basic-topic-4" className="topic-link">External CSS</Link>
        </div>
      </div>

      {/* Intermediate Level */}
      <div className="level-container">
        <h2 className="level-title">Intermediate</h2>
        <div className="topic-buttons">
          <Link
            to="/css-intermediate-topic-1"
            className="topic-link"
            onClick={() => handleLinkClick(3,"/css-intermediate-topic-1")}
          >
            Background
          </Link>
          <Link
            to="/css-intermediate-topic-2"
            className="topic-link"
            onClick={() => handleLinkClick(3,"/css-intermediate-topic-2")}
          >
            Border
          </Link>
          <Link
            to="/css-intermediate-topic-3"
            className="topic-link"
            onClick={() => handleLinkClick(3,"/css-intermediate-topic-3")}
          >
            Cursor
          </Link>
          <Link
            to="/css-intermediate-topic-4"
            className="topic-link"
            onClick={() => handleLinkClick(3,"/css-intermediate-topic-4")}
          >
            Buttons
          </Link>
        </div>
      </div>

      {/* Advanced Level */}
      <div className="level-container">
        <h2 className="level-title">Advanced</h2>
        <div className="topic-buttons">
          <Link
            to="/css-advanced-topic-1"
            className="topic-link"
            onClick={() => handleLinkClick(7,"/css-advanced-topic-1")}
          >
            Animations
          </Link>
          <Link
            to="/css-advanced-topic-2"
            className="topic-link"
            onClick={() => handleLinkClick(7,"/css-advanced-topic-2")}
          >
            Gradient
          </Link>
          <Link
            to="/css-advanced-topic-3"
            className="topic-link"
            onClick={() => handleLinkClick(7,"/css-advanced-topic-3")}
          >
            Bootstrap
          </Link>
          <Link
            to="/css-advanced-topic-4"
            className="topic-link"
            onClick={() => handleLinkClick(7,"/css-advanced-topic-4")}
          >
            Flexbox
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CssCourse;
