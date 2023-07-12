import BookShow from "./BookShow";

function BookList({ books }) {

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return (
        <div className="book-list">{renderedBooks}</div>
    ); // asa e corect, sau daca ai doar un rand, cum a foost mai devreme

}

export default BookList;