export const fetchManyCharacters = async () => {
  const res = await fetch(
    'https://rickandmortyapi.com/api/character'
  );
  const { data } = await res.json();

  return { characters: data };
};

export const fetchOneCharacter = async (characterId) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  const { id, name, gender, status, species, image, origin, location } =
    await res.json();

  return {
    id,
    name,
    gender,
    status,
    species,
    image,
    origin: origin.name,
    location: location.name,
  };
};
