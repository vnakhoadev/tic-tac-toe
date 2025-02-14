import { SquareValue } from "./PlayerType";

export type BoardProps = {
  board: SquareValue[];
  winningLine: number[] | null;
  handleClick: (index: number) => void;
};