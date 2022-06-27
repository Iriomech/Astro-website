import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Works</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Web Developer Internship - Secret Source"
        description="I was part of a team of interns and we were commissioned with a project with Reactjs, Typescript and Jest, we also organized ourselves through SCRUM.
        The experience was enriching and super stimulating, because it was my first time using many of the technologies and working in such a large team with so many points of view.
        I learned a lot about the development process and how to work in a team, and how to communicate with the team and how to make sure that the project is done on time."
        link="https://www.secret-source.eu"
        img={{
          src: 'https://pbs.twimg.com/profile_images/1222541823115190272/onT8JOZ4_400x400.jpg',
          alt: 'Secret Source logo',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>React.js</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
            <Tags color={ColorTags.PINK}>Styled-Components</Tags>
            <Tags color={ColorTags.RED}>Jest</Tags>
            <Tags color={ColorTags.GREEN}>SCRUM</Tags>
          </>
        }
      />
      <Project
        name="Más ProQuo Website - Pro Inclusiva"
        description="I was part of a team of two developers in charge of creating the web application for the Más ProQuo project. The web application was programmed with Vue.js and Laravel.
        This project was somewhat chaotic due to the short period of time and that it was developed at the same time that each one was doing the practices in a different company."
        link="https://www.proinclusiva.org"
        img={{
          src: 'https://proinclusiva.org/wp-content/uploads/2021/02/cropped-cropped-Logo-Pro-Inclusiva-512.png',
          alt: 'Secret Source logo',
        }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>Vue.js</Tags>
            <Tags color={ColorTags.RED}>Laravel</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.BLUE}>PHP</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
