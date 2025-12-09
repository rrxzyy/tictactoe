const Button = ({ children, onClick }) => {
  const classname = `w-full lg:py-4 lg:px-4 py-2 px-3 text-lg tracking-wide font-poppins font-bold text-gray-100 hover:text-white rounded-lg border-2 border-white transition-colors duration-200 bg-emerald-800 hover:bg-emerald-950`;
  return (
    <button className={classname} onClick={onClick}>{children}</button>
  )
}

export default Button;