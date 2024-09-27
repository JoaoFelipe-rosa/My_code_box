import { FaHome } from 'react-icons/fa';

import Card from '../Components/PageCards/Cards';
import GetCotation from '../Functions/Cotation';
import ChuckNorris from '../Functions/ChuckNorrisApi';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <FaHome size={35} />
      <h1 className="my-10 ">Bem vido a minha aplicação</h1>

      <div className="flex flex-col">
        <Card>
          <GetCotation />
        </Card>
        <Card>
          <ChuckNorris />
        </Card>
      </div>
    </div>
  );
}
