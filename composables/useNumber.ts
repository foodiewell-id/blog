export default () => {
  const abbreviateNumberWithK = (num: number): string => {
    if (num >= 1000) {
      const abbreviatedNum: string = Math.floor(num / 1000) + "k";
      return abbreviatedNum;
    } else {
      return num.toString();
    }
  };

  return { abbreviateNumberWithK };
};
