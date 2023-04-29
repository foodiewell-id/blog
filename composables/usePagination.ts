export default () => {
  const {
    public: { paginationMaxResult },
  } = useRuntimeConfig();

  /**
   * Get number of previous items to be skipped
   * @param currentPage
   * @param itemsPerPage
   * @returns number of previous items to be skipped
   */
  const getSkip = (
    currentPage: number,
    itemsPerPage: number = paginationMaxResult
  ) => (currentPage - 1) * itemsPerPage;

  return { paginationMaxResult, getSkip };
};
