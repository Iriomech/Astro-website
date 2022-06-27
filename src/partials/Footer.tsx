import { FooterCopyright, Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
    <p className="mt-2 text-sm text-gray-200">
      Logos provided by{' '}
      <a href="https://clearbit.com" className="text-cyan-400 hover:underline">
        Clearbit
      </a>
    </p>
  </Section>
);

export { Footer };
