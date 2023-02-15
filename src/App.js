import { useState } from "react";
import searchImage from "./api/api";
import ImageList from "./components/Imagelist/ImageList";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [image, setImage] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImage(term);
    setImage(result);
  };
  return (
    <div className="App">
      <Sidebar submit={handleSubmit} />
      <ImageList Image={image} />
    </div>
  );
}

export default App;
