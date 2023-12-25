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
  const filterBreakfast = () => {
    const newItems = menu.filter((item) => item.category === 'breakfast')
    setItems(newItems)
  }
  const filterLunch = () => {
    const newItems = menu.filter((item) => item.category === 'lunch')
    setItems(newItems)
  }
  const filterShakes = () => {
    const newItems = menu.filter((item) => item.category === 'shakes')
    setItems(newItems)
  }

  return (
    <main className="container">
      <Title />
      <Button
        filterAll={filterAll}
        filterBreakfast={filterBreakfast}
        filterLunch={filterLunch}
        filterShakes={filterShakes}
      />
      <Menu items={items} setItems={setItems} />
    </main>
  )
}
export default App
