import React from "react";
import AskBtn from "./ask/AskBtn";
import Footer from "./footer/Footer";
import Main from "./Main";
import Header from "./menu/header";
import LeftNav from "./menu/leftnav";
import Motto from "./motto";

export default function Home() {
  return (
    <>
      <Header />
      <LeftNav />
      <Motto />
      <Main />
      <AskBtn />
      <Footer />
    </>
  );
}
