import React from "react";
import { Image } from "antd";
import "antd/dist/antd.css";
import { galleryPhotos } from "../data/photos";

export default function Photography() {
  return (
    <div className="photo-container">
      <div className="photo-container-header"></div>
      <div className="photo-content">
        <Image.PreviewGroup>
          {galleryPhotos.map((photo) => (
            <Image
              key={photo.id}
              width={200}
              src={photo.image}
              alt={photo.alt}
            />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
