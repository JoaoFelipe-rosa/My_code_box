import axios from 'axios';
import { useState } from 'react';
import Button from '../Components/buttons/button';

export default function ChuckNorris() {
  const ApiUrl = 'https://api.chucknorris.io/jokes/random';

  const [joke, setJoke] = useState();

  function GenerateJoke() {
    axios
      .get(ApiUrl)
      .then((response: { data: any }) => {
        const data = response.data;
        setJoke(data.value);
        console.log(data.value);
      })
      .catch((err: any) => {
        err;
      });
  }

  return (
    <>
      <p>{joke}</p>
      <Button
        clickFunction={GenerateJoke}
        buttonText="Receba uma piadinha gratis"
        className="border-solid"
        buttonLink="/"
      ></Button>
    </>
  );
}
