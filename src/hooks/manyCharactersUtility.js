import { useEffect, useState } from 'react';
import { fetchManyCharacters } from '../services/rAndMApi';

export const manyCharactersUtility = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchManyCharacters()
      .then((res) => setCharacters(res)
      )
      .finally(() => setLoading(false));
  });
  return { loading, characters };
};
