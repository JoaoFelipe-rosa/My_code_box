import { FaHome } from 'react-icons/fa';
import ChuckNorris from '../../../Functions/ChuckNorrisApi';
import GetCotation from '../../../Functions/Cotation';
import MyApi from '../../../Functions/MyApi';

export default function HomePage() {
  return (
    <div className="flex-row justify-items-center ">
      <FaHome />
      <ChuckNorris />
      <p>Bem vido a minha aplicação</p>
      <GetCotation />
      <MyApi />
    </div>
  );
}
