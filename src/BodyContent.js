import React from 'react';
import './BodyContent.css';

const BodyContent = () => {
    return (
        <div className="blog-container">
            <div className="blog-content">
                <h1>Welcome to Our Blog</h1>
                <p>This is a sample blog page with React and CSS.</p>
                {/* Add more paragraphs for your blogs */}
            </div>
            <div className="image-frame">
                <img src="path_to_your_image" alt="Blog Cover" />
            </div>
        </div>
    );
}

export default BodyContent;
