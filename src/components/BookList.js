function BookList () {
    const books = [
        {id: 1, title: 'Book 1', author: 'Author 1'},
        {id: 2, title: 'Book 2', author: 'Author 2'},
        {id: 3, title: 'Book 3', author: 'Author 3'},
    ];

    return (
        <div>
            <ul>
                {books.map (item => (
                    <li key = {item.id}>
                        <strong>{item.title}</strong> by {item.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;