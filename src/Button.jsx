const Button = ({ filterAll, handleFilter }) => {
  const breakfast = 'breakfast'
  const lunch = 'lunch'
  const shakes = 'shakes'
  return (
    <div className="btn-container">
      <button className="btn" onClick={filterAll}>
        All
      </button>
      <button className="btn" onClick={() => handleFilter(breakfast)}>
        Breakfast
      </button>
      <button className="btn" onClick={() => handleFilter(lunch)}>
        Lunch
      </button>
      <button className="btn" onClick={() => handleFilter(shakes)}>
        Shakes
      </button>
    </div>
  )
}
export default Button
