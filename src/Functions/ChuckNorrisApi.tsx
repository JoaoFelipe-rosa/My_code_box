import axios from 'axios';
import { useState } from 'react';
import Button from '../Components/buttons/LinkButton';
import Ringsloader from '../Loaders/Ringsloader';

export default function ChuckNorris() {
  const ApiUrl = 'https://api.chucknorris.io/jokes/random';

  const [joke, setJoke] = useState();

  const [loading, setLoading] = useState<boolean>(true);

  interface jokeType {
    value: undefined;
  }

  function GenerateJoke() {
    (async () => {
      setLoading(false);

      await axios
        .get(ApiUrl)
        .then((response: { data: jokeType }) => {
          const data = response.data;
          setJoke(data.value);
          console.log(data);
          console.log(data.value);
        })
        .catch((err: string) => {
          err;
        });

      setLoading(true);
    })();
  }

  return (
    <>
      {loading ? <p>{joke}</p> : <Ringsloader />}

      <Button
        clickFunction={GenerateJoke}
        buttonText="Receba uma piadinha gratis"
        className="border-solid"
        buttonLink="/"
      ></Button>
    </>
  );
}
