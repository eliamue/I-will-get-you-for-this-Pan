import React from 'react';
import { manyCharactersUtility } from '../hooks/manyCharactersUtility';
import List from '../components/characters/List';

const spinner =
  'https://thumbs.gfycat.com/MagnificentRectangularFinch-size_restricted.gif';

const charactersList = () => {
  const { loading, characters } = manyCharactersUtility();

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <List characters={characters} />
    </>
  );
};

export default charactersList;
