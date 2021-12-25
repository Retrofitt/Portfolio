import { Image } from "antd";
import "antd/dist/antd.css";

export default function Photography(props) {
  const { photos } = props;

  return (
    <div className="photo-container">
      <div className="photo-container-header"></div>
      <div className="photo-content">
        {photos.map((photo, i) => {
          return (
            <div key={i} className="photos">
              <div>
                <Image.PreviewGroup get>
                  <Image width={200} src={photo.image} />
                </Image.PreviewGroup>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
