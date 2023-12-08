import React from "react";
import ImageWithButton from "../components/common/ImageWithButton";
import ImageWithoutButton from "../components/common/ImageWithoutButton";
import { homepageCardData } from "../components/common/data";

const HomePage = () => {
  return (
    <>
      <ImageWithButton />
      <div className="flex  flex-wrap  justify-between ">
        {homepageCardData.map((item, index) => {
          return (
            <div className="mx-auto md:mx-0">
              <ImageWithoutButton
                key={index}
                name={item.name.toUpperCase()}
                img={item.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
