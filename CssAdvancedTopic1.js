import React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssAdvancedTopic1 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 9;
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
            <h1>CSS Animations</h1>
            <div className="content">
                <p>CSS animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components: a style describing the animation and a set of keyframes indicating the start and end states of the animation's style, as well as possible intermediate waypoints.</p>
                
                <h2>Basic Syntax</h2>
                <div className="snippet">
                    <code>
                        @keyframes animationname &#123;<br />
                        &nbsp;&nbsp;0% &#123;property: value;&#125;<br />
                        &nbsp;&nbsp;50% &#123;property: value;&#125;<br />
                        &nbsp;&nbsp;100% &#123;property: value;&#125;<br />
                        &#125;
                    </code>
                </div>

                <p>You can define your own names for the animations. The `0%` is the beginning of the animation, `50%` is midway, and `100%` is the end. You can include as many keyframes as you like.</p>

                <h2>Example</h2>
                <div className="snippet">
                    <code>
                        @keyframes example &#123;<br />
                        &nbsp;&nbsp;0% &#123; background-color: red; &#125;<br />
                        &nbsp;&nbsp;50% &#123; background-color: yellow; &#125;<br />
                        &nbsp;&nbsp;100% &#123; background-color: green; &#125;<br />
                        &#125;<br />
                        <br />
                        div &#123;<br />
                        &nbsp;&nbsp;width: 100px;<br />
                        &nbsp;&nbsp;height: 100px;<br />
                        &nbsp;&nbsp;background-color: red;<br />
                        &nbsp;&nbsp;animation: example 5s infinite;<br />
                        &#125;
                    </code>
                </div>
                
                <p>In the example above, the animation will change the background color of a div element over a duration of 5 seconds, and it will keep repeating the animation indefinitely.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssAdvancedTopic1;
