import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const testimonialData = [
    {
      id: 1,
      name: "Sudip",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eaque aut distinctio rem aliquam? Rerum dolore eum sapiente voluptatem consequuntur vitae aliquam, accusantium omnis vel corporis ducimus debitis animi facilis!",
    },
    {
      id: 2,
      name: "Sudip",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eaque aut distinctio rem aliquam? Rerum dolore eum sapiente voluptatem consequuntur vitae aliquam, accusantium omnis vel corporis ducimus debitis animi facilis!",
    },
    {
      id: 3,
      name: "Sudip",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eaque aut distinctio rem aliquam? Rerum dolore eum sapiente voluptatem consequuntur vitae aliquam, accusantium omnis vel corporis ducimus debitis animi facilis!",
    },
    {
      id: 4,
      name: "Sudip",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eaque aut distinctio rem aliquam? Rerum dolore eum sapiente voluptatem consequuntur vitae aliquam, accusantium omnis vel corporis ducimus debitis animi facilis!",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial header section start  */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h3 className="text-3xl font-bold">Testimonial</h3>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              obcaecati deleniti nisi odit perferendis, eaque nihil dolorum
              officiis fugit atque placeat in voluptas tempora inventore quae
              aperiam laboriosam sunt recusandae.
            </p>
          </div>
          {/* testimonial header section end */}
          {/* testimonial section start  */}
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text }) => {
              return (
                <div key={id} className="my-6">
                  <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                    <h4 className="text-xl font-bold">{name}</h4>
                    <p className="text-gray-500 text-sm">{text}</p>
                    <p className="text-black/20 text-9xl font-serif absolute -top-6 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
          {/* testimonial section end */}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
