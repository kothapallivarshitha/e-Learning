import React from 'react';
import '../App.css'; // Reusing the styles from CssBasicTopic1
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssIntTopic1 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 5;
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
            <h1>CSS Backgrounds</h1>
            <div className="content">
                <p>CSS backgrounds allow web developers to set the background properties of elements. This encompasses not just color, but also images, gradients, and more. With CSS backgrounds, you can enhance the visual appeal of web pages.</p>
                
                <p>There are multiple properties related to backgrounds in CSS, such as `background-color`, `background-image`, `background-repeat`, `background-position`, and so forth.</p>

                <h2>Basic Syntax</h2>
                <div className="snippet">
                    <code>
                        selector &#123;<br />
                        &nbsp;&nbsp;background-property: value;<br />
                        &#125;
                    </code>
                </div>

                <p>The above syntax is generic. You'd replace `<strong>background-property</strong>` with the actual property name, like `background-color`.</p>

                <h2>Example</h2>
                <div className="snippet">
                    <code>
                        p &#123;<br />
                        &nbsp;&nbsp;background-color: #f2f2f2;<br />
                        &#125;<br />
                        <br />
                        div &#123;<br />
                        &nbsp;&nbsp;background-image: url('path-to-image.jpg');<br />
                        &nbsp;&nbsp;background-repeat: no-repeat;<br />
                        &nbsp;&nbsp;background-position: center;<br />
                        &#125;
                    </code>
                </div>
                
                <p>The first example sets the background color of all paragraphs to a light gray. The second applies a background image to all div elements, positioning it at the center and preventing it from repeating.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssIntTopic1;
