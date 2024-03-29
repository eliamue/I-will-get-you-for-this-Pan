import React from 'react';
import { useParams, Link } from 'react-router';
import Detail from '../components/characters/Detail';
import { oneCharacterUtility } from '../hooks/oneCharacterUtility';

const spinner =
  'https://thumbs.gfycat.com/MagnificentRectangularFinch-size_restricted.gif';

const characterDetail = () => {
  const { id } = useParams();
  const { loading, character } = oneCharacterUtility(id);

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <Link to="/">
        <h2>Back to list</h2>
      </Link>
      <Detail {...character} />
    </>
  );
};

export default characterDetail;
