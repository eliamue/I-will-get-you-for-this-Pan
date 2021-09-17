import React from 'react';
import PropTypes from 'prop-types';
import styles from './Detail.css';

const Detail = ({ name, gender, status, species, image, origin }) => (
  <figure className={styles.chardeets}>
    <img className={styles.charimg} src={image} alt={name} />
    <figcaption>
      <h1>{name}</h1>
      <h3>{status}</h3>
      <h4>
        {gender} {species}
      </h4>
      <p>Place of Origin: {origin}</p>
    </figcaption>
  </figure>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};

export default Detail;
