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
        name="Homemade Radios"
        description="Radio frequency engineering using the nrf24l01 module on Arduino and Raspberry Pi boards"
        link="http://localhost:3000/projects/nrf24l01"
        img={{
          src: "/nrf24l01.png",
          alt: "Image related to project",
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>Arduino</Tags>
            <Tags color={ColorTags.RED}>Raspberry Pi</Tags>
            <Tags color={ColorTags.YELLOW}>Python</Tags>
            <Tags color={ColorTags.BLUE}>C++</Tags>
          </>
        }
      />
    </div>
    <br></br>
    <div className="flex flex-col gap-6">
      <Project
        name="Transformers API"
        description="Fun API used for including your favorite 'robots in disguise' in your project"
        link="http://localhost:3000/projects/transformer-api"
        img={{
          src: "/transformers-logo.png",
          alt: "Image related to project",
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>NestJS</Tags>
            <Tags color={ColorTags.LIME}>API Design</Tags>
            <Tags color={ColorTags.SKY}>TypeScript</Tags>
            <Tags color={ColorTags.ROSE}>Postgres</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
