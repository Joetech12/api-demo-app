import React from "react";
import { books } from "../../data/utils";
import Link from "next/link"

function BookHome() {
  return (
    <div>
      {books.map((book, index) => (
        <div style={{
            width: 300,
            background: 'whitesmoke',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        }} key={index}>
            <h1>{book.name}</h1>
            <h3>{book.description}</h3>
            <Link href={`/books/${book.id}`}>
                <a style={{
                    border: '1px solid black',
                    padding: 10,
                    background: '#ccc',
                    cursor: 'pointer',
                }}>Details</a>
            </Link>
        </div>
      ))}
    </div>
  );
}

export default BookHome;
