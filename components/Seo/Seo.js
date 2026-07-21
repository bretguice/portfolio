import Head from 'next/head';

export const SITE_URL = 'https://bretguice.com';
export const DEFAULT_SOCIAL_IMAGE = '/og-default.jpg';
export const SITE_DESCRIPTION = 'Bret Guice writes about solving meaningful problems through strategy, systems, digital experiences and a deeper understanding of how people participate.';

function absoluteUrl(path) {
  return new URL(path, SITE_URL).toString();
}

function buildStructuredData({ title, description, path, pageType }) {
  const pageUrl = absoluteUrl(path);
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${pageUrl}#webpage`;

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: 'Bret Guice',
    url: `${SITE_URL}/`,
    jobTitle: 'Athletics administrator',
    worksFor: {
      '@type': 'Organization',
      name: 'Louisiana Tech Athletics',
    },
  };

  if (pageType === 'ProfilePage') {
    person.mainEntityOfPage = { '@id': pageId };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${SITE_URL}/`,
        name: 'Bret Guice',
        description: SITE_DESCRIPTION,
        inLanguage: 'en-US',
        publisher: { '@id': personId },
      },
      person,
      {
        '@type': pageType,
        '@id': pageId,
        url: pageUrl,
        name: title,
        description,
        inLanguage: 'en-US',
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        ...(pageType === 'ProfilePage' && { mainEntity: { '@id': personId } }),
      },
    ],
  };
}

export default function Seo({
  title,
  description,
  path,
  openGraphType = 'website',
  pageType = 'WebPage',
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = 'Bret Guice — Strategy, systems and meaningful experiences',
}) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const structuredData = buildStructuredData({ title, description, path, pageType });

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#f5f2eb" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content="Bret Guice" />
      <meta property="og:type" content={openGraphType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
