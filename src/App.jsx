import { useEffect, useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Button from './Button'

const App = () => {
  const [items, setItems] = useState(menu)

  const filterAll = () => {
    setItems(menu)
  }
  const handleFilter = (filter) => {
    const name = filter
    const newItems = menu.filter((item) => item.category == name)
    setItems(newItems)
  }

  return (
    <main className="container">
      <Title />
      <Button filterAll={filterAll} handleFilter={handleFilter} />
      <Menu items={items} setItems={setItems} />
    </main>
  )
}
export default App
