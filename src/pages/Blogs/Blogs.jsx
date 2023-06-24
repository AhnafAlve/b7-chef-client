import React from 'react';
import html2pdf from 'html2pdf.js';

const Blogs = () => {
    const handleDownload = () => {
        const element = document.getElementById('blogs-container');
        html2pdf()
            .from(element)
            .save('blogs.pdf');
    };

    return (
        <div id="blogs-container" className="container w-75">
            <h1 className="mb-4 text-center text-success card bg-dark mt-3">BLOGS</h1>
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title text-warning">Question 1: Differences between uncontrolled and controlled components</h2>
                    <p className="card-text">
                        Uncontrolled components are handled by the DOM itself, while controlled components are managed by React and keep the form data in the component's state.
                    </p>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title text-warning">Question 2: How to validate React props using PropTypes</h2>
                    <p className="card-text">
                        PropTypes library can be used to validate React props. Define the propTypes property on the component and specify the expected types for each prop using PropTypes.
                    </p>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title text-warning">Question 3: Difference between Node.js and Express.js</h2>
                    <p className="card-text">
                        Node.js is a JavaScript runtime environment, while Express.js is a minimal and flexible web application framework that runs on top of Node.js. Express.js provides a set of features and tools to build web applications and APIs easily.
                    </p>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title text-warning">Question 4: What is a custom hook, and why will you create a custom hook?</h2>
                    <p className="card-text">
                        A custom hook is a JavaScript function that starts with the prefix 'use' and allows you to reuse logic across different components in React. Custom hooks are used to abstract away complex logic into a reusable function, improving code organization and reducing duplication.
                    </p>
                </div>
            </div>
            <button className="btn btn-success mt-1" onClick={handleDownload}>
                Download PDF
            </button>
        </div>
    );
};

export default Blogs;