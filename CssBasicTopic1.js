import React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssBasicTopic1 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 1;
    axios.put('http://localhost:3001/update_relation', {
        user_id: userId,
        course_id: courseId,
        count:count
    })
    .then(response => {
        const data = response.data;
        if(data.success) {
            console.log('Topic Completed and Count Updated:', data.message);
            navigate("/css-course")
        } else {
            console.log('Failed to Update Count:', data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

    return (
        <div className="cssBasicTopic">
            <h1>About CSS</h1>
            <div className="content">
                <p>CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. It primarily separates the content of a document from its presentation.</p>
                
                <p>CSS allows web designers and developers to create visually engaging web pages with less code. It reduces the repetition of styles throughout a website, ensuring consistency.</p>

                <h2>Basic Syntax</h2>
                <div className="snippet">
                    <pre>
                        <code>
                            {`selector {
  property: value;
}`}
                        </code>
                    </pre>
                </div>

                <p>The <strong>selector</strong> points to the HTML element you want to style. The <strong>property</strong> is the style attribute you want to change, and each property has a <strong>value</strong>.</p>

                <h2>Example</h2>
                <div className="snippet">
                    <pre>
                        <code>
                            {`p {
  color: red;
  text-align: center;
}`}
                        </code>
                    </pre>
                </div>
                
                <p>This CSS code will set the text color of all paragraphs to red and center-align the text inside them.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssBasicTopic1;
