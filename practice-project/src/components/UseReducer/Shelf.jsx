import Category from "./Category";
import LibraryContextProvider from "./LibraryContext";

function Shelf({ categoryName, books }) {
  return (
    <div className="min-w-4xl bg-red-300 flex flex-col gap-2 p-4 justify-center items-center">
      <h2 className="text-2xl font-bold ">Shelf</h2>
      <LibraryContextProvider>
        <Category categoryName={categoryName} books={books} />
      </LibraryContextProvider>
    </div>
  );
}

export default Shelf;
