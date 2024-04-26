"use client";

import HeroSection from "./ui/homepage/heroSection";
import IntroductionSection from "./ui/homepage/introductionSection";
import ReviewsSection from "./ui/homepage/reviewsSection";
import BlogSection from "./ui/homepage/blogSection";
import FreeGuideSection from "./ui/homepage/freeGuideSection";
import CtaSection from "./ui/homepage/ctaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ReviewsSection />
      <BlogSection />
      <FreeGuideSection />
      <CtaSection />
    </>
  );
}
