import React from "react";
import MarginL from "../layer/MarginL";
import Container from "../layer/Container";
import MarginX from "../layer/MarginX";

import HeaderReusable from "../reusable/HeaderReusable";
import PortfolioReusable from "../reusable/PortfolioReusable";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Portfolio = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: { dots: false },
      },
    ],
  };
  return (
    <section id="portfolio">
      <MarginL>
        <Container>
          <MarginX className="mt-24">
            <HeaderReusable spanTx="Portfolio" h2_Tx="" />
            <div className="portfolio mt-20">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>ReactJS</Tab>
                  <Tab>Bootstrap</Tab>
                </TabList>

                <TabPanel>
                  <div className="flex flex-wrap justify-center xl:gap-4 gap-2">
                    <PortfolioReusable
                      imageLink="https://i.postimg.cc/5Nh1VJH9/bwfc-rt-b-bwfc-rt-b-netlify-app.png"
                      projectLink="https://bwfc-rt-b.netlify.app/"
                    />
                    <div className="portfolio xl:w-[32.4%] lg:w-[32.7%] sm:w-[49%] w-[48%] relative">
                      <Slider {...settings}>
                        <div className="w-full group relative">
                          <div>
                            <img className="w-full rounded-3xl" src="https://i.postimg.cc/6Q9PJ6Xv/Agency-rt-b-agency-rt-b-netlify-app-png-01.png" alt=""/>
                          </div>
                          <div className="absolute top-0 left-0 rounded-l-3xl duration-500 group-hover:w-[20%] group-hover:h-full group-hover:bg-[#e2e2e2]">
                            <div className="flex items-center justify-center h-full -rotate-90">
                              <a href="https://agency-rt-b.netlify.app/" target="blank" className="font-Montserrat font-bold text-base uppercase text-Main_Tx opacity-0 group-hover:opacity-100">
                                Project_Link
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="w-full group relative">
                          <div>
                            <img className="w-full rounded-3xl"src="https://i.postimg.cc/FRGpy0dW/Agency-rt-b-agency-rt-b-netlify-app-png-02.png" alt=""/>
                          </div>
                          <div className="absolute top-0 left-0 rounded-l-3xl duration-500 group-hover:w-[20%] group-hover:h-full group-hover:bg-[#e2e2e2]">
                            <div className="flex items-center justify-center h-full -rotate-90">
                              <a href="https://agency-rt-b.netlify.app/" target="blank" className="font-Montserrat font-bold text-base uppercase text-Main_Tx opacity-0 group-hover:opacity-100">
                                Project_Link
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="w-full group relative">
                          <div>
                            <img className="w-full rounded-3xl" src="https://i.postimg.cc/HWy9zJck/Agency-rt-b-agency-rt-b-netlify-app-png-03.png" alt=""/>
                          </div>
                          <div className="absolute top-0 left-0 rounded-l-3xl duration-500 group-hover:w-[20%] group-hover:h-full group-hover:bg-[#e2e2e2]">
                            <div className="flex items-center justify-center h-full -rotate-90">
                              <a href="https://agency-rt-b.netlify.app/" target="blank" className="font-Montserrat font-bold text-base uppercase text-Main_Tx opacity-0 group-hover:opacity-100">
                                Project_Link
                              </a>
                            </div>
                          </div>
                        </div>
                      </Slider>
                      <div className="absolute top-5 right-2.5">
                        <img className="w-14" src="https://i.postimg.cc/TYsdCmJ4/photo-2.png" alt=""/>
                      </div>
                    </div>
                    <PortfolioReusable
                      imageLink="https://i.postimg.cc/Bb8T2HB0/Petrol-rt-t-petrol-rt-tw-netlify-app.png"
                      projectLink="https://petrol-rt-tw.netlify.app/"
                    />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-wrap justify-center lg:gap-4 gap-2">
                    <PortfolioReusable
                      imageLink="https://i.postimg.cc/brhtgfvN/Qwery-rt-qwery-rt-b-netlify-app.png"
                      projectLink="https://qwery-rt-b.netlify.app/"
                    />
                    <PortfolioReusable
                      imageLink="https://i.postimg.cc/5Nh1VJH9/bwfc-rt-b-bwfc-rt-b-netlify-app.png"
                      projectLink="https://bwfc-rt-b.netlify.app/"
                    />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-wrap justify-center lg:gap-4 gap-2">
                    <PortfolioReusable
                      imageLink="https://i.postimg.cc/Bb8T2HB0/Petrol-rt-t-petrol-rt-tw-netlify-app.png"
                      projectLink="https://petrol-rt-tw.netlify.app/"
                    />
                    <PortfolioReusable
                      imageLink="https://i.postimg.cc/5Nh1VJH9/bwfc-rt-b-bwfc-rt-b-netlify-app.png"
                      projectLink="https://bwfc-rt-b.netlify.app/"
                    />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </MarginX>
        </Container>
      </MarginL>
    </section>
  );
};

export default Portfolio;
