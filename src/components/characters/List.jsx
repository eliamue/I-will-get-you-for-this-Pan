import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';
import { manyCharactersUtility } from '../../hooks/manyCharactersUtility';
import styles from '../../styles/List.css';

const spinner =
  'https://thumbs.gfycat.com/MagnificentRectangularFinch-size_restricted.gif';

const List = () => {
  const { loading, characters } = manyCharactersUtility();
  if(loading) return <img src={spinner} alt="Loading" />;
  
  return (
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
};

export default List;
