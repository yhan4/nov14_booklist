function BookList ({books, deleteBook}) {
    const handleDeleteBook = (id) => {
        deleteBook(id)
    }
    return (
        <div className="booklist">
            <ul>
                {books.map (item => (
                    <li key = {item.id}>
                        <strong>{item.title}</strong> by {item.author}
                        <button className='deleteButton' onClick = {() => handleDeleteBook(item.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;