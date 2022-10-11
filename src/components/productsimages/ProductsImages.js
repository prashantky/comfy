import React, { useState } from "react";

export const ProductsImages = ({ images = [{ url: "" }] }) => {
  const [chooseImages, setchooseImages] = useState(images[0]);
  console.log("hello", images);
  return (
    <>
      <div className="container">
        <div className="row">
          <img src={chooseImages.url} alt="lol" />
          <div className="d-flex ">
            <div className="row">
              <div className="col-4">
                {images.map((item, i) => {
                  return (
                    <>
                      <div className="ch">
                        <img
                          src={item.url}
                          alt={item.filename}
                          key={i}
                          onClick={() => setchooseImages(images[i])}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
