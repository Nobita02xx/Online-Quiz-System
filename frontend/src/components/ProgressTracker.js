import React from 'react';

const ProgressTracker = ({ completed, total }) => {
  return (
    <div>
      <p>Progress: {completed}/{total}</p>
    </div>
  );
};

export default ProgressTracker;
