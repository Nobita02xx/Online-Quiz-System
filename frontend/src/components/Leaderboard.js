import React from 'react';

const Leaderboard = () => {
  const data = [
    { name: 'Alice', score: 95 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 85 },
  ];

  return (
    <div>
      <h3>Leaderboard</h3>
      <ul>
        {data.map((user, idx) => (
          <li key={idx}>
            {user.name} - {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
