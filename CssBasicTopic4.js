import React from 'react';
import '../App.css'; // Assuming we are reusing the styles from CssBasicTopic1
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssBasicTopic4 = () => {
const navigate = useNavigate();
const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 4;
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
            <h1>External CSS</h1>
            <div className="content">
                <p>External CSS refers to styles that are written in a separate file and then linked to an HTML document. This approach allows for maximum reusability as one CSS file can be linked to multiple HTML pages, ensuring a consistent look and feel across a website or web application.</p>
                
                <p>Using external stylesheets is considered a best practice in web development because it separates content (HTML) from presentation (CSS), promoting maintainability and scalability.</p>

                <h2>Basic Syntax</h2>
                <div className="snippet">
                    <code>
                        &lt;link rel="stylesheet" type="text/css" href="path-to-css-file.css"&gt;
                    </code>
                </div>

                <p>This `<strong>link</strong>` tag is typically placed inside the `<strong>&lt;head&gt;</strong>` section of an HTML document. The `href` attribute specifies the path to the CSS file.</p>

                <h2>Example</h2>
                <div className="snippet">
                    <code>
                        &lt;head&gt;<br />
                        &nbsp;&nbsp;&lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;<br />
                        &lt;/head&gt;<br />
                        &lt;body&gt;<br />
                        &nbsp;&nbsp;&lt;p&gt;This text will be styled according to styles.css.&lt;/p&gt;<br />
                        &lt;/body&gt;
                    </code>
                </div>
                
                <p>In the example above, the `styles.css` file contains the styling rules that will be applied to the HTML content, ensuring consistency across all pages that link to it.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssBasicTopic4;
