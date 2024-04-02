import { useEffect, useState } from 'react'
import React from 'react'
import  Layout  from './components/Layout'
import './App.css'
import Bookcard from './components/Bookcard'

function App() {

const [searchValue, setSearchValue] = useState("james+bond")
const [books, setBooks] = useState([])
const getBooks = async()=>{
  fetch(`https://openlibrary.org/search.json?title=${searchValue}`)
  .then(response => response.json())
  .then(data => setBooks(data.docs))
  .catch(error => console.error(error))
}

useEffect(()=>{
  getBooks()
},[])


// useEffect(()=>{
//   if(searchValue.length > 2){
//     getBooks()
//   }
// },[searchValue])

console.log(books)

  return (
    <>
      <Layout>
      
        {books?.map((book, index) => {
          return <div className='bookcard'><Bookcard book={book} key={index}/> </div>
        })}
      
      </Layout>

    </>
  )
}

export default App
