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
export async function getInteractivePortfolioPosts(count = 20) {
  const results = await fetchAPI(`{
    projectCategories(where: {name: "Interactive"}) {
      edges {
        node {
          id
          name
          projects(first: ${count}) {
            edges {
              node {
                id
                databaseId
                slug
                title
                websiteUrl
                featuredImage {
                  node {
                    id
                    databaseId
                    altText
                    mediaItemUrl
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
  const posts = results?.projectCategories?.edges[0]?.node?.projects?.edges;
  return posts.map((post) => post.node);
}

// get single portfolio post
export async function getPortfolioPost(slug) {
  const results = await fetchAPI(
    `{
    projectBy(slug: "${slug}") {
      id
      databaseId
      slug
      content
      title
      websiteUrl
      featuredImage {
        node {
          id
          databaseId
          altText
          mediaItemUrl
          mediaDetails {
            sizes(include: _16_BY_9_CROP_MD) {
              height
              name
              sourceUrl
              width
            }
          }
        }
      }
      featuredImages {
        edges {
          node {
            id
            databaseId
            altText
            mediaItemUrl
            mediaDetails {
              sizes(include: _16_BY_9_CROP_MD) {
                height
                name
                sourceUrl
                width
              }
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
          title
          content
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
