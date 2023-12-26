import { useEffect, useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Button from './Button'

const App = () => {
  const [items, setItems] = useState(menu)

  const handleFilter = (category) => {
    if (category === 'all') {
      setItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setItems(newItems)
  }

  const tempCategories = menu.map((item) => item.category)
  const temp = new Set(tempCategories)
  const tempArray = ['all', ...temp]
  return (
    <section className="menu">
      <Title />
      <Button handleFilter={handleFilter} temp={tempArray} />
      <Menu items={items} setItems={setItems} />
    </section>
  )
}
export default App
