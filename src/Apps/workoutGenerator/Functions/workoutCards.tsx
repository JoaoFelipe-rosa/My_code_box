import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoading } from '../../../hooks/IsLoading';
import Ringsloader from '../../../Loaders/Ringsloader';

enum Sex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

enum ExerciseType {
  CARDIO = 'CARDIO',
  STRENGTH = 'STRENGTH',
  FLEXIBILITY = 'FLEXIBILITY',
  BALANCE = 'BALANCE'
}
interface WorkoutItem {
  id: number;
  img: string | null;
  exerciseName: string;
  type: ExerciseType;
  repetition: number;
  repetitionAmount: number;
  sex: Sex;
}

export default function WorkoutCards() {
  const apiUrl = 'http://localhost:5000/exercise/';
  const [loading, setLoading] = useLoading(false);

  const [Workout, setWorkout] = useState<WorkoutItem[]>([]);

  function getWorkout() {
    setLoading(true);
    axios
      .get(apiUrl)
      .then(response => {
        const data = response.data;
        setWorkout(data);
      })
      .catch((err: string) => {
        err;
      });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  async function deleteWorkout(id: number) {
    setLoading(true);
    await axios.delete(`${apiUrl}${id}`);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        {loading ? (
          <Ringsloader />
        ) : (
          <>
            {Workout.map(exercise => (
              <div
                className="flex flex-col w-[20rem] border rounded bg-[#386180] m-2 items-center"
                key={exercise.id}
              >
                {exercise.img == null ? (
                  <h1> imagem nao cadastrada</h1>
                ) : (
                  <iframe
                    className="p-0 border rounded m-3"
                    src={exercise.img}
                    title={exercise.exerciseName}
                  ></iframe>
                )}
                <div>{exercise.exerciseName}</div>
                <div>{exercise.repetition}</div>
                <div>{exercise.repetitionAmount}</div>
                <div>{exercise.type}</div>
                <div>{exercise.sex}</div>
                <div>
                  <button
                    onClick={() => {
                      deleteWorkout(exercise.id);
                    }}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
