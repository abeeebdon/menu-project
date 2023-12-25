import MenuItem from './MenuItem'

const Menu = ({ items, setItems }) => {
  return (
    <section className="section-center">
      {items.map((item) => {
        return <MenuItem key={item.id} item={item} />
      })}
    </section>
  )
}
export default Menu
