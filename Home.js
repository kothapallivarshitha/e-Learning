import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        sessionStorage.removeItem('user_id');
        // Add any necessary logout logic here, e.g. token invalidation
        navigate('/login');
    }
    const handleCourseCssClick = () => {
        const user_id = sessionStorage.getItem('user_id');
        const data = {
            user_id: user_id,
            course_id: 1,
            count: 0, // You can set the initial count as needed
        };

        // Make a POST request to insert data into the relation_users_courses table
        axios.post('http://localhost:3001/insert_relation', data)
            .then(response => {
                const responseData = response.data;
                if (responseData.success || responseData.message === "Combination of user_id and course_id already exists") {
                    console.log('Data inserted successfully');
                    // Once data is inserted, navigate to the course
                    navigate("/css-course");
                } else {
                    console.error('Data insertion failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="home-container">
            <div className="logout-btn-container">
                <button onClick={logoutHandler} className="logout-btn">Logout</button>
            </div>

            <div className="courses-container">
                <button onClick={() => handleCourseCssClick()} className="course-btn">CSS</button>
            </div>
            <div className="courses-container">
                <button className="course-btn">JAVA SCRIPT</button>
            </div>
        </div>
    );
}

export default Home;
