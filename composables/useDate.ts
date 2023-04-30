export default () => {
  const formatIDDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  return { formatIDDate };
};
