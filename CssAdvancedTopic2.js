import React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssAdvancedTopic2 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count= 10;
    axios.put('http://localhost:3001/update_relation', {
        user_id: userId,
        course_id: courseId,
        count: count
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
            <h1>CSS Gradients</h1>
            <div className="content">
                <p>CSS gradients allow you to display smooth transitions between two or more specified colors. Unlike other CSS styles that accept only flat colors, gradients can be used in most places where image URLs or colors are accepted. There are two types of gradients in CSS: linear and radial.</p>
                
                <h2>Linear Gradient</h2>
                <div className="snippet">
                    <code>
                        background: linear-gradient(direction, color-stop1, color-stop2);
                    </code>
                </div>

                <p>The direction can be either a predefined keyword (like `to bottom`, `to top`, `to left`, `to right`, etc.) or an angle (like `45deg`). The color stops are the colors you want to render smoothly into each other.</p>

                <h2>Radial Gradient</h2>
                <div className="snippet">
                    <code>
                        background: radial-gradient(shape size at position, color-stop1, color-stop2);
                    </code>
                </div>
                
                <p>For the radial gradient, the shape can be either `circle` or `ellipse`. The size can be farthest-corner, closest-side, closest-corner, etc. The position is two values that define the starting point of the gradient (by default, it's the center of the element).</p>

                <h2>Example</h2>
                <div className="snippet">
                    <code>
                        .linear-gradient &#123;<br />
                        &nbsp;&nbsp;background: linear-gradient(to bottom, red, yellow);<br />
                        &#125;<br />
                        <br />
                        .radial-gradient &#123;<br />
                        &nbsp;&nbsp;background: radial-gradient(circle, red, yellow);<br />
                        &#125;
                    </code>
                </div>
                
                <p>In the above example, the `.linear-gradient` class will give a background that transitions from red at the top to yellow at the bottom, while the `.radial-gradient` class will give a circular gradient that transitions from red in the center to yellow at the edges.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssAdvancedTopic2;
