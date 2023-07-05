import React from "react";
import {
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Question from "../../content/sections/questions";
import Q1 from "../../content/sections/q1";
import S1 from "../../content/sections/s1";
import QuestionsHeading from "../../content/sections/q2";
import Q3 from "../../content/sections/q3";
import Q4 from "../../content/sections/q4";
import Ans4 from "../../content/sections/Ans4";
import Ans2 from "../../content/sections/Ans2";
import Ans3 from "../../content/sections/Ans3";
import Footer from "../../content/sections/Footer";
import Feedback from "../../content/sections/feedback";
import Navigation from "../../content/sections/navigation";
import Header from "../../content/sections/header";
import Layout from "../../content/sections/layout";

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Web development assignment for Zluri" />
      <Navigation />
      <div>
        <Header />
        <QuestionsHeading />
        <Question />
        <Q1 />
        <S1 />
        <Ans2 />
        <Q3 />
        <Ans3 />
        <Q4 />
        <Ans4 />
        <Feedback />
        <Footer />
      </div>
    </Layout>
  );
}
