import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegTrashAlt } from 'react-icons/fa';

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

export default function SignupForm() {
  const Validation = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Muito Curto!')
      .max(50, 'Muito Longo!')
      .required('Obrigatório'),
    age: Yup.string()
      .min(1, 'Muito Curto!')
      .max(3, 'Muito Longo!')
      .required('Obrigatório'),
    email: Yup.string().email('E-mail invalido').required('Obrigatório')
  });

  const inputStyle = 'my-3 p-2 rounded';

  const apiUrl = 'http://localhost:5000/user/';

  const [users, setUsers] = useState<User[]>([]);

  function getUsers() {
    axios
      .get(apiUrl)
      .then(response => {
        const data = response.data;
        setUsers(data);
      })
      .catch((err: string) => {
        err;
      });
  }
  function sendUser(value: object) {
    axios.post(apiUrl, value).then(function (response) {
      console.log(response);
      getUsers();
    });
  }

  async function deleteUser(id: unknown) {
    await axios.delete(`${apiUrl}${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col items-center bg-[#386180] rounded-lg shadow h-96 p-10 mx-10 text-white">
        <span className="text-white">
          <strong> Cadastre seu Usuario</strong>
        </span>
        <Formik
          initialValues={{
            name: '',
            age: '',
            email: ''
          }}
          validationSchema={Validation}
          onSubmit={(values, { resetForm }) => {
            sendUser(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className=" flex flex-col text-gray-700 justify-between">
              <Field name="name" className={inputStyle} placeholder="Nome" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field
                name="age"
                type="number"
                className={inputStyle}
                placeholder="idade"
              />
              {errors.age && touched.age ? <div>{errors.age}</div> : null}
              <Field
                name="email"
                type="email"
                className={inputStyle}
                placeholder="E-mail"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
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
      </div>
      <div className="flex flex-col items-center bg-[#386180] rounded-lg shadow p-10 text-white">
        <h1 className="text-white">
          <strong>Usuarios cadastrados</strong>
        </h1>
        {users.length > 0 ? (
          users.map(user => (
            <div
              key={user.id}
              className="flex items-center justify-between border my-2 w-96 p-2 rounded"
            >
              <div>
                <p>Nome: {user.name}</p>
                <p>Idade: {user.age}</p>
                <p>Email: {user.email}</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1> Nenhum Usuario cadastrado</h1>
        )}
      </div>
    </div>
  );
}
