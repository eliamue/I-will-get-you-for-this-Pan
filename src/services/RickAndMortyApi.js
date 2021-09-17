export const fetchManyCharacters = async () => {
  const res = await fetch(
    'https://rickandmortyapi.com/api/character'
  );
  const { data } = await res.json();

  return { characters: data };
};

export const fetchOneCharacter = async (charId) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${charId}`
  );
  const { id, name, gender, status, species, image, origin } =
    await res.json();

  return {
    id,
    name,
    gender,
    status,
    species,
    image,
    origin: origin.name,
  };
};
