import { gql, GraphQLClient } from 'graphql-request';
import PageSections from '../components/PageSections';
import Navbar from '../components/Navbar';

export default function Home({ page }) {
  return (
    <div>
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
      slug
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
            url
            width
            height
          }
        }
        ... on PricingSectionRecord {
          __typename
          navigationId
          title
          pricingCard {
            title
            priceInCents
            isFree
            buttonText
            finePrint
            priceSuffix
            description
            featured
          }
        }
        ... on ImageRecord {
          __typename
          imageTitle
          image {
            url
            width
            height
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
