import React from "react";
import food1 from "../../../../Images/BottomBanner/Organic_Food_Banner_1.jpg";
import food2 from "../../../../Images/BottomBanner/Organic_Food_Banner_2.jpg";
import food3 from "../../../../Images/BottomBanner/Organic_Food_Banner_3.jpg";

const banner = [
  {
    image: food1,
  },
  {
    image: food3,
  },
  {
    image: food2,
  },
];

const OfferBanners = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center my-10 md:mx-auto">
      {banner?.map((item, i) => (
        <div key={i} className="relative hover:scale-105 duration-1000"
        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}>
          <img className="w-full rounded-md" src={item?.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default OfferBanners;
