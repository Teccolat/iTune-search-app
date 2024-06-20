import React from 'react'

// Import items from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';

// Display instruction when user toggle 'More info'
function Help({handleHelpShow, showHelp }) {

    return (
        <div className='help-container'>
            {/* The content of the instruction */}
            <div className="show-instruction-popup" style={showHelp ? {display:'inline'} : {}}>
                <div className='show-instruction-popup-header'>
                    <div className='show-instruction-title'>Instruction</div>
                    <button className='closeInstructionsBtn' onClick={handleHelpShow}>&times;</button>
                </div>
                <div className='instruction-body'>
                    <p>  
                        The application allow user to search Music, Movie, Podcast, Music Video,
                        Audio Book, Short films, TV show, Software and Ebook from Apple iTunes database.   
                        The top 30 search result is display and each item could be saved locally and could be saved for later view.
                    </p>

                    <div className='title'>To search:</div>
                    <ul>
                           <li>
                              Enter a search term within the search box
                           </li>
                           <li>
                              Select the type of media you would like to search for, i.e. movie, podcast, music, music video, audio book, short film, TV show, software, ebook or all from the drop-down menu
                           </li>
                           <li>
                              Press 'Search'
                           </li>
                    </ul>

                    <div className='title'>To add to favourites:</div>
                     <ul>
                           <li>
                              Find the item you would like to add to favourites
                           </li>
                           <li>
                              Click the <FontAwesomeIcon icon={faSolidHeart} /> icon next to that item to add it
                           </li>
                     </ul>
               
                </div>
            </div>
        </div>
    );
  }

// Sent to the app file.
export default Help;