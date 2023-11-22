import { useState } from "react";

function AddBookForm({ addBook }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleAuthorChange = (e) => {
      setAuthor(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if both title and author are provided
      if (title.trim() === '' || author.trim() === '') {
        alert('Please provide both title and author!');
        return;
      }
  
      const newBook = {
        id: new Date().getTime(), 
        title: title,
        author: author,
      };
  
      // Call the addBook function to update the list of books in the parent component
      addBook(newBook);
  
      setTitle('');
      setAuthor('');
    };
  
    return (
      <div className="addBook">
        <h2>Add a Book</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
          
          <label>
            Author:
            <input type="text" value={author} onChange={handleAuthorChange} />
          </label>
          
          <button className="addButton" type="submit">Add Book</button>
        </form>
      </div>
    );
  }

export default AddBookForm;