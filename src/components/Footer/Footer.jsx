import React from "react";
import NatureVideo from "../../assets/videos/Nature_Video.mp4";
import { FaLocationArrow, FaMobile, FaInstagram, FaFacebook, FaTwitter, FaLinkedin  } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Best Places",
      link: "/places",
    },
    {
      id: 4,
      title: "Blog",
      link: "/blog",
    },
  ];
  return (
    <>
      <div className="py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="h-full absolute right-0 top-0 overflow-hidden w-full object-cover z-[-1]"
          src={NatureVideo}
        ></video>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h5 className="flex items-center gap-3 text-3xl font-bold text-justify sm:text-left">
                Tour & Travel
              </h5>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto praesentium earum vel voluptatem, totam facere iure
                quos aperiam. Mollitia id corporis nam cupiditate nemo est
                excepturi quo fugit, nesciunt maiores.
              </p>
              <br />
              <div className="flex items-center gap-3 mt-3">
                <FaLocationArrow />
                <p>Kolkata, West Bengal</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobile />
                <p>+91 7076720062</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                  <FaInstagram className="text-3xl"/>
                  </a>
                  <a href="#">
                  <FaFacebook  className="text-3xl"/>
                  </a>
                  <a href="#">
                  <FaTwitter  className="text-3xl"/>
                  </a>
                  <a href="#">
                  <FaLinkedin  className="text-3xl"/>
                  </a>
                </div>
              </div>
            </div>
            {/* footer links start  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h6 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h6>
                  <ul className="flex flex-col gap-3">
                    {
                      footerLinks.map(({title, link, id}) => {
                        return (
                          <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700" key={id}>
                              <Link to={link}>
                              <span>{title}</span>
                              </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>

              <div>
                <div className="py-8 px-4">
                  <h6 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h6>
                  <ul className="flex flex-col gap-3">
                    {
                      footerLinks.map(({title, link, id}) => {
                        return (
                          <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700" key={id}>
                              <Link to={link}>
                              <span>{title}</span>
                              </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>

              <div>
                <div className="py-8 px-4">
                  <h6 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h6>
                  <ul className="flex flex-col gap-3">
                    {
                      footerLinks.map(({title, link, id}) => {
                        return (
                          <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700" key={id}>
                              <Link to={link}>
                              <span>{title}</span>
                              </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
            {/* footer links end */}
          </div>
          {/* footer copyright section  */}
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white rounded-b-xl">@copyright 2024 all rights reserved || Made with by Chayan Majumder</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
