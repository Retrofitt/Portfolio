import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { galleryPhotos } from "../data/photos";
import "../styles/styles.css";

export default function Photo(props) {
  const { photos = galleryPhotos } = props;
  const [photo, setPhoto] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (photos && photos[id]) {
      setPhoto(photos[id].image);
    }
  }, [id, photos]);

  return (
    <div className="single-photo">
      {photo && <img src={photo} alt={`Photo ${id}`} />}
    </div>
  );
}
