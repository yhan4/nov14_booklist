function BookList ({books}) {
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