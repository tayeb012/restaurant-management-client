import gsap from "gsap";
import { Draggable, Flip, MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";

const Banner = () => {
  // const [loop, setLoop] = useState(true);

  gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

  useEffect(() => {
    gsap.to(".tittle", { duration: 2, x: -600, delay: 1 });
    gsap.to(".burger", { duration: 2, x: 700 });
  }, []);

  return (
    <div>
      <div className="carousel w-full h-fit">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/blank-banner-oktoberfest-grunge-with-pretzel-blackboard-background_125540-3602.jpg?t=st=1700494475~exp=1700498075~hmac=2a2a659c54e75d344691bd55c2dd3d9a9430e74e44005bb967ef88f72a6d255f&w=1060"
            className="w-full"
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="flex justify-between items-center text-white space-y-7 pl-12 ">
              <div className="z-20">
                <img
                  className="w-3/4 burger"
                  src="https://as2.ftcdn.net/v2/jpg/06/56/59/27/1000_F_656592775_jMHiWoHTHxWXc7EEYgsgbWN6duSRAlpp.webp"
                  alt="burger"
                />
              </div>
              <div className="tittle">
                <h2 className="text-6xl font-bold ">
                  Epicurean <br /> Elegance Haven
                </h2>
                <p>
                  Embark on a culinary journey where each dish narrates a tale
                  of craftsmanship. <br /> Explore modern sophistication and
                  timeless artistry at our Epicurean Elegance Haven, where every
                  visit promises gastronomic delight.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-20 bottom-10 ">
            <a href="#slide4">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❮
                </span>
              </button>
            </a>
            <a href="#slide2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❯
                </span>
              </button>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/85/08/36/1000_F_585083695_6wGJr5fG4L4oc15xEipqzgvLYaiyEbFT.jpg"
            className="w-full "
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">Epicurean Elegance Haven</h2>
              <p>
                Embark on a culinary journey where each dish narrates a tale of
                craftsmanship. Explore modern sophistication and timeless
                artistry at our Epicurean Elegance Haven, where every visit
                promises gastronomic delight.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-20 bottom-10 ">
            <a href="#slide1">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❮
                </span>
              </button>
            </a>
            <a href="#slide3">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❯
                </span>
              </button>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/06/30/87/32/1000_F_630873229_IZJVYznXC7jbhyWbrcPzgmLELisqgCa0.jpg"
            className="w-full "
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">Epicurean Elegance Haven</h2>
              <p>
                Embark on a culinary journey where each dish narrates a tale of
                craftsmanship. Explore modern sophistication and timeless
                artistry at our Epicurean Elegance Haven, where every visit
                promises gastronomic delight.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-20 bottom-10 ">
            <a href="#slide2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❮
                </span>
              </button>
            </a>
            <a href="#slide4">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❯
                </span>
              </button>
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/36/59/67/1000_F_336596714_KYxkCzJK686f0lon80WIeHOecR3OIy5S.jpg"
            className="w-full "
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">Epicurean Elegance Haven</h2>
              <p>
                Embark on a culinary journey where each dish narrates a tale of
                craftsmanship. Explore modern sophistication and timeless
                artistry at our Epicurean Elegance Haven, where every visit
                promises gastronomic delight.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-20 bottom-10 ">
            <a href="#slide3">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❮
                </span>
              </button>
            </a>
            <a href="#slide1">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❯
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
