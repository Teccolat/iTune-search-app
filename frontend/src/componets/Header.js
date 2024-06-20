import React, { useState } from 'react'
// Import react-bootstrap components
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// Import components
import Help from './Help'


const Header = ({favourites}) => {

   //state to control the content of help instruction
   const [showHelp, setShowHelp] = useState(false);

   // The method below set the help/instruction button set
   const handleHelpShow = () =>{
      console.log(showHelp)
      showHelp? setShowHelp(false): setShowHelp(true)
    };// 

   return (
      <>
      <div header-section>
         <div className='header-container'>
            <div className='help-button'>
               {/* 'Help' button to show the help sidebar */}
               <Button variant='success'  onClick={handleHelpShow} >Help</Button>
            </div>
         
            <div data-testId="HeaderTitle" className='header'>
               {/* Heading */}
               iTunes Search Engines
            </div>
            <div className='favourite-button'>
               {/* 'Favourites' button to take you to the page that displays your list of favourite */}
               <Link to='/favourite'>
                  <Button variant='success'>Favourites</Button>
               </Link>
            </div>
      </div>
      </div>
       {/* 'Help' component that contains the instruction on how to use the app */}
      { showHelp &&
          <Help handleHelpShow={handleHelpShow} showHelp={showHelp}/>
          }
      </>
   )
}

export default Header
