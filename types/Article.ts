// Generated by https://quicktype.io
export interface AllArticlesDTO {
  allArticles: AllArticle[];
  _allArticlesMeta: AllArticlesMeta;
}

export interface AllArticle {
  thumbnail: Thumbnail;
  title: string;
  tag: string;
  articleDescription: string;
  slug: string;
}

interface AllArticlesMeta {
  count: number;
}

interface Thumbnail {
  responsiveImage: ResponsiveImage;
}

export interface ArticleDTO {
  article: Article;
}

interface Article {
  id: string;
  thumbnail: Thumbnail;
  title: string;
  tag: string;
  author: Author;
  updatedAt: string;
  viewscount: number;
  body: string;
  reference: string;
  slug: string;
  seo: SEO[];
}

interface Author {
  authorName: string;
  linkedinLink: string;
}

export interface ResponsiveImage {
  src: string;
  width: number;
  height: number;
  alt: null;
  title: null;
  base64: string;
  bgColor: string;
  sizes: string;
}

export interface SEO {
  attributes: Record<string, string> | null;
  content: null | string;
  tag: string;
}
