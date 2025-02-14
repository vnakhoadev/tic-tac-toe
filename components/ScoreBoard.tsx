import { ScoreBoardProps } from "../types/ScoreBoardPropsType";


export default function ScoreBoard({ score }: ScoreBoardProps) {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg px-2 min-[500px]:px-8 py-2 shadow-lg border-2 border-gray-700 mb-6 flex items-center justify-between w-50 min-[500px]:w-80">
      <div className="flex flex-col items-center">
        <div className="min-[500px]:text-3xl w-8 h-8 min-[500px]:w-12 min-[500px]:h-12 rounded-full border-4 border-red-800 flex items-center justify-center font-bold bg-red-400 uppercase text-red-700">x</div>
        <p className="text-lg font-bold mt-0.5 min-[500px]:mt-1">{score.X}</p>
      </div>
      <div className="text-lg min-[500px]:text-2xl font-extrabold">VS</div>
      <div className="flex flex-col items-center">
        <div className="min-[500px]:text-3xl w-8 h-8 min-[500px]:w-12 min-[500px]:h-12 rounded-full border-4 border-blue-800 flex items-center justify-center font-bold bg-blue-400 uppercase text-blue-700">o</div>
        <p className="text-lg font-bold mt-0.5 min-[500px]:mt-1">{score.O}</p>
      </div>
    </div>
  );
}