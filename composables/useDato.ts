export default () => {
  const {
    public: { datocmsContentDeliveryUrl, datocmsToken },
  } = useRuntimeConfig();

  const { getSkip } = usePagination();

  const getAllArticlesGraphQLQuery = (page: number, first?: number) => {
    const skip = getSkip(page, first);

    return `
    {
      allArticles(first: "${first}", skip: "${skip}") {
        thumbnail {
          url
        }
        title
        tag
        articleDescription
        slug
      }
      _allArticlesMeta {
        count
      }
    }
    `;
  };

  const getArticleBySlugGraphQLQuery = (slug: string) => `
  {
    article(filter: {slug: {eq: "${slug}"}}) {
      thumbnail {
        url
      }
      title
      tag
      author {
        authorName
        linkedinLink
      }
      updatedAt
      viewscount
      body
      reference
      slug
    }
  }
  `;

  return {
    datocmsContentDeliveryUrl,
    datocmsToken,
    getAllArticlesGraphQLQuery,
    getArticleBySlugGraphQLQuery,
  };
};
