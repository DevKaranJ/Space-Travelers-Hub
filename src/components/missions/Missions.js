import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../actions/missions/missions';

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
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>Missions</h2>
      <ul>
        {missions.map((mission) => (
          <li key={mission.mission_id}>
            <h3>{mission.mission_name}</h3>
            <p>{mission.description}</p>
            {mission.reserved ? (
              <div>
                <span>Active Member</span>
                <button type="button" onClick={() => handleLeaveMission(mission.mission_id)}>Leave Mission</button>
              </div>
            ) : (
              <div>
                <span>NOT A MEMBER</span>
                <button type="button" onClick={() => handleJoinMission(mission.mission_id)}>Join Mission</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Missions;
