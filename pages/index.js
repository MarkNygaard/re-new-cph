import { gql, GraphQLClient } from 'graphql-request';
import PageSections from '../components/PageSections';

export default function Home({ page }) {
  return (
    <div>
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
          bigTitle
          smallTitle
          description
          buttonText
          buttonLink
          id
        }
        ... on TextImageRecord {
          __typename
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
