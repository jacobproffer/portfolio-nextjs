import React from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import GlobalStyle from 'styles/global-style';
import TabFocusOutlineStyles from 'components/TabFocusOutlineStyles';

const MyApp = ({ Component, pageProps }) => {
  const { asPath } = useRouter();
  const noIndex = process.env.NEXT_PUBLIC_NO_INDEX === 'true';
  return (
    <>
      <DefaultSeo
        defaultTitle="Jacob Proffer | Front-End Developer"
        titleTemplate="%s | Jacob Proffer"
        description="Jacob Proffer is a Front-End Developer at Elegant Seagulls."
        openGraph={{
          url: 'https://www.proffer.dev/',
          title: 'Jacob Proffer',
          description: 'Jacob Proffer is a Front-End Developer at Elegant Seagulls.',
          images: [
            {
              url: '/images/social.jpg',
              width: 1200,
              height: 800,
              alt: 'Jacob Proffer',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Jacob Proffer',
        }}
        twitter={{
          handle: '@jacobproffer',
          site: '@jacobproffer',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: '/favicons/favicon.ico',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicons/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicons/favicon-16x16.png',
          },
          {
            rel: 'apple-touch-icon',
            href: '/favicons/apple-touch-icon.png',
            sizes: '180x180'
          },
          {
            rel: 'manifest',
            href: '/favicons/site.webmanifest',
          },
          {
            rel: 'mask-icon',
            href: '/favicons/safari-pinned-tab.svg',
            color: '#f3b348',
          },
        ]}
        dangerouslySetAllPagesToNoIndex={noIndex}
        dangerouslySetAllPagesToNoFollow={noIndex}
      />
      <Component key={asPath} {...pageProps} />
      <GlobalStyle />
      <TabFocusOutlineStyles />
    </>
  );
};

export default MyApp;
