import React from 'react';
import { manyCharactersUtility } from '../hooks/manyCharactersUtility';
import Controls from '../components/characters/Controls';
import List from '../components/characters/List';

const spinner =
  'https://c.tenor.com/yalDO5GyNA8AAAAC/screaming-sun-rick-and-morty.gif';

const charactersList = () => {
  const { loading, characters } = manyCharactersUtility();

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <Controls />
      <List characters={characters} />
    </>
  );
};

export default charactersList;
