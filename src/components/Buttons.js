import "./Buttons.css";

export default function Buttons({ searchImages, setImages, setTitle }) {
  const handleBtnClick = async (e) => {
    const res = await searchImages(e.target.textContent);
    setImages(res);
    setTitle(e.target.textContent);
  };

  return (
    <div className="buttons-div">
      <button onClick={handleBtnClick}>Mountain</button>
      <button onClick={handleBtnClick}>Birds</button>
      <button onClick={handleBtnClick}>Food</button>
      <button onClick={handleBtnClick}>Batman</button>
    </div>
  );
}
