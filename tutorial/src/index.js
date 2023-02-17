import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { books } from './booksState';
import Book from './Book';

function BookList() {
  const getBook = function (id) {
    const book = books.find((book) => {
      return book.id === id;
    });

    console.log(book);
  };

  return (
    <>
      <header>
        <h1>Amazon best sellers</h1>
      </header>

      <section className='booklist'>
        {books.map((book, i) => {
          // const { img, title, author, id } = book;

          return (
            <Book
              {...book}
              key={book.id}
              getBook={getBook}
              order={i + 1}
            ></Book>
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
