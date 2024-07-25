import React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CssAdvancedTopic4 = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
    const userId = sessionStorage.getItem("user_id"); // replace with the appropriate user ID
    const courseId = 3; // replace with the appropriate course ID
    const count = 12;
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
            <h1>Flexbox</h1>
            <div className="content">
                <p>Flexbox, short for the Flexible Box Layout, is a layout model in CSS that allows items in a container to be arranged dynamically to accommodate different screen sizes and display devices. It's a one-dimensional layout method for laying out items in rows or columns.</p>
                
                <p>Flexbox makes it easier to design complex layout structures with a more efficient and predictable way than traditional models, especially when it comes to distributing space and aligning items in complex layouts and when the sizes of your items are unknown or dynamic.</p>

                <h2>Getting Started</h2>
                <div className="snippet">
                    <code>
                        .container &#123;<br />
                        &nbsp;&nbsp;display: flex;<br />
                        &#125;
                    </code>
                </div>

                <p>To start using Flexbox, you need to define a container as `display: flex;`. Items directly inside this container will become flex items.</p>

                <h2>Properties</h2>
                <div className="snippet">
                    <code>
                        .container &#123;<br />
                        &nbsp;&nbsp;flex-direction: row; {/* or column, row-reverse, column-reverse */}<br />
                        &nbsp;&nbsp;justify-content: center; {/* aligns items on the main axis */}<br />
                        &nbsp;&nbsp;align-items: center; {/* aligns items on the cross axis */}<br />
                        &#125;<br />
                        <br />
                        .item &#123;<br />
                        &nbsp;&nbsp;flex-grow: 1; {/* allows the item to grow */}<br />
                        &#125;
                    </code>
                </div>
                
                <p>The above properties demonstrate basic flex container and flex item properties. `flex-direction` defines the main axis, `justify-content` and `align-items` allow you to align items on the main and cross axes respectively, and `flex-grow` allows a flex item to grow if necessary.</p>
            </div>
            <button onClick={handleSubmit} className="completeButton">Complete</button>
        </div>
    );
}

export default CssAdvancedTopic4;
