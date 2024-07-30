import './App.css'
import AddBook from './components/AddBook'
import Home from './components/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BookDetails from './components/BookDetails'
import EditBook from './components/EditBook'

function App() {
  const navigate = useNavigate()
  const [bookList, setBookList] = useState([
    {
      id: 1,
      title: "Harry Potter à l'école des sorciers",
      author: 'J. K. Rowling',
      year: 2001,
    },
    {
      id: 2,
      title: 'Le seigneur des anneaux Tome 1',
      author: 'J. R. R. Tolkien',
      year: 1954,
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      year: 1949,
    },
    {
      id: 4,
      title: 'Les misérables',
      author: 'Victor Hugo',
      year: 1862,
    },
  ])

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')

  return (
    <Routes>
      <Route path="/" element={<Home bookList={bookList} setBookList={setBookList} />} />
      <Route path="/bookdetails/:id" element={<BookDetails bookList={bookList} />} />

      <Route
        path="/addbook"
        element={
          <AddBook
            bookList={bookList}
            setBookList={setBookList}
            navigate={navigate}
            title={title}
            author={author}
            year={year}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setYear={setYear}
          />
        }
      />
      <Route
        path="/editbook/:id"
        element={
          <EditBook
            bookList={bookList}
            setBookList={setBookList}
            navigate={navigate}
            title={title}
            author={author}
            year={year}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setYear={setYear}
          />
        }
      />
    </Routes>
  )
}

export default App
