const InfoHistory = ({ onClick, children }) => {

  return (
    <>
      <button className='w-32 p-2 text-lg text-gray-50 rounded-lg transition-colors duration-200 bg-gray-600 hover:bg-gray-700' onClick={onClick} > {children}</button>
    </>
  )

}

export default InfoHistory