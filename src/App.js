import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import axios from "axios";
import Buttons from "./components/Buttons";
import "./App.css";

export default function App() {
  const [images, setImages] = React.useState([]);
  const [term, setTerm] = React.useState("");
  const [title, setTitle] = React.useState("animals");

  const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID 7qwSTxmAHuH-l4KMo1yRTHxBpy-yXRm1-Q2dT08loZA",
      },
      params: {
        query: term,
      },
    });
    return response.data.results;
  };

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  useEffect(async () => {
    const result = await searchImages(title);
    setImages(result);
  }, []);

  return (
    <div className="main">
      <SearchBar
        onSubmit={handleSubmit}
        term={term}
        setTerm={setTerm}
        setTitle={setTitle}
      />
      <Buttons
        searchImages={searchImages}
        setImages={setImages}
        setTitle={setTitle}
      />
      <ImageList images={images} title={title} />
    </div>
  );
}
