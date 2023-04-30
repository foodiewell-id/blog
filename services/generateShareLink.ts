export default (shareText: string, shareUrl: string) => {
  const facebookShareUrl = `https://www.facebook.com/share.php/?u=${shareUrl}/${shareText}`;
  const telegramShareUrl = `https://telegram.me/share/url?url=${shareUrl}&text=${shareText}`;
  const whatsappShareUrl = `https://wa.me/?text=${shareText}%0D%0A%0D%0A${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/share?text=${shareText}&url=${shareUrl}`;

  return {
    facebookShareUrl,
    telegramShareUrl,
    whatsappShareUrl,
    twitterShareUrl,
  };
};
