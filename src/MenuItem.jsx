const MenuItem = ({ item }) => {
  const { title, category, price, img, desc } = item

  return (
    <article className="menu-item">
      <img src={img} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <p className="item-price">{price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  )
}
export default MenuItem
