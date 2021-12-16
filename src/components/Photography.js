import { useState } from "react";
import { Image } from "antd";
import "antd/dist/antd.css";

export default function Photography(props) {
  const { photos } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="photo-container">
      {photos.map((photo, i) => {
        return (
          <div key={i} className="photos">
            <Image.PreviewGroup>
              <Image width={200} src={photo.image} />
            </Image.PreviewGroup>
          </div>
        );
      })}
    </div>
  );
}
