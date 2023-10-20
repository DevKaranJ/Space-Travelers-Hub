import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rocketsState = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rocketsState.filter((rocket) => rocket.reserved);

  return (
    <section className="my-rockets">
      <h2>My Rockets</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>
            <p>{rocket.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyProfile;
