import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuQuestion() {
  const [activeLink, setActiveLink] = useState('recent');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      <div className="middle-nav-menu">
        <ul>
          <li>
            <Link
              to="/"
              className={`menu-link ${activeLink === 'recent' ? 'active' : ''}`}
              onClick={() => handleLinkClick('recent')}
            >
              Recent Questions
            </Link>
          </li>
          <li>
            <Link
              to="/mquestions"
              className={`menu-link ${activeLink === 'visited' ? 'active' : ''}`}
              onClick={() => handleLinkClick('visited')}
            >
              Most Visited
            </Link>
          </li>
          <li>
            <Link
              to="/answered"
              className={`menu-link ${activeLink === 'answered' ? 'active' : ''}`}
              onClick={() => handleLinkClick('answered')}
            >
              Most Answered
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuQuestion;
