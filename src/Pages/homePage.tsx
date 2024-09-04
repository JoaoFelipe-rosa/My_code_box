import { FaHome } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <FaHome size={35} />
      <h1 className="my-10 ">Bem vido a minha aplicação</h1>
    </div>
  );
}
