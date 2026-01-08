import ComingSoon from "@/components/coming-soon";
import ComingSoonSection from "@/components/proximante";
import AboutSection from "@/components/about-section";
import VocesSection from "@/components/voces-section";

export default function Home() {
  return (
    <>
      <div className=" bg-[#FDF6E3] dark:bg-gray-900 transition-colors">
        <ComingSoon />
        <AboutSection />
        <VocesSection />
        <ComingSoonSection />
      </div>
    </>
  );
}
