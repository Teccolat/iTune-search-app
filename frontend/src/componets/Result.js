import React from "react";
import Item from "./Item";

function Result({ output, setFavourites, favourites }) {
  return (
    <div className="output-container">
      {/* If the results does not equal undefined */}
      {output.results !== undefined ? (
        <>
          {/* Display the item when there is more than one */}
          {output.resultCount !== 0 ? (
            <>
              {/* ...then list the output items... */}
              <div className="output-items">
                {/* Map through the output and display each item */}
                {output &&
                  output.results.map((item) => (
                    // Component representing each item
                    <Item
                      item={item}
                      key={
                        // If there is a 'trackId' then use 'trackId' as the key...
                        item.trackId
                          ? item.trackId
                          : item.artistId && item.collectionId
                          ? Number(item.artistId) + Number(item.collectionId)
                          : item.artistId
                          ? item.artistId
                          : item.collectionId
                      }
                      setFavourites={setFavourites}
                      favourites={favourites}
                    />
                  ))}
              </div>
            </>
          ) : (
            <>
              {/*show error text */}
              <div className="error-text">
                Sorry, no results were found for your search.
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/*show welcome text */}
          <div className="welcome-text">
            Welcome! Please enter a search term above and click 'Search'.
          </div>
        </>
      )}
    </div>
  );
}

export default Result;
