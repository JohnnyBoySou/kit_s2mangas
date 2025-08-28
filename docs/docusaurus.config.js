import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'S2Mangás Kit',
  tagline: 'S2Mangás Kit é uma ferramenta para ajudar a desenvolver interfaces mais rapidamente',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://johnnyboysou.github.io',
  baseUrl: '/kit_s2mangas/',
  organizationName: 'JohnnyBoySou',
  projectName: 'kit_s2mangas',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/JohnnyBoySou/kit_s2mangas/tree/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'S2Mangás Kit',
        logo: {
          alt: 'S2Mangás Kit Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/JohnnyBoySou/kit_s2mangas',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: 'intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} S2Mangás Kit, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
