import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Detail.css';

const Detail = ({ name, gender, status, species, image, origin, location }) => (
  <figure className={styles.chardeets}>
    <img className={styles.charimg} src={image} alt={name} />
    <figcaption>
      <h1>{name}</h1>
      <h3>{status}</h3>
      <h4>
        {gender} {species}
      </h4>
      <p>Place of Origin: {origin}</p>
      <p>Current Location: {location}</p>
    </figcaption>
  </figure>
);

Detail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
};

export default Detail;
