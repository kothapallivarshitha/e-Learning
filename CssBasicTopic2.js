import React from 'react';
import '../App.css'; // Reusing the styles from CssBasicTopic1
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssBasicTopic2 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 2;
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
            <h1>Inline CSS</h1>
            <div className="content">
                <p>Inline CSS refers to applying styles directly on individual HTML elements using the `style` attribute. This method can be useful for quick, one-off styling but is generally not recommended for larger projects as it can become cumbersome and harder to manage.</p>
                
                <p>Using inline styles mixes content with presentation, potentially making the HTML structure less readable and less maintainable.</p>

                <h2>Basic Syntax</h2>
                <div className="snippet">
                    <code>
                        &lt;element style="property: value;"&gt; ... &lt;/element&gt;
                    </code>
                </div>

                <p>In the syntax above, `<strong>element</strong>` is an HTML tag, `<strong>property</strong>` is the CSS property you want to change, and `<strong>value</strong>` is the value for that property.</p>

                <h2>Example</h2>
                <div className="snippet">
                    <code>
                        &lt;p style="color: blue; font-size: 16px;"&gt; This is an inline styled text. &lt;/p&gt;
                    </code>
                </div>
                
                <p>The above example will display a paragraph with blue-colored text and a font size of 16 pixels.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssBasicTopic2;
