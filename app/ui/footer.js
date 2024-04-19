import React from "react";
import SubscribeForm from "./components/subscribeForm";

export default function Footer() {
  return (
    <footer className="mx-auto flex h-fit  w-screen max-w-8xl flex-col bg-white lg:h-[617px]">
      <section className="h-46 flex flex-col lg:flex-row w-screen max-w-8xl bg-seasalt">
        <div className="mx-auto my-auto flex h-21 w-7xl flex-col lg:flex-row lg:justify-between">
          <div className="w-fit px-2 lg:w-[738px] h-21 flex flex-col">
            <h3 className="w-3/5 pb-4 text-xl py-2 px-4 lg:text-3xl font-extrabold text-darkBlue md:w-full lg:w-[738px]">
              Get notified when I publish new articles
            </h3>
            <p className="w-3/5 text-xl px-4 text-gray md:w-full lg:w-[738px]">
              Stay up to date with the latest news, announcements and articles.
            </p>
          </div>
          <div className="my-auto mt-20 md:mt-0">
            <SubscribeForm />
          </div>
        </div>
      </section>
    </footer>
  );
}
