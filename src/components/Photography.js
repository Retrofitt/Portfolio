import { Image } from "antd";
import "antd/dist/antd.css";

export default function Photography(props) {
  const { photos } = props;

  return (
    <div className="photo-container">
      <div className="photo-container-header"></div>
      <div className="photo-content">
        {/* {photos.map((photo, i) => {
          return (
            <div key={i} >
              <div>
                <Image.PreviewGroup get>
                  <Image width={200} src={photo.image} />
                </Image.PreviewGroup>
              </div>
            </div>
          );
        })} */}
        <Image.PreviewGroup>
          <Image width={200} src={photos[0].image} />
          <Image width={200} src={photos[1].image} />
          <Image width={200} src={photos[2].image} />
          <Image width={200} src={photos[3].image} />
          <Image width={200} src={photos[4].image} />
          <Image width={200} src={photos[5].image} />
          <Image width={200} src={photos[6].image} />
          <Image width={200} src={photos[7].image} />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
