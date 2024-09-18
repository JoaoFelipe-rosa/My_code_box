import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function WorkoutGenerator() {
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
  function sendWorkout(value: object) {
    axios.post(apiUrl, value).then(function (response) {
      console.log(response);
      getWorkout();
    });
  }

  async function deleteWorkout(id: unknown) {
    await axios.delete(`${apiUrl}${id}`);
    getWorkout();
  }

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <>
      <h1>Cadastro de Treino</h1>
      <Formik
        initialValues={{}}
        onSubmit={values => {
          sendWorkout(values);
        }}
      >
        {() => (
          <Form className=" flex flex-col text-black justify-between m-10">
            <label htmlFor="name">Nome do exercicio</label>
            <Field name="exerciseName" id="name" />
            <label htmlFor="repetition">Quantidade de Repetiçoes</label>
            <Field name="repetition" id="repetition" type="number" />
            <label htmlFor="Type">Series</label>
            <Field
              id="repetitionAmount"
              name="repetitionAmount"
              type="number"
            />
            <label htmlFor="sex">Sexo</label>
            <Field component="select" id="sex" name="sex" multiple={false}>
              <option value="MALE">Homen</option>
              <option value="FEMALE">Mulher</option>
              <option value="OTHER">Outro</option>
            </Field>
            <label htmlFor="Type">Tipo de Treino</label>
            <Field component="select" id="Type" name="Type" multiple={false}>
              <option value="CARDIO">Cardio</option>
              <option value="STRENGTH">Força</option>
              <option value="FLEXIBILITY">Flexibilidade</option>
              <option value="BALANCE">Equilíbrio</option>
            </Field>
            <div className="flex container-login-form-btn justify-center mt-10">
              <button
                type="submit"
                className="bg-slate-900 py-2 px-14 transition-all duration-500 ease-in-out hover:px-20 text-white rounded-3xl"
              >
                Entrar
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div>
        {Workout.map(Workouts => (
          <div key={Workouts.id}>
            {Workouts.exerciseName}
            {Workouts.type}
            <iframe src={Workouts.img}></iframe>
          </div>
        ))}
      </div>
    </>
  );
}
