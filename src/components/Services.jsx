import React from "react";
import MarginL from "../layer/MarginL";
import Container from "../layer/Container";
import MarginX from "../layer/MarginX";

import HeaderReusable from "../reusable/HeaderReusable";
import ServicesReusable from "../reusable/ServicesReusable";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Services = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          initialSlide: 2,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="services">
      <MarginL>
        <Container>
          <MarginX className="mt-24">
            <HeaderReusable spanTx="Services" h2_Tx="" />
            <div className="service mt-20">
              <Slider {...settings}>
                <ServicesReusable
                  iconLink="https://i.postimg.cc/JnWTfW03/coding.png"
                  heading="Web Development"
                  text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS."
                  buttonText="Read More"
                />
                <ServicesReusable
                  iconLink="https://i.postimg.cc/qqy5tMF5/computer.png"
                  heading="Web Design"
                  text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS."
                  buttonText="Read More"
                />
                <ServicesReusable
                  iconLink="https://i.postimg.cc/FFZgDS4H/online-graph.png"
                  heading="SEO Service"
                  text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS."
                  buttonText="Read More"
                />
                <ServicesReusable
                  iconLink="https://i.postimg.cc/tCzPNZLN/graphic-design.png"
                  heading="Graphics Design"
                  text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS."
                  buttonText="Read More"
                />
                <ServicesReusable
                  iconLink="https://i.postimg.cc/QtTBvHVC/content-creator.png"
                  heading="Content Writing"
                  text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS."
                  buttonText="Read More"
                />
              </Slider>
            </div>
          </MarginX>
        </Container>
      </MarginL>
    </section>
  );
};

export default Services;
