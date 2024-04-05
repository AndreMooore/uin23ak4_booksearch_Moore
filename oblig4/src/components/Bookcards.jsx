import React from 'react';
import Bookcard from './Bookcard';

export default function Bookcards({books}){

    return (
        <>
            <section>
            {books?.map((book, index) => <div className='bookcard' key={index}><Bookcard book={book} key={index}/> </div>
        )}
            </section>
        </>
    )
}
