
import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const accesKey=import.meta.env.VITE_APP_ACCESS_KEY

function Photos() {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios(
        `https://api.unsplash.com/photos/?client_id=${accesKey}&page=${page}`
      );
      const data = await response.data;
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return (
    <div>
      <h1>Unsplash Photos</h1>
      <hr />
      <InfiniteScroll
        dataLength={photos.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="img-container">
          {photos.map((photo) => (
            <div className="img-cover" key={photo.id}>
              <img
                src={photo.urls.regular}
                alt={photo.alt_description}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Photos