'use client'

import React from "react";
import SubscribeForm from "./components/subscribeForm";
import Logo from "./components/logo";
import FooterNav from "./components/footerNav";
import Contact from "./components/contact";

export default function Footer() {
  return (
    <footer className="mx-auto flex h-full  w-screen flex-col bg-white lg:h-[617px] lg:max-w-8xl">
      <section className="mx-auto mt-10 flex h-fit w-screen flex-col bg-seasalt lg:h-46 lg:max-w-8xl lg:flex-row">
        <div className="mx-auto my-auto flex h-fit flex-col lg:h-21 lg:w-7xl lg:flex-row lg:justify-between">
          <div className="mx-auto flex h-fit w-fit flex-col px-2 md:pb-10 lg:h-fit lg:w-[738px]">
            <h3 className="mx-auto w-3/5  px-4 py-2 pb-5 pt-10 text-xl font-extrabold text-darkBlue md:w-full lg:w-[738px] lg:pt-0 lg:text-3xl">
              Get notified when I publish new articles
            </h3>
            <p className="mx-auto w-3/5 px-4 text-xl text-gray md:w-full lg:w-[738px]">
              Stay up to date with the latest news, announcements and articles.
            </p>
          </div>
          <div className="mx-auto my-auto mt-20 md:mb-4 md:mt-0">
            <SubscribeForm />
          </div>
        </div>
      </section>
      <section className=" h-fit mx-auto text-center w-screen pb-12 pt-16 lg:h-[440px] lg:max-w-8xl">
       
          <div className="mx-auto flex w-screen flex-col lg:w-[1216px] justify-start lg:gap-x-60 md:justify-around px-8 lg:h-52  md:flex-row">
            <div className="w-fit mx-auto md:m-0 h-fit">
              <Logo />
          </div>
          <FooterNav />
          <Contact/>

          </div>
      
      </section>
    </footer>
  );
}
