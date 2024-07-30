import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState(['Pomme', 'Banane', 'Orange', 'Mangue'])
  const [inputValue, setInputValue] = useState('')
  const [inputValueToRemove, setInputValueToRemove] = useState('')
  const [messageAddItem, setMessageAddItem] = useState('')
  const [messageRemoveItem, setMessageRemoveItem] = useState('')

  function handleOnChangeToAdd(e) {
    setInputValue(e.target.value)
  }

  function addItem() {
    if (inputValue.trim() !== '') {
      setItems([inputValue, ...items])
      setMessageAddItem('Item ajouté !')
      setTimeout(() => {
        setMessageAddItem('')
      }, 2500)
      setInputValue('')
    }
    setInputValue('')
  }

  function removeItem(index) {
    const filteredItems = items.filter((item, idx) => idx !== index)
    setItems(filteredItems)
  }

  function handleOnChangeRemoveByName(e) {
    setInputValueToRemove(e.target.value)
  }

  function removeItemByName() {
    const itemIndexToRemove = items
      .map((item) => item.toLowerCase())
      .indexOf(inputValueToRemove.toLocaleLowerCase())
    if (itemIndexToRemove !== -1 && inputValueToRemove.trim() !== '') {
      setItems(items.filter((item, index) => index !== itemIndexToRemove))
      setMessageRemoveItem('Item supprimée !')
      setTimeout(() => {
        setMessageRemoveItem('')
      }, 2500)
    }

    setInputValueToRemove('')
  }

  return (
    <div>
      <h1>List Item</h1>

      <div>
        <input type="text" onChange={handleOnChangeToAdd} value={inputValue} />
        <button onClick={addItem}>Add Item</button>
      </div>
      {messageAddItem}

      <div className="items-container">
        {items.map((item, index) => (
          <div key={index} className="item-container">
            <p>{item}</p>
            <button onClick={() => removeItem(index)}>Remove Item</button>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          onChange={handleOnChangeRemoveByName}
          value={inputValueToRemove}
        />
        <button onClick={removeItemByName}>Remove Item By Name</button>
      </div>
      {messageRemoveItem}
    </div>
  )
}

export default App
