import React, { useState, useEffect } from "react";

const SkillProgressProvider = ({ values, interval = 1000, children }) => {
  const [valuesIndex, setValuesIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1460) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (show) {
      const intervalId = setInterval(() => {
        setValuesIndex((prevIndex) => (prevIndex + 1) % values.length);
      }, interval);

      setTimeout(() => clearInterval(intervalId), interval);

      return () => clearInterval(intervalId);
    }
  }, [show]);

  return children(values[valuesIndex]);
};

export default SkillProgressProvider;
