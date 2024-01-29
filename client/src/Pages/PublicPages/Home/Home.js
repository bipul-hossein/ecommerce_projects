import React from "react";
import Banner from "./Banner/Banner";
import LatestProducts from "./LatestProducts/LatestProducts";
import TopProducts from "./TopProducts.js/TopProducts";
import TopCategories from "./TopCategories/TopCategories";
import Faq from "./FAQ/Faq";
import OfferBanners from "./OfferBanners/OfferBanners";
import MainFacilities from "../../../components/public/mainFacilities/MainFacilities";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useProductsData from "../../../hooks/useProductsData";
import useCategoryData from "../../../hooks/useCategoryData";
import useMainCategories from "../../../hooks/useMainCategories";
import PreLoader from "../../../components/loader/preLoader/PreLoader";
// import PreLoader2 from "../../../components/loader/preLoader/PreLoader2";
// import Newsletter from "./Newsletter/Newsletter";
// import AvailableAreas from "./AvailableAreas/AvailableAreas";
// import TopSellingAndTrending from "./TopSellingAndTrending/TopSellingAndTrending";

const Home = () => {
  const { user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [products] = useProductsData();
  const [categoryData] = useCategoryData();
  const [mainCategories] = useMainCategories();
  // console.log(categoryData.length);

  if (isAdminLoading) {
    <p>waiting...</p>;
  }
  // if (!categoryData.length) {
  //  return <PreLoader />;
  // }

  window.scrollTo(0, 0);
  return (
    <div>
      <Banner />
      {/* <TopCategories /> */}
      <TopProducts />
      <LatestProducts />
      <OfferBanners />
      <MainFacilities />
      {/* <TopSellingAndTrending />
      <AvailableAreas />
      <Newsletter /> */}
      <Faq />
    </div>
  );
};

export default Home;
