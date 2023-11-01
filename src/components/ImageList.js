import ImageShow from "./ImageShow";
import "./ImageList.css";
import { useState } from "react";

export default function ImageList({ images, title }) {
  // const [title, setTitle] = useState("animals");

  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return (
    <div className="image-list-main">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="image-list">{renderedImages}</div>
    </div>
  );
}
