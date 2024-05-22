import React from 'react';
import "./Style/Book.css"
import book from "../../assets/Booktick-removebg-preview.png"

const Book = () => {
    return (
        <div className='Book-main-container'>
         <img src={book} className='book-tickets'/>
            
        </div>
    );
}

export default Book;
