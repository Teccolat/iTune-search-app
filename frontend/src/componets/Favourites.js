import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import FavItem from "./FavItem";

const Favourites = ({ favourites, setFavourites }) => {
  const [deleteFav, setDeleteFav] = useState(false);

  console.log("I'm in favourite page");

  // Rerender favourite component when user remove FavItem from the favorite component
  useEffect(() => {
    console.log("This is fav item componet");
    setDeleteFav(false);
  }, [deleteFav]);

  return (
    <div className="favourites-container">
      {/* Header section of the page */}
      <div className="header-section">
        <div className="header-container">
          <div className="back-btn">
            {/* Button to go back to Home */}
            <Link to="/">
              <Button variant="success">Back</Button>
            </Link>
          </div>
          <div className="header">Your Favourites</div>
          {/* Spacer is used to ensure that the title of the header is in the center of the page */}
          <div className="spacer"></div>
        </div>
      </div>
      <div className="favourites">
        {/* If 'favourites' equals undefined... */}
        {favourites === undefined ? (
          <div className="empty">
            There are currently no favourites to display.
          </div>
        ) : (
          // ...else display a list of favourites
          <div className="fav-items">
            {/* Map though 'favourites' and display  each item */}
            {favourites &&
              favourites.map((item) => (
                // Component representing each item in 'favourites'
                <FavItem
                  item={item}
                  key={
                    //unique id is constracted by using trackid or (collectionId and artistId) or Just artistId
                    item.trackId
                      ? item.trackId
                      : item.artistId && item.collectionId
                      ? Number(item.artistId) + Number(item.collectionId)
                      : item.artistId
                      ? item.artistId
                      : item.collectionId
                  }
                  favourites={favourites}
                  setDeleteFav={setDeleteFav}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
