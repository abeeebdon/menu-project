const Button = ({ handleFilter, temp }) => {
  const breakfast = 'breakfast'
  const lunch = 'lunch'
  const shakes = 'shakes'
  return (
    <div className="btn-container">
      {temp.map((category) => {
        return (
          <button
            key={category}
            className="btn"
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Button
