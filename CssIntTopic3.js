import React from 'react';
import '../App.css'; // Reusing the styles from CssBasicTopic1
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssIntTopic3 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 7;
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
            <h1>CSS Cursors</h1>
            <div className="content">
                <p>The CSS cursor property specifies the type of cursor to be displayed when you hover over an element. This can be used to give hints to the user about what type of action they can perform.</p>
                
                <p>There are various predefined cursor values such as `pointer`, `wait`, `move`, and `text` among others.</p>

                <h2>Basic Syntax</h2>
                <div className="snippet">
                    <code>
                        selector &#123;<br />
                        &nbsp;&nbsp;cursor: value;<br />
                        &#125;
                    </code>
                </div>

                <p>Replace the `<strong>value</strong>` in the syntax with the desired cursor type, like `pointer` for link-like elements or `wait` for a busy cursor.</p>

                <h2>Example</h2>
                <div className="snippet">
                    <code>
                        button &#123;<br />
                        &nbsp;&nbsp;cursor: pointer;<br />
                        &#125;<br />
                        <br />
                        .loading &#123;<br />
                        &nbsp;&nbsp;cursor: wait;<br />
                        &#125;
                    </code>
                </div>
                
                <p>The first example changes the cursor to a hand (pointer) when hovering over a button, which is usually used for clickable items. The second example sets the cursor to a wait (hourglass or spinning circle) for elements with the `loading` class, indicating that some process is ongoing.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssIntTopic3;
