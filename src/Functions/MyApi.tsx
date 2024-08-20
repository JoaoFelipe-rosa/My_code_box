import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MyApi() {
  const apiUsers = 'http://localhost:5000/api';
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    axios
      .get(apiUsers)
      .then(response => {
        const responseApi = response.data;

        console.log(responseApi);
        SetUsers(responseApi);
      })
      .catch((err: string) => {
        err;
      });
  }, []);

  return (
    <>
      <ul>
        <li>not working</li>
      </ul>
    </>
  );
}
