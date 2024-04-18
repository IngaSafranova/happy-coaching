'use client'

import Vector from "./ui/components/vector";

import HeroSection from "./ui/components/heroSection";
import IntroductionSection from "./ui/components/introductionSection";
import ReviewsSection from "./ui/components/reviewsSection";
import BlogSection from "./ui/components/blogSection";
import FreeGuideSection from "./ui/components/freeGuideSection";
import CtaSection from "./ui/components/ctaSection";


export default function Home() {


  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ReviewsSection />
      <BlogSection />
      <FreeGuideSection/>
     <CtaSection/>
    </>
  );
}
