import React from 'react';
import { oneCharacterUtility } from '../../hooks/oneCharacterUtility';
import styles from '../../styles/Detail.css';
import { useParams } from 'react-router-dom';
import Header from '../Header';

const spinner =
  'https://thumbs.gfycat.com/MagnificentRectangularFinch-size_restricted.gif';

const Detail = () => {
  const { id } = useParams();
  const { loading, character } = oneCharacterUtility(id);
  const { name, gender, species, origin, location, status, image } = character;
  if (loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <Header />
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
    </>
  );
};

export default Detail;
