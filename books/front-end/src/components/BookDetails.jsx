import { Link, useParams } from 'react-router-dom'

export default function BookDetails({ bookList }) {
  
  let { _id } = useParams()
  const bookDetailIndex = bookList.findIndex((book) => book._id == _id)

  return (
    <div>
      <h1>BookDetails</h1>

      <h2>{bookList[bookDetailIndex].title}</h2>
      <h4>Ecrit par : {bookList[bookDetailIndex].author}</h4>
      <h5>La date de parution est : {bookList[bookDetailIndex].publishYear}</h5>
      <Link to="/">
        <button className="btn" style={{ marginTop: '30px', width: '200px' }}>
          Page d'accueil
        </button>
      </Link>
    </div>
  )
}
