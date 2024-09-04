export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`${className} border-2 py-2 px-7 rounded-full bg-white`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
