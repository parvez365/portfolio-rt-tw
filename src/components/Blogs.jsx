import React from "react";
import MarginL from "../layer/MarginL";
import Container from "../layer/Container";
import MarginX from "../layer/MarginX";

import HeaderReusable from "../reusable/HeaderReusable";
import BlogsReusable from "../reusable/BlogsReusable";

const Blogs = () => {
  return (
    <section id="blog">
      <MarginL>
        <Container>
          <MarginX className="mt-24">
            <HeaderReusable spanTx="Blogs" h2_Tx="Post" />
            <div className="mt-10">
              <BlogsReusable image="https://i.postimg.cc/yYhCM0Pw/blog-Image.jpg" date="08 FEB, 2025 - IT_TECH" hadingTx="New resources on the gender gap in computer science" para="My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS, allowing me to seamlessly blend creativity with functionality."/>
              <BlogsReusable image="https://i.postimg.cc/wBDxXSXP/digital-marketing.jpg" date="12 MAY, 2024 - TECHNOLOGY" hadingTx="New resources on the gender gap in computer science" para="My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS, allowing me to seamlessly blend creativity with functionality."/>
            </div>
          </MarginX>
        </Container>
      </MarginL>
    </section>
  );
};

export default Blogs;