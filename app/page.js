"use client";

import Vector from "./ui/components/vector";

import HeroSection from "./ui/heroSection";
import IntroductionSection from "./ui/introductionSection";
import ReviewsSection from "./ui/reviewsSection";
import BlogSection from "./ui/blogSection";
import FreeGuideSection from "./ui/freeGuideSection";
import CtaSection from "./ui/ctaSection";

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
