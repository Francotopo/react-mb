import { useState } from 'react'
import { enqueueSnackbar } from 'notistack'
import Table from './Table'
import Card from './Card'
import axios from 'axios'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Home({ bookList, setBookList }) {
  const [showBooks, setShowBooks] = useState('table')

  function handleDelete(_id) {
    axios.delete(`http://localhost:3000/books/${_id}`)
    const newList = bookList.filter((book) => book._id !== _id)
    setBookList(newList)

    enqueueSnackbar('Livre supprimé', {
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'left',
      },
      autoHideDuration: 2500,
      variant: 'success',
    })
  }

  return (
    <div>
      <div className="container mx-auto  w-[890px] flex items-center justify-between">
        <div className="container flex flex-col mb-10 bg-neutral-50 mt-10 py-5 w-96 rounded-2xl">
          <div className="flex justify-center mb-4">
            <h2 className="text-slate-400 font-medium ">
              Choisissez l&apos;affichage en cartes ou en tableau
            </h2>
          </div>
          <div className="flex justify-center">
            <Button
              className="mr-12 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 drop-shadow-md"
              onClick={() => setShowBooks('table')}
            >
              Tableau
            </Button>
            <Button
              className="text-sky-600 border-sky-600 hover:bg-sky-600 hover:text-sky-100 drop-shadow-md"
              onClick={() => setShowBooks('card')}
            >
              Carte
            </Button>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <Link to="/addbook">
              {/* <button>Ajouter un livre</button> */}
              <Button className=" text-emerald-600 border-emerald-600  hover:bg-emerald-700 hover:text-emerald-100 drop-shadow-md">
                Ajouter un livre
              </Button>
            </Link>{' '}
          </div>
        </div>
      </div>

      {showBooks === 'table' ? (
        <Table bookList={bookList} handleDelete={handleDelete} />
      ) : (
        <Card bookList={bookList} handleDelete={handleDelete} />
      )}
    </div>
  )
}
