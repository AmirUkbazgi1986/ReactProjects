function CreateUser() {
  return (
    <div>
      <form action="">
        <p className="mb-4 text-sm text-stone-600 md:text-base">
          👋welcome! Please start by telling your name:
        </p>
        <input
          type="text"
          placeholder="Your full name"
          className="border border-stone-200 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring focus:ring-yellow-400 w-72 transition-all duration-300 mb-8 placeholder:text-stone-400 md:px-6 md:py-3"
        />
      </form>
    </div>
  );
}

export default CreateUser;
