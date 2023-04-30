import DatoCMSClientConfig from "~/config/datocmsClientConfig";

export default () => {
  const {
    public: {
      datocmsContentDeliveryUrl,
      datocmsToken,
      datocmsFullAccessApiToken,
    },
  } = useRuntimeConfig();

  const { getSkip } = usePagination();

  const getAllArticlesGraphQLQuery = (page: number, first?: number) => {
    const skip = getSkip(page, first);

    return `
    {
      allArticles(first: "${first}", skip: "${skip}") {
        thumbnail {
          responsiveImage(
            imgixParams: { fit: crop, w: 400, h: 400, auto: format }) 
          {
              src
              width
              height
              alt
              title
              base64
              bgColor
              sizes
          }
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
      id
      thumbnail {
        responsiveImage(
          imgixParams: { fit: crop, w: 500, h: 500, auto: format }) 
        {
            src
            width
            height
            alt
            title
            base64
            bgColor
            sizes
        }
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

  const publishRecord = async (
    recordId: string,
    datoCmsClientConfig: DatoCMSClientConfig,
    recursive: boolean = false
  ) => {
    try {
      const item = await datoCmsClientConfig
        .getClient()
        .items.publish(recordId, { recursive });

      return item;
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * update article's views count and publish it
   * @param viewsCount
   * @param articleRecordsId
   * @param datoCmsClientConfig
   * @returns the updated and published article's item
   */
  const updateArticleViewsCount = async (
    viewsCount: number,
    articleRecordsId: string,
    datoCmsClientConfig: DatoCMSClientConfig
  ) => {
    try {
      const updatedItem = await datoCmsClientConfig
        .getClient()
        .items.update(articleRecordsId, {
          viewscount: viewsCount,
        });

      const publishedItem = await publishRecord(
        updatedItem.id,
        datoCmsClientConfig
      );
      return publishedItem;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    datocmsContentDeliveryUrl,
    datocmsToken,
    getAllArticlesGraphQLQuery,
    getArticleBySlugGraphQLQuery,
    updateArticleViewsCount,
    DatoCMSClientConfig,
    datocmsFullAccessApiToken,
  };
};
