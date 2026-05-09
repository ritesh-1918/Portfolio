type BaseBlock = {
  type: "paragraph" | "heading" | "code" | "image" | "quote" | "list" | "video";
};

type ParagraphBlock = BaseBlock & {
  type: "paragraph";
  content: string;
};

type HeadingBlock = BaseBlock & {
  type: "heading";
  content: string;
  level: number;
};

type CodeBlock = BaseBlock & {
  type: "code";
  content: string;
  language?: string;
};

type ImageBlock = BaseBlock & {
  type: "image";
  url: string;
  caption?: string;
};

type QuoteBlock = BaseBlock & {
  type: "quote";
  content: string;
};

type ListBlock = BaseBlock & {
  type: "list";
  items: string[];
};

type VideoBlock = BaseBlock & {
  type: "video";
  url: string;
  caption?: string;
};

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | CodeBlock
  | ImageBlock
  | QuoteBlock
  | ListBlock
  | VideoBlock;

export interface Author {
  name: string;
  image: string;
  role: string;
  bio: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: ContentBlock[];
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: Author;
  views: number;
  likes: number;
  comments: number;
  demoUrl?: string;
  featured?: boolean;
}
