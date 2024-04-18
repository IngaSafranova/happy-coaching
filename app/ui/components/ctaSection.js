import React from "react";

export default function CtaSection() {
  return (
      <section className="mx-auto h-fit w-screen  max-w-8xl bg-white lg:h-[576px]">
          <div className="mx-auto h-fit w-fit  flex-col  lg:flex-row bg-seasalt rounded-3xl lg:h-[480px] lg:w-[1216px] ">
              <div className="lg:w-1/2 w-3/4 mx-auto h-[350px] my-auto bg-red-50 flex-col">
                  <h2 className="font-extrabold text-2xl lg:text-4xl text-darkBlue">
                      Get 15-Minutes Complimentary online session.
                 </h2> 
            </div>  
          </div>
    </section>
  );
}
