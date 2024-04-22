import React from "react";
import SubscribeForm from "./components/subscribeForm";

export default function Footer() {
  return (
    <footer className="mx-auto flex h-full  w-screen lg:max-w-8xl flex-col bg-white lg:h-[617px]">
      <section className="lg:h-46 mx-auto mt-10 h-fit flex flex-col lg:flex-row w-screen lg:max-w-8xl bg-seasalt">
        <div className="mx-auto my-auto flex lg:h-21 h-fit lg:w-7xl flex-col lg:flex-row lg:justify-between">
          <div className="w-fit mx-auto px-2 lg:w-[738px] lg:h-fit md:pb-10 h-fit flex flex-col">
            <h3 className="w-3/5 mx-auto  pt-10 pb-5 lg:pt-0 text-xl py-2 px-4 lg:text-3xl font-extrabold text-darkBlue md:w-full lg:w-[738px]">
              Get notified when I publish new articles
            </h3>
            <p className="w-3/5 mx-auto text-xl px-4 text-gray md:w-full lg:w-[738px]">
              Stay up to date with the latest news, announcements and articles.
            </p>
          </div>
          <div className="my-auto mx-auto mt-20 md:mt-0 md:mb-4">
            <SubscribeForm />
          </div>
        </div>
      </section>
    </footer>
  );
}
