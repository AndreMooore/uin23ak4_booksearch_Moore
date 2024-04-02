import React from 'react';

export default function Layout({children}){

    return (
        <>
            <h1>Boksøk</h1>
            <div className='searchbar'>
            <input type="text" />
            <button>Søk</button>
            </div>
            <section>
               {children}
            </section>
        </>
    )
}
