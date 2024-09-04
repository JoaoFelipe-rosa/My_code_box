import { FaHome } from 'react-icons/fa';

export default function HomeButton() {
  const handleButtonClick = () => {
    window.location.href = '/';
  };

  return (
    <button
      onClick={handleButtonClick}
      className="bg-slate-400 w-56 rounded m-1 p-1 flex justify-around items-center text-xl cursor-pointer"
    >
      <FaHome size={35} />
      Voltar ao Inicio
    </button>
  );
}
