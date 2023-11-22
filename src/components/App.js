import '../styles/App.css';
import BookList from './BookList'

function App() {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ];

  return (
    <div className="App">
       <header className="App-header">
        <h1>Book List App</h1>
        <p>This is a simple app to manage your book list.</p>
      </header>
      <BookList books = {books} />
    </div>
  );
}

export default App;
