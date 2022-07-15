const SearchSongForm = () => {
  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" autoComplete="off" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchSongForm;