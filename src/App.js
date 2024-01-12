import "./App.css";
import "./Components/images.css";
import { Gallery } from "./Components/Images";
import images from "./Data.js";
import { useState } from "react";

function App() {
  const [image, setImage] = useState();

  function handleImage(imgIndx) {
    console.log(imgIndx);
    setImage(imgIndx);
  }

  function handleNext() {
    setImage((prevImage) => (prevImage + 1) % images.length);
  }

  function handlePrev() {
    setImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  }

  return (
    <div className="App">
      <div id="img-container">
        {image !== undefined && (
          <div id="change-image">
            {images.length !== 0 && image !== 0 && (
              <button
                onClick={() => handlePrev()}
                className="prev-button gallery-image"
              >
                prev
              </button>
            )}
            <img src={images[image].path} alt="" />
            {images.length - 1 === image ? (
              " "
            ) : (
              <button
                onClick={() => handleNext()}
                className="next-button gallery-image"
              >
                next
              </button>
            )}
          </div>
        )}

        <div id="bottom-image-container">
          {images.map((item, index) => (
            <Gallery
              key={item.title}
              index={index}
              title={item.title}
              path={item.path}
              handleImage={handleImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
