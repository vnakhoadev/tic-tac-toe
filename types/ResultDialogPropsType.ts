import { Player } from "./PlayerType";

export type ResultDialogProps = { winner: Player | 'Draw' | null; isOpen: boolean; resetGame: () => void };
