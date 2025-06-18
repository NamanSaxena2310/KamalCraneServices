import React from "react";
import ImageSlider from "../components/ImageSlider";
import CraneCard from "../components/CraneCard";
import Heading from "../components/Heading";
import CraneCardContainer from "../components/CraneCardContainer";
import GallerySlider from "../components/GallerySlider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <ImageSlider />
      <Heading text1={"Crane"} text2={"Rentals"} />
      <CraneCardContainer />
      <Heading text1={"Our"} text2={"Gallery"} />
      <GallerySlider/>
      <Footer/>
    </>
  );
};

export default Home;
