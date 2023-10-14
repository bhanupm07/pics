import React from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

export default function App() {
    const [images, setImages] = React.useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    )
}