import { projectLinks, undergradBadges } from '../../constants/constants';
import Badges from '../badges/Badges';
import React from 'react';
import '../../common/main.css';
import { eduBadges } from '../../constants/constants';

const EducationView = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <h3>M.S. in Information Systems, Northeastern University</h3>
      <p>
        I got an opportunity to work on various technologies and with people
        from different backgrounds. Here are links to more interesting projects
        I did-
      </p>
      <ul>
        {projectLinks.map((link, index) => (
          <li key={`li-` + index}>
            <a
              href={link.value}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {`${link.key}, `}
            </a>
          </li>
        ))}
      </ul>
      <Badges badges={eduBadges} />
      <hr />
      <h3>B. Tech in Electrical & Electronics Engineering, GGSIP University</h3>
      <p>
        During this time, I learned about Object Oriented design and worked on
        my coding skills along with mastering on data structures and Algorithms.
      </p>
      <Badges badges={undergradBadges} />
    </div>
  );
};

export default EducationView;
