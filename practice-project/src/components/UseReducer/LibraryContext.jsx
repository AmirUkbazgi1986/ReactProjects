import { createContext, useContext, useReducer, useState } from "react";
import { libraryFunction } from "./LibraryReducer";

export const LibraryContext = createContext({});

function LibraryContextProvider({ children }) {
  const [borrowedBooks, dispatch] = useReducer(libraryFunction, []);

  function borrowBook(name) {
    dispatch({ type: "borrow-book", title: name });
  }

  function returnBooks(name) {
    dispatch({ type: "return-book", title: name });
  }
  return (
    <LibraryContext.Provider value={{ borrowedBooks, borrowBook, returnBooks }}>
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (context === undefined)
    throw new Error("context is being used outside of the provider!");
  return context;
}

export default LibraryContextProvider;
