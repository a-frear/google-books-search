import React from 'react';
import BookList from '../BookList/BookList';
import './Book.css';

function Book(props) {
  return (
    <li className="book">
      <h2>{props.title}</h2>
      {!props.img ? null : <img src={props.img} alt={props.title} />} 
      <h3>Author: {props.author}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default Book;

