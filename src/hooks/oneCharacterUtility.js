import { useEffect, useState } from 'react';
import { fetchOneCharacter } from '../services/rAndMApi';

export const oneCharacterUtility = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchOneCharacter(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  return { loading, character };
};
