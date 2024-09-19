import axios from 'axios';
import { useEffect, useState } from 'react';

export default function WorkoutCards() {
  const apiUrl = 'http://localhost:5000/exercise/';

  const [Workout, setWorkout] = useState([]);

  function getWorkout() {
    axios
      .get(apiUrl)
      .then(response => {
        const data = response.data;
        setWorkout(data);
      })
      .catch((err: string) => {
        err;
      });
  }
  async function deleteWorkout(id: unknown) {
    await axios.delete(`${apiUrl}${id}`);
  }

  useEffect(() => {
    getWorkout();
  }, []);
  console.log(Workout);

  return (
    <>
      <div className="flex flex-row">
        {Workout.map(exercise => (
          <div
            className="flex flex-col border m-2 items-center"
            key={exercise.id}
          >
            {exercise.img == null ? (
              <h1> imagem nao cadastrada</h1>
            ) : (
              <iframe src={exercise.img} alt="">
                teste
              </iframe>
            )}
            <div>{exercise.exerciseName}</div>
            <div>{exercise.repetition}</div>
          </div>
        ))}
      </div>
    </>
  );
}
