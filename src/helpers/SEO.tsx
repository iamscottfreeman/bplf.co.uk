import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = () => {
  const url = 'https://bplf.co.uk';
  const title = 'British Powerlifting Federation';
  const description = 'The British Powerlifting Federation - Where the lifter is always the star';

  return (
    <NextSeo
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: 'https://bpf.co.uk/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: title,
            type: 'image/jpeg'
          }
        ],
        site_name: title
      }}
    />
  );
};

export default SEO;
