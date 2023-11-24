import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import MDXComponent from "./MDXComponent";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <>
      <ExperienceCard
        name="Building for school leaders"
        imageUrl="/images/resume/classroom-logo-users.jpeg"
      >
        <MDXComponent
          importedModule={import("./experience/classroom.mdx")}
        />
      </ExperienceCard>

      <ExperienceCard
        name="Transliterating POIs"
        imageUrl="/images/resume/maps-logo-users.jpeg"
      >
        <MDXComponent importedModule={import("./experience/maps-transliteration.mdx")} />
      </ExperienceCard>

      <ExperienceCard
        name="Chain Data for Ads"
        imageUrl="/images/resume/maps-logo-revenue.jpeg"
      >
        <MDXComponent importedModule={import("./experience/maps-revenue.mdx")} />
      </ExperienceCard>

      <ExperienceCard
        name="Re-engagement notis"
        imageUrl="/images/resume/maps-logo-retain.jpeg"
      >
        <MDXComponent importedModule={import("./experience/maps-reengage.mdx")} />
      </ExperienceCard>

      <ExperienceCard
        name="E-Commerce Order Management"
        imageUrl="/images/resume/a120-logo.jpeg"
      >
        <MDXComponent
          importedModule={import("./experience/tailor.mdx")}
        />
      </ExperienceCard>

      <ExperienceCard name="Driving Sign-ups" imageUrl="/images/resume/ku-logo.jpeg">
        <MDXComponent importedModule={import("./experience/amazon.mdx")} />
      </ExperienceCard>
    </>
  );
}
