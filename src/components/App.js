import '../styles/App.css';
import BookList from './BookList';
import AddBookForm from './AddBookForm'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_ENDPOINT = 'https://655da38f9f1e1093c5999e81.mockapi.io/api/booklist_app';

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/books`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  
  const addBook = async (newBook) => {
    try {
      await axios.post(`${API_ENDPOINT}/books`, newBook);
      fetchBooks();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }
  
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_ENDPOINT}/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error removing book:', error);
    }
  }

  return (
    <div className="App">
       <header className="App-header">
        <h1>Book List App</h1>
        <p>This is a simple app to manage your book list.</p>
      </header>
      <BookList books = {books} deleteBook={deleteBook} />
      <AddBookForm addBook={addBook} />
    </div>
  );
}

export default App;
