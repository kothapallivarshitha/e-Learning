import React from 'react';
import '../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssIntTopic4 = () => {
    const navigate = useNavigate();
const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 8;
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
        <h1>Styling Buttons with CSS</h1>
        <div className="content">
            <p>Buttons are a vital component in user interfaces. With CSS, you can style buttons to make them visually appealing and in line with the design language of your website or application.</p>
            
            <p>You can modify various properties of buttons, including their color, padding, borders, hover effects, and more.</p>

            <h2>Basic Syntax</h2>
            <div className="snippet">
                <code>
                    button, .btn-class &#123;<br />
                    &nbsp;&nbsp;background-color: value;<br />
                    &nbsp;&nbsp;padding: value;<br />
                    &nbsp;&nbsp;border: value;<br />
                    &nbsp;&nbsp;border-radius: value;<br />
                    &nbsp;&nbsp;transition: property duration;<br />
                    &#125;
                </code>
            </div>

            <p>Use the appropriate `<strong>value</strong>` for each property based on your design requirements. The properties above are just a few examples of what you can modify for buttons.</p>

            <h2>Example</h2>
            <div className="snippet">
                <code>
                    .myButton &#123;<br />
                    &nbsp;&nbsp;background-color: #4CAF50;<br />
                    &nbsp;&nbsp;color: white;<br />
                    &nbsp;&nbsp;padding: 10px 20px;<br />
                    &nbsp;&nbsp;border: none;<br />
                    &nbsp;&nbsp;border-radius: 4px;<br />
                    &nbsp;&nbsp;cursor: pointer;<br />
                    &#125;<br />
                    <br />
                    .myButton:hover &#123;<br />
                    &nbsp;&nbsp;background-color: #45a049;<br />
                    &#125;
                </code>
            </div>
            
            <p>This example illustrates a button with a green background and white text. When hovered, the button's background color becomes a shade darker.</p>
        </div>
        <button onClick={handleSubmit} className="completeButton">Complete</button>
    </div>
);
}
export default CssIntTopic4;    