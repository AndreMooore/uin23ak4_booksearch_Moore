import './App.css'
import './styles/main.scss'
import { useEffect, useState } from 'react'
import React from 'react'
import  Bookcards  from './components/Bookcards'
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
  if(searchValue.length > 2){
  getBooks()
  }
},[searchValue])


console.log(books)

  return (
    <>
      <Bookcards setSearchValue={setSearchValue} getBooks={getBooks}>
      
        {books?.map((book, index) => {
          return <div className='bookcard' key={index}><Bookcard book={book} key={index}/> </div>
        })}
      
      </Bookcards>

    </>
  )
}

export default App
