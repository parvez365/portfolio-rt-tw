import React from "react";
import MarginL from "../layer/MarginL";
import Container from "../layer/Container";
import MarginX from "../layer/MarginX";

import HeaderReusable from "../reusable/HeaderReusable";
import ResumeReusable from "../reusable/ResumeReusable";
import ResumeCenReusable from "../reusable/ResumeCenReusable";

import { FaRegUser } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";

const Resume = () => {
  return (
    <section id="resume">
      <MarginL>
        <Container>
          <MarginX className="mt-24">
            <HeaderReusable spanTx="Resume" h2_Tx="" />
            <div className=" bg-[url('../src/assets/bg01.png'),url('../src/assets/bg02.png')] bg-no-repeat bg-center bg-cover">
              <div className="xl:mt-20 mt-40 xl:w-[67%] w-full mx-auto">
                <div className="md:flex items-center justify-between relative">
                  <div className="xl:w-[49.9%] md:border-r-[1.5px] border-solid border-[#eaeaea] opacity-100">
                  <div className="lg:mr-12 md:mr-3 mr-0">
                      <ResumeReusable numberTx="2021 - 2022" headerTx="JavaScript Developer" text="I learned JavaScript from Creative It Institute yet again. It required many hours of hard work."/>
                      <ResumeCenReusable numberTx="2022 - 2024" headerTx="ReactJS Developer" text="I entered the Creative It Institute this time to learn React JS. It required a great deal of effort."/>
                      <ResumeReusable numberTx="2023 - 2024" headerTx="Frontend Developer" text="Again, the Creative It Institute taught me frontend. There was a lot of work to be done."/>
                  </div>
                  </div>
                  <div className="absolute xl:top-[42.5%] lgx:top-[-18%] md:top-[-16%] sm:top-[-7.5%] top-[-8%] max-xsl:top-[-7.5%] xl:left-[-23%] lgx:left-[16%] md:left-[14%] sm:left-[38%] left-[30%] max-xsl:left-[27%]">
                    <div className="relative after:content[''] after:absolute after:top-[50%] lg:after:-right-11.25 lg:after:w-11.5 after:border after:border-dashed xl:after:border-[#989898] after:border-transparent">
                      <div className="p-4 text-center border border-solid border-[#eaeaea] rounded-xl opacity-100">
                        <div className="mx-10"><FaRegUser className="text-2xl" /></div>
                        <h3 className="mt-3 font-Montserrat font-semibold text-sm uppercase text-Main_Tx">Education</h3>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-[49.9%] lg:ml-12 md:ml-3 md:mt-0 mt-40">
                    <ResumeReusable numberTx="2023 - 2024" headerTx="Junior Developer" text="I performed well at work. They were equal to me since I executed their work perfectly."/>
                    <ResumeCenReusable numberTx="2023 - 2024" headerTx="Junior-Ex Developer" text="I performed well at work. They were equal to me since I executed their work perfectly. prvz"/>
                    <ResumeReusable numberTx="2024 - Current" headerTx="EX.s Developer" text="I performed well at work. They were equal to me since I executed their work perfectly."/>
                  </div>
                  <div className="absolute xl:top-[42.5%] lgx:top-[-18%] md:top-[-16%] sm:top-[48%] top-[47.7%] max-xsl:top-[49%] xl:right-[-23%] lgx:right-[16%] md:right-[14%] sm:right-[38%] right-[30%] max-xsl:right-[27%]">
                    <div className="relative after:content[''] after:absolute after:top-[50%] lg:after:-left-11.25 lg:after:w-11.5 after:border after:border-dashed xl:after:border-[#989898] after:border-transparent">
                      <div className="p-4 text-center border border-solid border-[#eaeaea] rounded-xl opacity-100">
                        <div className="mx-10"><GoBriefcase className="text-2xl" /></div>
                        <h3 className="mt-3 font-Montserrat font-semibold text-sm uppercase text-Main_Tx">Experiment</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MarginX>
        </Container>
      </MarginL>
    </section>
  );
};

export default Resume;