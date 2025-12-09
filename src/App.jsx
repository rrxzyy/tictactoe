import { useState } from 'react'
import './App.css'
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import calculateWinner, { getWinningLine } from './utils/CalculateWinner';
// import History from './components/History';

function App() {
  const [history, setHistory] = useState(
    [{
      board: Array(9).fill(null), isXTurn: false
    }])

  const [currentStep, setcurrentStep] = useState(0);
  const board = history[currentStep].board;
  const isXTurn = history[currentStep].isXTurn;
  const winner = calculateWinner(board);

  const handleSquareClick = (index) => {
    if (winner) return;

    const newBoard = [...board]

    if (newBoard[index]) {
      return newBoard;
    }

    newBoard[index] = isXTurn ? "X" : "O";
    setHistory(
      [...history.slice(0, currentStep + 1),
      { board: newBoard, isXTurn: !isXTurn }
      ])
    setcurrentStep(currentStep + 1);
  }

  const handleResetGame = () => {
    // Reset Game
    setHistory([{ board: Array(9).fill(null), isXTurn: false }]);
    setcurrentStep(0);
  }

  // const handleHistoryClick = (index) => {
  //   setcurrentStep(index);
  // }


  const playerWinner = calculateWinner(board);
  const lineWinner = getWinningLine(board);

  return (
    <>
      <div className='bg-gray-900 min-h-screen flex items-center'>
        <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto gap-0 lg:gap-4'>

          < div className='mx-auto w-lg max-w-xs lg:max-w-sm lg:col-start-2' >
            <h1 className='lg:text-5xl text-4xl  tracking-tight font-poppins font-bold text-white lg:mb-8 mb-6'>Tic Tac Toe</h1>
            <Board WinningLine={lineWinner} playerWinner={playerWinner} board={board} onAction={handleSquareClick} />
            <GameInfo playerWinner={playerWinner} isXTurn={isXTurn} onReset={handleResetGame} />
          </div>

          {/* <div className='hidden md:flex flex-col mx-auto w-64 max-w-xs'>
            <h1 className='lg:text-xl text-lg font-semibold text-white lg:my-8 my-6'>History</h1>
            <History history={history} onHistoryClick={handleHistoryClick} />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
