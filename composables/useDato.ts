import DatoDTO from "~/types/DatoDTO";

export default () => {
  const {
    public: { paginationMaxResult, datocmsContentDeliveryUrl, datocmsToken },
  } = useRuntimeConfig();

  const getAllArticlesGraphQLQuery = (
    page: number,
    first: number = paginationMaxResult
  ) => {
    // TODO: SEPARATE THIS TO usePagination() - FOR TESTABLE/TDD SAKE
    const skip = (page - 1) * first;
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
