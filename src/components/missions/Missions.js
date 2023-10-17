import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../actions/missions/missions';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const error = useSelector((state) => state.missions.error);

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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Missions;
