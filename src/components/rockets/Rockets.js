import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRockets,
  reserveRocket,
} from '../../redux/features/rockets/rocketsSlice';

const Rockets = () => {
  const rocketsState = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleReserveClick = (rocket) => {
    dispatch(reserveRocket(rocket.id));
    const cancelReservationBtn = document.querySelector('.reserve-btn');
    cancelReservationBtn.innerHTML = 'Cancel Reservation';
  };

  return (
    <section className="rockets-container">
      <ul className="rocket-info-container">
        {rocketsState.map((rocket) => (
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
              <p className="reserve-tag">
                {rocket.reserved && (
                  <span className="reserve-rocket-tag">Reserved</span>
                )}
                {rocket.description}
              </p>
              <button
                type="button"
                className="reserve-btn"
                onClick={() => handleReserveClick(rocket)}
              >
                Reserve rocket
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
