export default function({book, index}){
    return (
    <article key={index}>
        {book.cover_i ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />) : (<p className="noimage">No image available</p>)} 
        <p>Title: {book.title}</p>
        {book.author_name?.length > 1 ? <p>Authors: {book.author_name.join(', ')}</p> : <p>Author: {book.author_name}</p>}
        <p>First published: {book.first_publish_year}</p>
        {book.ratings_average === undefined ? null : <p>Average rating: {book.ratings_average}</p>}
        {book.isbn?.[0] && <button id="knapp" onClick={() => window.open(`https://www.amazon.com/s?k=${book.isbn[0]}`, "_blank")}>Buy</button>}
    </article>
)}