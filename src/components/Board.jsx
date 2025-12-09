import Square from "./Square";

const Board = ({ board, onAction, playerWinner, WinningLine }) => {
  const handleSquareClick = (index) => {
    onAction(index)
  }
  return (
    <>
      {/* tic tac toc Board */}
      <div className='grid grid-cols-3 text-white gap-2 overflow-hidden mb-6'>
        {
          board.map((value, index) => (
            <Square key={index}
              isWinnerSquare={WinningLine?.includes(index)}
              playerWinner={playerWinner}
              value={value}
              onClick={() => handleSquareClick(index)} />
          ))
        }
      </div>
    </>
  )
}

export default Board