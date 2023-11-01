export default function ImageShow({ image }) {
  return (
    <div className="image-div">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
