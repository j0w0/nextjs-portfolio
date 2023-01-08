const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getInteractivePortfolioPosts() {
  const results = await fetchAPI(`{
    projectCategories(where: {name: "Interactive"}) {
      edges {
        node {
          id
          name
          projects(first: 20) {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
        }
      }
    }
  }`);
  return results?.projectCategories?.edges[0]?.node?.projects?.edges;
}

export async function getPortfolioPost(slug) {
  const results = await fetchAPI(
    `{
    projectBy(slug: "${slug}") {
      id
      projectId
      slug
      content
      title
      websiteUrl
    }
  }`,
    {
      variables: { slug },
    }
  );
  return results?.projectBy;
}

export async function getPages() {
  const results = await fetchAPI(`{
    pages {
      edges {
        node {
          slug
        }
      }
    }
  }`);
  return results?.pages?.edges;
}
