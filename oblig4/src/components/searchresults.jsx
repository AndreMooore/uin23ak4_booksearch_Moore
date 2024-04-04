import React from 'react';

export default function SearchResults({setSearchValue, getBooks}) {
return (
    <>
        <div className='searchbar'>
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <button onClick={() => getBooks()}>Søk</button>
        </div>
       
    </>
)}