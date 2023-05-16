import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

let productsp = [
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  
];
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
  const options = {
    items: 6,
    margin: 30,
    responsiveClass: true,
    nav: true,
    // dots: true,
    autoplay: false,
    smartSpeed: 500,
    slideBy: 3,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      400: {
        items: 1,
        slideBy: 1,
      },
      600: {
        items: 2,
        slideBy: 1,
      },
      700: {
        items: 3,
        slideBy: 2,
      },
      1000: {
        items: 4,
        slideBy: 3,
      },
    },
  };

  const bannerList = [
    { imageUrl: 'https://jegomediadisk.blob.core.windows.net/course-thumbnails/55.jpg', courseId: 55 },
    { imageUrl: 'https://jegomediadisk.blob.core.windows.net/course-thumbnails/63.jpg', courseId: 63 },
    { imageUrl: 'https://jegomediadisk.blob.core.windows.net/course-thumbnails/66.jpg', courseId: 66 },
    
    { imageUrl: 'https://jegomediadisk.blob.core.windows.net/course-thumbnails/55.jpg', courseId: 55 },
    { imageUrl: 'https://jegomediadisk.blob.core.windows.net/course-thumbnails/63.jpg', courseId: 63 },
    { imageUrl: 'https://jegomediadisk.blob.core.windows.net/course-thumbnails/66.jpg', courseId: 66 },
    
    { imageUrl: 'https://jegomediadisk.blob.core.windows.net/course-thumbnails/55.jpg', courseId: 55 },
    { imageUrl: 'https://jegomediadisk.blob.core.windows.net/course-thumbnails/63.jpg', courseId: 63 },
    { imageUrl: 'https://jegomediadisk.blob.core.windows.net/course-thumbnails/66.jpg', courseId: 66 },
  ];

  return (
    <div className="row no-gutters" style={{width: "100%", margin: "0px"}}>
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        <h3 className="text-center">
          <span className="heading float-left w-100">carousel</span>
        </h3>
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
        <div>
          <OwlCarousel
            className="owl-theme"
            loop={false}
            margin={4}
            nav={true}
            navText={[
              '<img src="/images/Arrow_left.png" />',
              '<img src="/images/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {bannerList && bannerList.length > 0
              ? bannerList.map((product) => {
                  return (
                    <>
                      <div
                        id="featuredProducts"
                        className="item float-left w-100"
                        key={product.name}
                      >
                        <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                          <div>
                            <div className="">
                              <span className="image text-center">
                                <img
                                  id={"img" + product.id}
                                  src={product.imageUrl}
                                  alt={product.name}
                                  title={product.name}
                                />
                              </span>
                              {/* <span className="w-100 text-center mt-1 ">
                                <h5 className="brand text-capitalize float-left">
                                  {product.brand}
                                </h5>
                                <span className="name">{product.name}</span>
                                <strong className="itemPrice p-0">
                                  Price: {product.price}
                                </strong>
                              </span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              : ""}
          </OwlCarousel>
        </div>
        </ul>
      </div>
    </div>
  );
};
export default Slider;
