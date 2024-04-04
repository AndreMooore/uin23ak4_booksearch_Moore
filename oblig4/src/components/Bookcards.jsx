import React from 'react';

export default function Layout({children, setSearchValue, getBooks}){

    return (
        <>
            <h1>Boksøk</h1>
            <div className='searchbar'>
            <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
            <button onClick={() => getBooks()}>Søk</button>
            </div>
            <section>
               {children}
            </section>
        </>
    )
}
