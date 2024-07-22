export default function RemoveItemByName({
  items,
  setItems,
  inputValueToRemove,
  setInputValueToRemove,
  setMessageRemoveItem,
}) {
  function removeItem() {
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

  function handleOnChangeRemoveItem(e) {
    setInputValueToRemove(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleOnChangeRemoveItem} value={inputValueToRemove} />
      <button onClick={removeItem}>Remove Item By Name</button>
    </div>
  )
}
