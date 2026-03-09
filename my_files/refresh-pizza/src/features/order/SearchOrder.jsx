import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='search order #'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-24 rounded-full m-1 bg-green-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50 sm:w-56 sm:focus:w-72'
      />
    </form>
  );
}

export default SearchOrder;
