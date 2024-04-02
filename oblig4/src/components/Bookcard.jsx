export default function({book, index}){
    return (
    <div key={index}>
        <p>Title: {book.title}</p>
        {book.author_name?.length > 1 ? <p>Authors: {book.author_name.join(', ')}</p> : <p>Author: {book.author_name}</p>}
        <p>First published: {book.first_publish_year}</p>
        {book.ratings_average === undefined ? null : <p>Average rating: {book.ratings_average}</p>}
    </div>
)}