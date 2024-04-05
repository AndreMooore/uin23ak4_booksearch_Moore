import './App.css'
import './styles/main.scss'
import { useEffect, useState } from 'react'
import React from 'react'
import  Bookcards  from './components/Bookcards'
import Bookcard from './components/Bookcard'
import Searchresults from './components/Searchresults'



function App() {

const [searchValue, setSearchValue] = useState("james+bond")
const [books, setBooks] = useState([])
const [loading, setLoading] = useState(false)
const getBooks = async () => {
  setLoading(true);
  fetch(`https://openlibrary.org/search.json?title=${searchValue}`)
    .then(response => response.json())
    .then(data => {
      setBooks(data.docs);
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
    });
};
useEffect(()=>{
  if(searchValue.length > 2){
  getBooks()
  }
},[searchValue])


console.log(books)
  

  return (
    <>
    <h1>Boksøk</h1>
      <Searchresults setSearchValue={setSearchValue} getBooks={getBooks} />
      {loading ? <p>Loading...</p> : 
      <Bookcards books={books}/>
      }

    </>
  )
}

export default App 

