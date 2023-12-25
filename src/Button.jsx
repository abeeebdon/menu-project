const Button = ({ filterAll, filterBreakfast, filterLunch, filterShakes }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={filterAll}>
        All
      </button>
      <button className="btn" onClick={filterBreakfast}>
        Breakfast
      </button>
      <button className="btn" onClick={filterLunch}>
        Lunch
      </button>
      <button className="btn" onClick={filterShakes}>
        Shakes
      </button>
    </div>
  )
}
export default Button
