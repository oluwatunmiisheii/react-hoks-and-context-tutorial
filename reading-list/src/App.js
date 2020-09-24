import React from 'react';
import NewBokForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBokForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
