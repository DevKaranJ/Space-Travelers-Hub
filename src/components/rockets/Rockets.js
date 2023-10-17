import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/features/rockets/rocketsSlice';

const Rockets = () => {
  const rocketsState = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <section className="rockets-container">
      <ul className="rocket-info-container">
        {rocketsState.rockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.flickr_images.length > 0 && (
              <img
                src={rocket.flickr_images[0]}
                alt={`Rocket ${rocket.name} Imge`}
                className="rocket-image"
              />
            )}
            <div className="rocket-info">
              <h2>{rocket.name}</h2>
              <p>{rocket.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
