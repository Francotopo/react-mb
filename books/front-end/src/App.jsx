import 'react-toastify/dist/ReactToastify.css'
import AddBook from './components/AddBook'
import Home from './components/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BookDetails from './components/BookDetails'
import EditBook from './components/EditBook'
import axios from 'axios'

function App() {
  const navigate = useNavigate()
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/books').then((response) => {
      console.log(response.data.data)
      setBookList(response.data.data)
    })
  }, [])

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')

  return (
    <Routes>
      <Route path="/" element={<Home bookList={bookList} setBookList={setBookList} />} />
      <Route path="/bookdetails/:_id" element={<BookDetails bookList={bookList} />} />

      <Route
        path="/addbook"
        element={
          <AddBook
            bookList={bookList}
            setBookList={setBookList}
            navigate={navigate}
            title={title}
            author={author}
            publishYear={publishYear}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setPublishYear={setPublishYear}
          />
        }
      />
      <Route
        path="/editbook/:_id"
        element={
          <EditBook
            bookList={bookList}
            setBookList={setBookList}
            navigate={navigate}
            title={title}
            author={author}
            publishYear={publishYear}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setPublishYear={setPublishYear}
          />
        }
      />
    </Routes>
  )
}

export default App
