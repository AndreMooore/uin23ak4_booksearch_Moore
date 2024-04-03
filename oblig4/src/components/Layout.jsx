import React from 'react';

export default function Layout({children, setSearchValue}){

    return (
        <>
            <h1>Boksøk</h1>
            <div className='searchbar'>
            <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
            <button>Søk</button>
            </div>
            <section>
               {children}
            </section>
        </>
    )
}
