import React, { createContext, useState } from 'react';
import { getKey } from './../util/getKey';

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
  const initState = [
    { title: 'name of the wind', id: getKey() },
    { title: 'the way of kings', id: getKey() },
    { title: 'the hero of ages', id: getKey() }
  ]
  const [books, setBooks] = useState(initState);

  return (
    <BookContext.Provider value={{ books }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;