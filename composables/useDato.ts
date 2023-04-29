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

  return {
    datocmsContentDeliveryUrl,
    datocmsToken,
    getAllArticlesGraphQLQuery,
  };
};
