import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

const ProjectList = () => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Projects</GradientText>
        </div>

        <div className="text-sm">
          <a href="/projects">View all Projects</a>
        </div>
      </div>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Project 1"
        description="dummy text for description"
        link="/"
        img={{
          src: "/",
          alt: "Image related to project",
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web Design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
