const Square = ({ value, onClick, isWinnerSquare }) => {
  return (
    <>
      {isWinnerSquare ?
        <div className="flex items-center justify-center lg:h-28 h-24 w-full bg-emerald-800 rounded-md lg:text-6xl text-5xl text-center font-light font-gs-flex transition-colors duration-200 hover:bg-emerald-900" onClick={onClick}>{value}</div>
        :
        <div className="flex items-center justify-center lg:h-28 h-24 w-full bg-gray-800 rounded-md lg:text-6xl text-5xl text-center font-light font-gs-flex transition-colors duration-200 hover:bg-gray-700" onClick={onClick}>{value}</div>
      }
    </>
  )
}

export default Square;