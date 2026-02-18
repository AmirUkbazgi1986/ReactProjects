import Book from "./Book";
import { useLibrary } from "./LibraryContext";

function Category({ categoryName, books }) {
  const { borrowedBooks, borrowBook, returnBooks } = useLibrary();
  console.log(borrowedBooks);

  const isBorrowed = (title) => {
    return borrowedBooks.includes(title);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h3 className="text-xl font-bold ">
        Category:<span className="text-blue-700"> {categoryName}</span>{" "}
      </h3>
      <ul className="flex flex-col  items-center gap-4 max-w-xl">
        {books?.map((book) => (
          <li
            key={book.id}
            className="flex flex-col  items-center gap-2 max-w-xl"
          >
            <Book book={book} />
            <div>
              <button
                onClick={() => borrowBook(book.title)}
                className={`py-2 px-4 cursor-pointer ${
                  isBorrowed(book.title)
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
                disabled={isBorrowed(book.title)}
              >
                Borrow
              </button>
              <button
                onClick={() => returnBooks(book.title)}
                className={`py-2 px-4 cursor-pointer ${
                  !isBorrowed(book.title)
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
                disabled={!isBorrowed(book.title)}
              >
                Return
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
