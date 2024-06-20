// Import components from react
import { useState, useEffect, useRef } from "react";
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Search from './componets/Search';
import Faviourites from './componets/Favourites';

import './App.css';


const App= () => {

  const [term, setTerm] = useState('');// useState to save the search term
  const [media, setMedia] = useState('all');// useState to save the media type
  const [termfromButtonClick, setTermfromButtonClick] = useState('');
  const [mediafromButtonClick, setMediafromButtonClick] = useState('');
  const [output, setOutput] = useState({});// useState to save the search results
  const [favourites, setFavourites] = useState(()=>{
      const localValue=localStorage.getItem("favourites")
      if (localValue==null) return[]
      return JSON.parse(localValue)
    });// useState to save the list of favourites across the page

    const inputRef = useRef();
  
  // Reset favourites Localstorage with latest favourites update 
  useEffect(() => {
    console.log("Favourite list is update")
    localStorage.setItem("favourites", JSON.stringify(favourites))

  },[favourites])

  // Handle the call from submit button
  const handleSubmit = (e) => {
     e.preventDefault();
    setTermfromButtonClick(term);
    setMediafromButtonClick(media);
  };

  //Reload the search page every time user submit a search
  useEffect(() => {

  //Get fecth API call 
    const fetchResult = async () => {
      // Make the API call by sending the search term and media type to the backend using key and value pairs
      const result = await fetch(`/search?term=${termfromButtonClick}&media=${mediafromButtonClick}`);
      const data = await result.json();// Change the result into json format
      setOutput(data.response);// Save the fetched data in 'output'
   }
   localStorage.setItem("favourites", JSON.stringify([]))
   fetchResult();
  }, [termfromButtonClick, mediafromButtonClick]);

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={
        < Search term={term} handleSubmit={handleSubmit} setTerm={setTerm} setMedia={setMedia} inputRef={inputRef}
        output={output} setFavourites={setFavourites} favourites={favourites}/>} 
        />
         <Route path="/favourite" element={<Faviourites setFavourites={setFavourites} favourites={ favourites }/>} />
      </Routes>
      </Router>
    </div>)
}

export default App
