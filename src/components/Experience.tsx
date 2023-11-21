import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import MDXComponent from "./MDXComponent";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <>
      <ExperienceCard
        name="Google Classroom"
        imageUrl="/images/resume/clever-roster-import.png"
      >
        <MDXComponent
          importedModule={import("./experience/classroom.mdx")}
        />
      </ExperienceCard>

      <ExperienceCard
        name="Google Maps - Growth"
        imageUrl="/images/resume/maps-india.png"
      >
        <MDXComponent importedModule={import("./experience/maps-transliteration.mdx")} />
      </ExperienceCard>

      <ExperienceCard
        name="Google Maps - Revenue"
        imageUrl="/images/resume/search-affiliate-location-extensions-google.jpeg"
      >
        <MDXComponent importedModule={import("./experience/maps-revenue.mdx")} />
      </ExperienceCard>

      <ExperienceCard
        name="CarnegieBot"
        imageUrl="/images/resume/carnegiebot.png"
      >
        <MDXComponent importedModule={import("./experience/carnegiebot.mdx")} />
      </ExperienceCard>

      <ExperienceCard
        name="CryptoKitties"
        imageUrl="/images/resume/cryptokitties.png"
      >
        <MDXComponent
          importedModule={import("./experience/cryptokitties.mdx")}
        />
      </ExperienceCard>

      <ExperienceCard name="ZeroDown" imageUrl="/images/resume/zerodown.jpg">
        <MDXComponent importedModule={import("./experience/zerodown.mdx")} />
      </ExperienceCard>
    </>
  );
}
