import Button from "./Button";

const GameInfo = ({ playerWinner, isXTurn, onReset }) => {


  const handleResetGame = () => {
    onReset();

  }
  return (

    <>
      <div className='text-white font-poppins text-lg'>
        {playerWinner ? (
          <h2 className='font-light lg:mb-6 mb-4'>Winner : <span className="font-bold">{playerWinner}</span></h2>
        ) : (
          <h2 className='font-light lg:mb-6 mb-4'>Next Player : <span className="font-bold">
            {isXTurn ? 'X' : 'O'}</span></h2>
        )}
        <Button onClick={handleResetGame}>Start Over</Button>
      </div>
    </>
  )
}

export default GameInfo;
