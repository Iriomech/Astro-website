import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const TecnologiesInow = [
  {
    src: 'https://logo.clearbit.com/reactjs.org',
    alt: 'React',
    url: 'https://reactjs.org/',
  },
  {
    src: 'https://logo.clearbit.com/typescriptlang.org',
    alt: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
  {
    src: 'https://logo.clearbit.com/nodejs.org',
    alt: 'NodeJS',
    url: 'https://nodejs.org/',
  },
  {
    src: 'https://logo.clearbit.com/expressjs.com',
    alt: 'ExpressJS',
    url: 'https://expressjs.com/',
  },
  {
    src: 'https://logo.clearbit.com/laravel.com',
    alt: 'Laravel',
    url: 'https://laravel.com/',
  },
  {
    src: 'https://logo.clearbit.com/vuejs.org',
    alt: 'VueJS',
    url: 'https://vuejs.org/',
  },
  {
    src: 'https://logo.clearbit.com/mysql.com',
    alt: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  {
    src: 'https://logo.clearbit.com/postgresql.com',
    alt: 'PostgreSQL',
    url: 'https://www.postgresql.com/',
  },
  {
    src: 'https://logo.clearbit.com/nuxtjs.org',
    alt: 'NuxtJS',
    url: 'https://nuxtjs.org/',
  },
];

const TecnologiesIstudy = [
  {
    src: 'https://logo.clearbit.com/java.com',
    alt: 'Java',
    url: 'https://www.java.com/',
  },
  {
    src: 'https://logo.clearbit.com/python.org',
    alt: 'Python',
    url: 'https://www.python.org/',
  },
  {
    src: 'https://logo.clearbit.com/flutter.io',
    alt: 'Flutter',
    url: 'https://flutter.io/',
  },
  {
    src: 'https://logo.clearbit.com/nestjs.com',
    alt: 'NestJS',
    url: 'https://nestjs.com/',
  },
];

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Iriomech</GradientText> 👋
        </>
      }
      description={
        <>
          <p>
            I´m a Full Stack web developer with a passion for building
            beautiful, responsive websites. I love to create things that make
            people happy.
            <br />
            <br />
            I'm currently looking for a job. If you have a project in mind,
            please get in touch.
            <br />
            <br />
            Now I know how to use the following technologies:
            <div className="mb-4 mt-3 max-h-60 columns-6 gap-5">
              {TecnologiesInow.map(({ src, alt, url }) => (
                <a
                  href={url}
                  key={alt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mb-4 block w-full"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-12 w-12 rounded-full md:hover:translate-y-1"
                  />
                </a>
              ))}
            </div>
            Other technologies I'm learning:
            <div className="mb-4 mt-3 max-h-60 columns-6 gap-5">
              {TecnologiesIstudy.map(({ src, alt, url }) => (
                <a
                  href={url}
                  key={alt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mb-4 block w-full"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-12 w-12 rounded-full hover:translate-y-1"
                  />
                </a>
              ))}
            </div>
            Social Networks:
          </p>
        </>
      }
      avatar={
        <img
          src="/assets/images/avatar.gif"
          alt="Iriomech"
          loading="lazy"
          className="hidden sm:flex sm:h-80  sm:w-80"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/iriome-cabrera-heredia-4b867b1b9/">
            <HeroSocial src="/assets/images/linkedin.png" alt="Linkedin icon" />
          </a>
          <a href="https://github.com/Iriomech">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
