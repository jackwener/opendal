/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const repoAddress = 'https://github.com/apache/incubator-opendal';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache OpenDAL',
  tagline: 'Open Data Access Layer: Access data freely, painlessly, and efficiently',
  favicon: 'img/favicon.ico',

  url: 'https://opendal.apache.org/',
  baseUrl: '/',

  organizationName: 'Apache',
  projectName: 'OpenDAL',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./docs/sidebars.js'),
          editUrl:
            'https://github.com/apache/incubator-opendal/tree/main/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/apache/incubator-opendal/tree/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
        '@docusaurus/plugin-content-docs',
        {
            id: 'community',
            path: 'community',
            routeBasePath: 'community',
            sidebarPath: require.resolve('./community/sidebars.js'),
            editUrl: 'https://github.com/apache/incubator-opendal/tree/main/website/',
        },
    ],
    [require.resolve("docusaurus-plugin-image-zoom"), {}],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO social card image
      // image: 'img/opendal-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      },
      navbar: {
        logo: {
          alt: 'Apache OpenDAL (incubating)',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: '/',
          target: '_self',
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'right',
            label: 'Docs',
          },
          {
            position: 'right',
            label: 'API',
            items: [
              {
                label: 'Rust Core',
                to: 'pathname:///docs/rust/opendal/'
              },
              {
                label: 'Node.js Binding',
                to: 'pathname:///docs/nodejs/'
              },
              {
                label: 'Python Binding',
                to: 'pathname:///docs/python/'
              },
              {
                label: 'Java Binding',
                to: 'pathname:///docs/java/'
              },
              {
                label: 'C Binding',
                to: 'pathname:///docs/c/'
              },
              {
                label: 'Lua Binding',
                to: 'pathname:///docs/lua/'
              },
              {
                label: 'Haskell Binding',
                to: 'pathname:///docs/haskell/'
              },
              {
                label: 'C++ Binding',
                to: 'pathname:///docs/cpp/'
              }
            ]
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            type: 'doc',
            docId: 'community',
            position: 'right',
            label: 'Community',
            docsPluginId: 'community'
          },
          {
            to: '/download',
            label: 'Download',
            position: 'right'
          },
          {
            type: 'dropdown',
            label: 'ASF',
            position: 'right',
            items: [
              {
                label: 'Foundation',
                to: 'https://www.apache.org/'
              },
              {
                label: 'License',
                to: 'https://www.apache.org/licenses/'
              },
              {
                label: 'Events',
                to: 'https://www.apache.org/events/current-event.html'
              },
              {
                label: 'Privacy',
                to: 'https://privacy.apache.org/policies/privacy-policy-public.html'
              },
              {
                label: 'Security',
                to: 'https://www.apache.org/security/'
              },
              {
                label: 'Sponsorship',
                to: 'https://www.apache.org/foundation/sponsorship.html'
              },
              {
                label: 'Thanks',
                to: 'https://www.apache.org/foundation/thanks.html'
              },
              {
                label: 'Code of Conduct',
                to: 'https://www.apache.org/foundation/policies/conduct.html'
              }
            ]
          },
          {
            href: repoAddress,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://discord.gg/XQy8yGR2dg',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Apache Software Foundation',
          src: './img/incubator.svg',
          href: 'https://www.apache.org/',
          width: 200,
        },
        copyright: `Apache OpenDAL (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF. <br/><br/> Copyright © 2022-${new Date().getFullYear()}, The Apache Software Foundation Apache OpenDAL, OpenDAL, Apache, Apache Incubator, the Apache feather, the Apache Incubator logo and the Apache OpenDAL project logo are either registered trademarks or trademarks of the Apache Software Foundation.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust', 'java', 'groovy'],
      },
      zoom: {
        selector: '.markdown img',
        background: 'rgba(255, 255, 255, 0.8)',
        config: {}
      }
    }),
};

module.exports = config;
