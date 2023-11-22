import '../styles/App.css';
import BookList from './BookList'

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <h1>Book List App</h1>
        <p>This is a simple app to manage your book list.</p>
      </header>
      <BookList />
    </div>
  );
}

export default App;
