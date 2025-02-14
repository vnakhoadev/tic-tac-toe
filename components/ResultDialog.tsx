import { Dialog } from '@headlessui/react';
import { ResultDialogProps } from '../types/ResultDialogPropsType';

export default function ResultDialog({ winner, isOpen, resetGame }: ResultDialogProps) {
  return (
    <Dialog open={isOpen} onClose={resetGame} className="relative z-50">
      <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
        <Dialog.Panel className="bg-[#222121] p-6 rounded-lg shadow-lg text-center">
          <Dialog.Title className="text-2xl text-[#fff] font-bold mb-4">
            {winner === 'Draw' ? 'It is a Draw!' : `Winner: ${winner}`}
          </Dialog.Title>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 cursor-pointer"
          >
            Play Again
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}