import { ControlsProps } from "../types/ControlsPropsType";

export default function Controls({ resetGame, resetScore }: ControlsProps) {
  return (
    <div className="mt-6 flex gap-2 items-center justify-center flex-wrap">
      <button
        onClick={resetGame}
        className="p-1 min-[500px]:px-5 min-[500px]:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out min-[500px]:text-lg font-semibold tracking-wide cursor-pointer"
      >
        Restart Game
      </button>
      <button
        onClick={resetScore}
        className="p-1 min-[500px]:px-5 min-[500px]:py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg hover:from-red-600 hover:to-red-800 transform hover:-translate-y-1 transition-all duration-300 ease-in-out min-[500px]:text-lg font-semibold tracking-wide cursor-pointer"
      >
        Reset Score
      </button>
    </div>
  );
}
