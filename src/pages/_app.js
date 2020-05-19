import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import GlobalStyle from 'styles/global-style';
import theme from 'styles/theme';
import TabFocusOutlineStyles from 'components/TabFocusOutlineStyles';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle="Jacob Proffer | Front-End Developer"
      titleTemplate="%s | Front-End Developer"
      meta={[
        { charset: 'UTF-8' },
        { name: 'description', content: 'Jacob Proffer is a Front-End Developer at Elegant Seagulls.' },
        { property: 'og:title', content: 'Jacob Proffer' },
        { property: 'og:description', content: 'Jacob Proffer is a Front-End Developer at Elegant Seagulls.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `https://${process.env.SITE_URL}` },
        { property: 'og:image', content: `https://${process.env.SITE_URL}/images/social.jpg` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `https://${process.env.SITE_URL}/images/social.jpg` },
        { name: 'twitter:title', content: 'Jacob Proffer' },
        { name: 'twitter:description', content: 'Jacob Proffer is a Front-End Developer at Elegant Seagulls.' },
        process.env.NO_INDEX === 'true' ? { name: 'robots', content: 'noindex' } : false,
      ].filter(Boolean)}
      link={[
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest', defer: true },
        { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#f3b348' },
        { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
      ]}
    />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <TabFocusOutlineStyles />
    </ThemeProvider>
  </>
);

export default MyApp;
