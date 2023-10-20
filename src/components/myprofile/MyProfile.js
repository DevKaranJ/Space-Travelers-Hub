import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rocketsState = useSelector((state) => state.rockets.rockets);
  const missionsState = useSelector((state) => state.missions.missions);

  const reservedRockets = rocketsState.filter((rocket) => rocket.reserved);
  const reservedMissions = missionsState.filter((mission) => mission.reserved);

  return (
    <section className="my-profile">
      <div className="rocket-profileTable">
        {reservedRockets.length > 0 ? (
          <table className="profile-table">
            <thead>
              <tr>
                <th>Rockets</th>
              </tr>
            </thead>
            <tbody>
              {reservedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No rockets reserved.</p>
        )}
      </div>
      <div className="mission-profileTable">
        {reservedMissions.length > 0 ? (
          <table className="profile-table">
            <thead>
              <tr>
                <th>Mission Name</th>
              </tr>
            </thead>
            <tbody>
              {reservedMissions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No missions joined.</p>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
