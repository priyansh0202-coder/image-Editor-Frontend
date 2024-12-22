import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import Canvas from "./components/Canvas";
import axios from "axios";
import "./style.css";

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null);
  // console.log(maskImage, "state response")

  const handleImageUpload = async (image) => {
    try {
      const formData = new FormData();
      const blob = await fetch(image).then((res) => res.blob());
      formData.append("file", blob, "original.png");

      const response = await axios.post("http://127.0.0.1:8000/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadedImage(`http://127.0.0.1:8000${response.data.file_url}`);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleExportMask = async (mask) => {
    try {
      const formData = new FormData();
      const blob = await fetch(mask).then((res) => res.blob());
      formData.append("file", blob, "mask.png");

      const response = await axios.post("http://127.0.0.1:8000/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data.file_url, "post response check")
      const maskUrl = `http://127.0.0.1:8000${response.data.file_url}`;
      // const maskUrl = response.data.file_url
      console.log("Mask Image URL:", maskUrl);
      setMaskImage(maskUrl);
    } catch (error) {
      console.error("Error uploading mask:", error);
    }
  };


  return (
    <div className="app">
      <h1>Image Inpainting Widget</h1>
      <ImageUpload onUpload={handleImageUpload} />
      {uploadedImage && (
        <Canvas uploadedImage={uploadedImage} onExport={handleExportMask} />
      )}
      {uploadedImage && maskImage && (
        <div className="image-display">
          <div>
            <h3>Original Image:</h3>
            <img src={uploadedImage} alt="Original" />
          </div>
          <div>
            <h3>Mask Image:</h3>
            <img src={maskImage} alt="Mask" style={{ backgroundColor: "black" }} />
            {/* <img src={`http://127.0.0.1:8000/uploads/mask.png`} alt="test mask" /> */}

          </div>
        </div>
      )}
    </div>
  );
};

export default App;
