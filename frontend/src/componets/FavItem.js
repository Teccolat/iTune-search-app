import React from "react";
// Import components from react-bootstrap
import { Button } from "react-bootstrap";
// Import items from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash as faSolidTrash } from "@fortawesome/free-solid-svg-icons";

const FavItem = ({ item, favourites, setDeleteFav }) => {
  const id =
    // unique id is constracted by using trackid or (collectionId and artistId) or Just artistId
    item.trackId
      ? item.trackId
      : item.artistId && item.collectionId
      ? Number(item.artistId) + Number(item.collectionId)
      : item.artistId
      ? item.artistId
      : item.collectionId;

  // removeItem is called to delete the item from favourite section
  const removeItem = () => {
    if (favourites.length > 0) {
      const index = favourites.findIndex((obj) => {
        // unique id is constracted by using trackid or (collectionId and artistId) or Just artistId
        const objId = obj.trackId
          ? obj.trackId
          : obj.artistId && obj.collectionId
          ? Number(obj.artistId) + Number(obj.collectionId)
          : obj.artistId
          ? obj.artistId
          : obj.collectionId;

        return objId === id;
      });

      if (index !== -1) {
        favourites.splice(index, 1);
        // Set the local storage with the latest favourites list
        localStorage.setItem("favourites", JSON.stringify(favourites));
        //Set the deleteFav flag too true, in order to rerender the favItem component
        setDeleteFav(true);
      }
    }
  };

  // Function that handles removing an item from 'favourites'
  const handleRemove = (e) => {
    e.preventDefault(); // Prevent default actions
    removeItem(); // Run 'removeItem' to remove the item from 'favourites'
  };

  // Function to determine which URL to use when 'View more' is clicked
  // If the item has a 'trackViewUrl' then use 'trackViewUrl', else use 'collectionViewUrl'
  const viewMoreUrl = item.trackViewUrl
    ? item.trackViewUrl
    : item.collectionViewUrl;

  // Function that handles what happens then the 'View more' button is clicked
  const handleViewMore = () => {
    // This creates a new tab and takes you to a page which allows you to view more info about the item
    window.open(viewMoreUrl);
  };

  return (
    <div className="fav-item">
      {/* Section that should display the item's artwork */}
      <div className="img">
        {/* If the item has artwork then display the artwork, else display the text */}
        {item.artworkUrl100 ? (
          <img src={item.artworkUrl100} alt="media artwork" />
        ) : (
          <div className="img-text">No image</div>
        )}
      </div>
      {/* Section that will display the item's info */}
      <div className="item-info">
        {/* If there is no 'trackName' then use 'collectionName', else use 'trackName' */}
        {!item.trackName ? (
          <div className="collection-name">
            <span>Name:</span> {item.collectionName}
          </div>
        ) : (
          <div className="track-name">
            <span>Name:</span> {item.trackName}
          </div>
        )}
        <div className="artist-name">
          <span>Artist:</span> {item.artistName}
        </div>
        {/* If the item has 'kind' then display 'kind', else display 'wrapperType' */}
        {item.kind ? (
          <div className="kind">
            <span>Type:</span> {item.kind}
          </div>
        ) : (
          <div className="wrapper-type">
            <span>Type:</span> {item.wrapperType}
          </div>
        )}
      </div>
      {/* Section that contains the buttons */}
      <div className="btns">
        <div className="remove-btn">
          {/* Button that removes the item from 'favourites' when clicked */}
          <button onClick={handleRemove}>
            <FontAwesomeIcon icon={faSolidTrash} />
          </button>
        </div>
        <div className="view-more-btn">
          <Button variant="success" onClick={handleViewMore}>
            View more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FavItem;
