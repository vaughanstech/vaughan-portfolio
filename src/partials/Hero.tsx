import {
  GradientText,
  HeroAvatar,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Welcome to <GradientText>Vaughan's Tech</GradientText>
        </>
      }
      description={
        <>
          This is a portfolio site for{" "}
          <a className="text-cyan-400 hover:underline" href="/about">
            Michael Vaughan
          </a>
          . Feel free to explore all of my projects and interests
        </>
      }
      avatar={<></>}
      socialButtons={<></>}
    />
  </Section>
);

export { Hero };
