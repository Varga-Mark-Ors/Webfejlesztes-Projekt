import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Optional: Add custom styles if needed

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-link">Go Back to Home</Link>
    </div>
  );
}

export default NotFound;
