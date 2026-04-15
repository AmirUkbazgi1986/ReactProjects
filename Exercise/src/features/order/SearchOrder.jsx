function SearchOrder() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search order #"
        className="bg-yellow-100 px-4 py-2 rounded-full text-sm w-28 sm:w-64 sm:focus:w-72 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none transition-all duration-300 focus:ring-opacity-50"
      />
    </form>
  );
}

export default SearchOrder;
