import { useEffect, useState } from 'react';
import { fetchManyCharacters } from '../services/rAndMApi';

export const manyCharactersUtility = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchManyCharacters()
      .then((res) => {
        setCharacters(res.characters);
      })
      .finally(() => setLoading(false));
  });
  return { loading, characters };
};
