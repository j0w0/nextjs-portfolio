const API_URL = process.env.WORDPRESS_API_URL;

// fetch util function
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

// get all portfolio posts in "Interactive" category
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
                slug
                title
                websiteUrl
                featuredImage {
                  node {
                    id
                    altText
                    databaseId
                    mediaItemUrl
                    srcSet
                    mimeType
                    mediaDetails {
                      height
                      width
                    }
                  }
                }
                projectTags {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`);
  return results?.projectCategories?.edges[0]?.node?.projects?.edges;
}

// get single portfolio post
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
      featuredImage {
        node {
          id
          altText
          databaseId
          mediaItemUrl
          srcSet
          mimeType
          mediaDetails {
            height
            width
          }
        }
      }
      attachedMedia {
        edges {
          node {
            id
            altText
            databaseId
            mediaItemUrl
            srcSet
            mimeType
            mediaDetails {
              height
              width
            }
          }
        }
      }
      projectTags {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }`,
    {
      variables: { slug },
    }
  );
  return results?.projectBy;
}

// get all pages
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

// get single page by slug
export async function getPageBySlug(slug) {
  const results = await fetchAPI(
    `{
    pages(where: {name: "${slug}"}) {
      edges {
        node {
          id
          pageId
          slug
          title
          content
        }
      }
    }
  }`
  );
  return results?.pages?.edges[0].node;
}
