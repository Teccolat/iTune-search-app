import React from 'react'
import Result from './Result';
import Header from './Header';

const Search = ({
      handleSubmit,
      term,
      setTerm,
      setMedia,
      inputRef,
      output,
      setFavourites,
      favourites

   }) => {
   // Array containing objects representing each media type and their corresponding value
   const media = [
      {type: 'All media', value: 'all'},
      {type: 'Movie', value: 'movie'},
      {type: 'Podcast', value: 'podcast'},
      {type: 'Music', value: 'music'},
      {type: 'Music video', value: 'musicVideo'},
      {type: 'Audio book', value: 'audiobook'},
      {type: 'Short film', value: 'shortFilm'},
      {type: 'TV show', value: 'tvShow'},
      {type: 'Software', value: 'software'},
      {type: 'Ebook', value: 'ebook'}
   ];

   return (
      <>
      <div className='header-section'>
      <Header/>
      </div>
      <div className='search-and-output'>
      <div className='search-container-section'>
      <div className='search-container'>
         {/* On form submit run 'handleSubmit' */}
         <form>
            <form className='search-box'>
               {/* Search box where a term is entered that the user wants to search for */}
               <input
                  ref={inputRef}
                  type='text'
                  className='search-bar'
                  placeholder='Search here...'
                  name='term'
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
               />
            </form>
            <form className='filter'>
               {/* Dropdown containing a list of media types */}
               <select onChange={(e) => setMedia(e.target.value)}>
                  {/* Map through media array to create a list of options to select from */}
                  {media && media.map((media) => (
                     <option key={media.value} value={media.value}>
                        {media.type}
                     </option>
                  ))}
               </select>
            </form>
            <form className='submit-btn'>
               {/* Submit button that will run the search */}
               <button onClick={handleSubmit}>
                  Search
               </button>
            </form>
         </form>
        </div>
      </div>
      <div className='output-container-section'>
      <Result output={output} setFavourites={setFavourites} favourites={favourites}/>
      </div>
      </div>
      </>
   )
}

export default Search
