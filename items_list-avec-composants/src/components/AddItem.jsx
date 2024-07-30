export default function AddItem({
  items,
  setItems,
  inputValue,
  setInputValue,
  setMessageAddItem,
}) {
  function handleOnclick() {
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

  function handleOnChangeToAdd(e) {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleOnChangeToAdd} value={inputValue} />
      <button onClick={handleOnclick}>Add Item</button>
    </div>
  )
}
