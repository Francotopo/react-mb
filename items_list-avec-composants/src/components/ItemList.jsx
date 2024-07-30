export default function ItemList({ items, setItems }) {
  function removeItem(index) {
    const filteredItems = items.filter((item, idx) => idx !== index)
    setItems(filteredItems)
  }

  return (
    <div className="items-container">
      {items.map((item, index) => (
        <div key={index} className="item-container">
          <p>{item}</p>
          <button onClick={() => removeItem(index)}>Remove Item</button>
        </div>
      ))}
    </div>
  )
}
