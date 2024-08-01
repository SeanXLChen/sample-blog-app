import React, { useState, useEffect } from 'react';
import { useArticles } from '@/context/ArticlesProvider';

const SearchItems = () => {
  const { articles, setArticles } = useArticles();
  const [searchTerm, setSearchTerm] = useState('');
  const [originalArticles, setOriginalArticles] = useState(articles); // To store the original list

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
  }

  useEffect(() => {
    if (searchTerm === '') {
      setArticles(originalArticles); // If search is empty, reset to the original articles
    } else {
      // Filter articles based on the search term
      const filtered = originalArticles.filter(article =>
        article.title.toLowerCase().includes(searchTerm)
      );
      setArticles(filtered);
    }
  }, [searchTerm, originalArticles, setArticles]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from submitting
    console.log('Search term:', searchTerm);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex w-full mx-auto'>
        <label htmlFor="default-search" className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>Search</label>
        <div className='relative flex-grow'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            placeholder="Search posts"
            className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </div>
      </form>
    </>
  );
};

export default SearchItems;