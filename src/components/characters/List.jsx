import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';
import styles from '../../styles/List.css';

const List = ({ characters }) => (
  <ul aria-label="charlist" className={styles.list}>
    {characters.map((character) => (
      <li key={character.id}>
        <Link to={`/${character.id}`}>
          <Character {...character} />
        </Link>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default List;
