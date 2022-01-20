import { Helmet } from 'react-helmet';

type SEOProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const SOSMARKET_DEFAULT_BANNER = `${process.env.PUBLIC_URL}/sosmarket_meta.jpeg`;

function SEO({ title, description, imageUrl }: SEOProps) {
  const image = imageUrl || SOSMARKET_DEFAULT_BANNER;

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          name: 'image',
          content: image
        },
        {
          property: 'og:url',
          content: 'https://www.sosmarket.io/'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'twitter:title',
          content: title
        },
        {
          property: 'twitter:description',
          content: description
        },
        {
          property: 'twitter:image',
          content: image
        }
      ]}
    />
  );
}

export default SEO;
