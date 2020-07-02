import React from 'react';

const Summary = ({ summary }) => {
  return (
    <div className="summary">
      <h1>{summary.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: summary.html }}></div>
    </div>
  );
};

export default Summary;
