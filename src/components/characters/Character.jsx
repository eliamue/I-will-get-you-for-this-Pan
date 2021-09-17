import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Character.css';

const Character = ({ name, image }) => (
  <figure className={styles.character}>
    <img className={styles.charImage} src={image} alt={name} />
    <figcaption>
      <h2 className={styles.charName}>{name}</h2>
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Character;
