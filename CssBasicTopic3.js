import React from 'react';
import '../App.css'; // Reusing the styles from CssBasicTopic1
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssBasicTopic3 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 3;
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
            <h1>Internal CSS</h1>
            <div className="content">
                <p>Internal CSS, also known as "embedded CSS", refers to CSS styles that are embedded within an HTML document. These styles are included within the &lt;style&gt; tags in the &lt;head&gt; section of the document.</p>
                
                <p>While they are more centralized than inline styles, internal styles still mix content with presentation, making them less modular than external stylesheets. They are suitable for single-page applications or pages with unique styles.</p>

                <h2>Basic Syntax</h2>
                <div className="snippet">
                    <code>
                        &lt;head&gt;<br />
                        &nbsp;&nbsp;&lt;style&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;selector &#123; property: value; &#125;<br />
                        &nbsp;&nbsp;&lt;/style&gt;<br />
                        &lt;/head&gt;
                    </code>
                </div>

                <p>In the syntax above, the <strong>selector</strong> is the HTML element you want to style, <strong>property</strong> is the CSS property, and <strong>value</strong> is the desired setting for that property.</p>

                <h2>Example</h2>
                <div className="snippet">
                    <code>
                        &lt;head&gt;<br />
                        &nbsp;&nbsp;&lt;style&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;p &#123; color: red; &#125;<br />
                        &nbsp;&nbsp;&lt;/style&gt;<br />
                        &lt;/head&gt;<br />
                        &lt;body&gt;<br />
                        &nbsp;&nbsp;&lt;p&gt;This text will be red.&lt;/p&gt;<br />
                        &lt;/body&gt;
                    </code>
                </div>
                
                <p>The above example sets the text color of all paragraphs in the document to red using internal CSS.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssBasicTopic3;
