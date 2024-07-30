import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList'
import RemoveItemByName from './components/RemoveItemByName'
import AddItem from './components/AddItem'

function App() {
  const [items, setItems] = useState(['Pomme', 'Banane', 'Orange', 'Mangue'])
  const [inputValue, setInputValue] = useState('')
  const [inputValueToRemove, setInputValueToRemove] = useState('')
  const [messageAddItem, setMessageAddItem] = useState('')
  const [messageRemoveItem, setMessageRemoveItem] = useState('')

  return (
    <div>
      <h1>List Item</h1>
      <AddItem
        items={items}
        setItems={setItems}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setMessageAddItem={setMessageAddItem}
      />
      {messageAddItem}
      <ItemList items={items} setItems={setItems} />
      <RemoveItemByName
        items={items}
        setItems={setItems}
        inputValueToRemove={inputValueToRemove}
        setInputValueToRemove={setInputValueToRemove}
        setMessageRemoveItem={setMessageRemoveItem}
      />
      {messageRemoveItem}
    </div>
  )
}

export default App
