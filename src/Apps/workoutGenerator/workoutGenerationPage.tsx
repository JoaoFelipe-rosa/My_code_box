import { useState } from 'react';
import WorkoutCadastration from './Functions/workoutCadastration';
import WorkoutCards from './Functions/workoutCards';
import SimpleButton from '../../Components/buttons/SimpleButton';

export default function WorkoutGenerationPage() {
  const [ResVisibility, setResVisibility] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full ">
        {ResVisibility ? <WorkoutCadastration /> : <WorkoutCards />}
        <div className="flex w-96 items-center ">
          <div className=" text-center w-full m-10 border rounded bg-[#386180]">
            <SimpleButton
              clickFunction={() => {
                setResVisibility(prev => !prev);
              }}
              buttonText="Register Workout"
            />
          </div>
        </div>
      </div>
    </>
  );
}
