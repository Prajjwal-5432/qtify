import React, { useState, useEffect } from "react";
import "./AlbumGrid.css";
import axios from "axios";
import Card from "../Card/Card";

const AlbumGrid = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="album-header">
        <p>Top Albums</p>
        <button>
          <p>Collapse</p>
        </button>
      </div>
      <div className="album">
        {albums.map((album) => {
          return <Card album={album} key={album.id} />;
        })}
      </div>
    </div>
  );
};

export default AlbumGrid;
