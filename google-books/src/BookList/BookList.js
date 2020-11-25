import React, { Component } from 'react';
import './BookList.css';
import Book from '../Book/Book';

function BookList(props){
  console.log(props);
    return (
      <ul className="bookmarkList">
        { props.bookResults.map((book) => 
                <Book 
                key={book.id}
                title={book.volumeInfo.title} 
                img={book.volumeInfo.imageLinks.thumbnail} 
                author={book.volumeInfo.authors} 
                description={book.volumeInfo.description}/>
            )
        }
      </ul>
    );
}



export default BookList;
