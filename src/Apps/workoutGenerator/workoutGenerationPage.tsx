import { useState } from 'react';
import WorkoutCadastration from './Functions/workoutCadastration';
import WorkoutCards from './Functions/workoutCards';
import SimpleButton from '../../Components/buttons/SimpleButton';

export default function WorkoutGenerationPage() {
  const [ResVisibility, setResVisibility] = useState(false);
  return (
    <>
      <div className="">
        {ResVisibility ? <WorkoutCadastration /> : <WorkoutCards />}
        <div></div>
        <div></div>
        <div>
          <SimpleButton
            clickFunction={() => {
              setResVisibility(prev => !prev);
            }}
            buttonText="Ola"
          />
        </div>
      </div>
    </>
  );
}
