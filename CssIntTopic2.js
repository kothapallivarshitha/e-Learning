import React from 'react';
import '../App.css'; // Reusing the styles from CssBasicTopic1
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssIntTopic2 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 6;
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
            <h1>CSS Borders</h1>
            <div className="content">
                <p>CSS borders define the boundary of an element. They can be set on all HTML elements except for table elements when `border-collapse` is `collapse`.</p>
                
                <p>You can control the width, style, and color of borders using the respective properties: `border-width`, `border-style`, and `border-color`.</p>

                <h2>Basic Syntax</h2>
                <div className="snippet">
                    <code>
                        selector &#123;<br />
                        &nbsp;&nbsp;border-property: value;<br />
                        &#125;
                    </code>
                </div>

                <p>The above syntax is generic. Replace `<strong>border-property</strong>` with the specific property name, like `border-width` or `border-color`.</p>

                <h2>Example</h2>
                <div className="snippet">
                    <code>
                        p &#123;<br />
                        &nbsp;&nbsp;border: 2px solid red;<br />
                        &#125;<br />
                        <br />
                        div &#123;<br />
                        &nbsp;&nbsp;border-top: 4px dashed blue;<br />
                        &#125;
                    </code>
                </div>
                
                <p>The first example sets a 2px wide solid red border around all paragraphs. The second example applies a 4px wide dashed blue border to the top side of all `div` elements.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssIntTopic2;
