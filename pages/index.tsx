import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import { gql, GraphQLClient } from 'graphql-request';
import PageSections from '../components/PageSections';
import Navbar from '../components/Navbar';
import { AnimatePresence } from 'framer-motion';

export default function Home({ page }) {
  return (
    <>
      <Head>{renderMetaTags(page.seo)}</Head>
      <Navbar details={page} />

      <AnimatePresence>
        {page.pageDetail.map((section, i) => (
          <PageSections details={section} key={i} />
        ))}
      </AnimatePresence>
    </>
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
          backgroundColor
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
          backgroundColor
          fadeIn
          content {
            value
            blocks {
              __typename
              ... on RtImageRecord {
                id
                rtImage {
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
              ... on CustomHeadingRecord {
                id
                title
                subtitle
              }
            }
          }
          imageLocation
          imageStyle
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
          backgroundColor
          fadeIn
          title
          pricingModules {
            ... on TableRecord {
              __typename
              id
              title
              table
            }
            ... on PricingCardRecord {
              __typename
              id
              title
              price
              buttonText
              description
            }
          }
        }
        ... on ImageRecord {
          __typename
          navigationId
          backgroundColor
          fadeIn
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
          backgroundColor
          fadeIn
          content {
            value
            blocks {
              __typename
              ... on RtImageRecord {
                id
                rtImage {
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
              ... on CustomHeadingRecord {
                id
                title
                subtitle
              }
            }
          }
        }
        ... on YoutubeVideoRecord {
          __typename
          navigationId
          backgroundColor
          fadeIn
          id
          link {
            providerUid
          }
        }
        ... on GridRecord {
          __typename
          navigationId
          backgroundColor
          fadeIn
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
                blocks {
                  __typename
                  ... on RtImageRecord {
                    id
                    rtImage {
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
                }
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
