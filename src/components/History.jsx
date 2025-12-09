import InfoHistory from "./Info"

const History = ({ history, onHistoryClick }) => {
  return (
    <>
      <div className="flex flex-wrap flex-col">
        <div className="grid grid-cols-2 gap-4">
          {
            history.map((_, index) => (
              <InfoHistory key={index} onClick={() => onHistoryClick(index)}>Step # {index + 1}</InfoHistory>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default History