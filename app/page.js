import Image from "next/image";

export default function Home() {
  return (
    
      <section className="mx-auto flex h-full w-screen max-w-8xl flex-col-reverse lg:flex-row-reverse justify-evenly bg-seasalt border-2 border-blue-800">
        <div className="border-red-700 border-2 w-fit h-fit">
          <div className="h-[104px] w-[237px] mx-auto border relative top-4 lg:-left-56 lg:top-14 border-none z-20 bg-white">
            <div className="mx-auto flex h-[56] w-[190] gap-x-4 p-5">
              <div className="h-[56] w-[56]">
                <Image
                  src="/protection-target1.svg"
                  alt=""
                  width={56}
                  height={56}
                />
              </div>
              <div className="h-[56] w-[117]">
                <Image src="/success.svg" alt="" width={117} height={56} />
              </div>
            </div>
          </div>
          <div className="w-5/6 mx-auto sm:w-fit">
            <Image
              src="/pexels-andrea-piacquadio-3978564 1 (1).png"
              alt="profile picture of a smiling woman"
              width={462}
              height={603}
            /> 
          </div>
        </div>
        <div className="p-4 border-2 border-emerald-500">
          <div className="w-fit p-6 lg:absolute lg:left-16 px-0">
            <Image src="/Vector.svg" alt="" width={101} height={17} />
          </div>
          <div className="mx-auto w-fit border-2 border-red-200 sm:w-96 md:w-10/12 lg:h-[396px]  lg:w-[545px] lg:py-24">
            <h1 className="h-auto px-4 py-6 text-3xl md:text-5xl font-extrabold text-darkBlue lg:w-[520px] lg:pl-0 lg:text-7xl">
              Live life at the full potential
            </h1>
            <p className="px-4 py-2 text-xl leading-8 text-gray">
              I help people to discover their true potential and live a
              fulfiling life... Discover the simple 3 steps that I discovered to
              hack productivity. It just works and is backed by science. Wanna
              transform your life?
            </p>
          </div>
        </div>
      </section>
    
  );
}
