import { BoardProps } from "../types/BoardPropsType";


export default function Board({ board, winningLine, handleClick }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3 relative">
      {board.map((square, index) => (
        <button
          key={index}
          className={`w-16 h-16 min-[500px]:w-24 min-[500px]:h-24 border border-gray-300 rounded-lg shadow-lg flex items-center justify-center text-3xl font-bold transition-transform transform hover:scale-105 active:scale-95 cursor-pointer bg-white hover:bg-gray-100 ${winningLine?.includes(index) ? 'bg-green-200 animate-pulse' : ''
            }`}
          onClick={() => handleClick(index)}
        >
          <span
            className={`transition-transform transform ${square ? 'scale-100 rotate-0' : 'scale-0'} ${square === 'X' ? 'text-red-500' : 'text-blue-500'}`}
          >
            {square}
          </span>
        </button>
      ))}
    </div>
  );
}