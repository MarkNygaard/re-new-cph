import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import { gql, GraphQLClient } from 'graphql-request';
import PageSections from '../components/PageSections';
import Navbar from '../components/Navbar';

export default function Home({ page }) {
  return (
    <div>
      <Head>{renderMetaTags(page.seo)}</Head>
      <Navbar details={page} />

      {page.pageDetail.map((section) => (
        <PageSections details={section} key={section.id} />
      ))}
    </div>
  );
}

const query = gql`
  query {
    page {
      id
      name
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      pageDetail {
        ... on HeaderRecord {
          __typename
          navigationId
          bigTitle
          smallTitle
          description
          buttonText
          buttonLink
          id
        }
        ... on TextImageRecord {
          __typename
          navigationId
          smallTitle
          bigTitle
          description
          imageLocation
          image {
            responsiveImage(imgixParams: { fit: crop, auto: format }) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
        }
        ... on PricingSectionRecord {
          __typename
          navigationId
          title
          pricingCard {
            title
            price
            buttonText
            description
          }
        }
        ... on ImageRecord {
          __typename
          imageTitle
          image {
            responsiveImage(imgixParams: { fit: crop, auto: format }) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
        }
        ... on TextRecord {
          __typename
          navigationId
          content {
            value
          }
        }
        ... on YoutubeVideoRecord {
          __typename
          navigationId
          id
          link {
            providerUid
          }
        }
        ... on GridRecord {
          __typename
          id
          title
          mobileColumns
          tabletColumns
          desktopColumns
          gap
          fullWidth
          height
          sections {
            ... on GridImageRecord {
              __typename
              id
              mobilePosition
              tabletPosition
              desktopPosition
              image {
                responsiveImage(
                  imgixParams: {
                    fit: crop
                    crop: focalpoint
                    ar: "1:1"
                    minH: 384
                    auto: format
                  }
                ) {
                  srcSet
                  webpSrcSet
                  sizes
                  src
                  width
                  height
                  aspectRatio
                  alt
                  title
                  base64
                }
              }
            }
            ... on GridTextRecord {
              __typename
              id
              mobilePosition
              tabletPosition
              desktopPosition
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const endpoint = 'https://graphql.datocms.com/';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });
  const page = await graphQLClient.request(query);
  return {
    props: page,
  };
}
