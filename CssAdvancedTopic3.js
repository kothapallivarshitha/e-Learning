import React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssAdvancedTopic3 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 11;
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
            <h1>Bootstrap</h1>
            <div className="content">
                <p>Bootstrap is a popular, open-source CSS framework that helps in designing responsive and mobile-first websites. It contains HTML, CSS, and JavaScript-based design templates for typography, forms, buttons, tables, navigation, modals, and many other web components.</p>
                
                <p>By using Bootstrap, web developers can save a lot of time and effort in building consistent and responsive layouts without having to start from scratch.</p>

                <h2>Getting Started</h2>
                <div className="snippet">
                    <code>
                        &lt;!-- CSS --&gt;<br />
                        &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"&gt;<br />
                        <br />
                        &lt;!-- JS and Popper.js --&gt;<br />
                        &lt;script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"&gt;&lt;/script&gt;<br />
                        &lt;script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"&gt;&lt;/script&gt;<br />
                        &lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"&gt;&lt;/script&gt;
                    </code>
                </div>

                <p>By including the above links in the head of your HTML document, you can start using Bootstrap components right away. Ensure you include the CSS link for styles and JS links for interactive components like modals or dropdowns.</p>

                <h2>Example</h2>
                <div className="snippet">
                    <code>
                        &lt;button class="btn btn-primary"&gt;Click Me!&lt;/button&gt;
                    </code>
                </div>
                
                <p>In the example above, the `btn` class is a basic button style from Bootstrap, and `btn-primary` is a modifier class that styles the button with a primary blue color.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssAdvancedTopic3;
