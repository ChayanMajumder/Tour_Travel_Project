import React from "react";
import NatureVideo from "../assets/videos/Nature_Video.mp4"
import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import BannerImg from "../components/BannerImg/BannerImg";
import BannerImage from "../assets/Images/BannerImg.jpg"
import Blogs from "../components/Blogs/Blogs";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";

function Home() {
  return (
    <>
      <div className="">
        <div className="relative h-[700px]">
          <video autoPlay loop muted className="absolute top-0 right-0 h-[700px] w-full object-cover z-[-1]">
            <source src={NatureVideo}/>
          </video>
          <Hero />
        </div>
        <Places />
        <BannerImg img={BannerImage} />
        <Blogs />
        <Banner />
        <BannerImg img={BannerImage} />
        <Testimonial />
      </div>
    </>
  );
}

export default Home;
