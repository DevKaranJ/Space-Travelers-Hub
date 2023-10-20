import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../actions/missions/missions';
import './Mission.css';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const error = useSelector((state) => state.missions.error);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div className="mission">
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.reserved ? (
                  <div>Active Member</div>
                ) : (
                  <div>NOT A MEMBER</div>
                )}
              </td>
              <td>
                {mission.reserved ? (
                  <button type="button" onClick={() => handleLeaveMission(mission.mission_id)}>
                    Leave Mission
                  </button>
                ) : (
                  <button type="button" onClick={() => handleJoinMission(mission.mission_id)}>
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
