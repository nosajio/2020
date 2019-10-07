interface PostFile {
  filename: string;
  contentURI: string;
  body: string;
  slug: string;
  date: Date;
}

interface Post {
  title: string;
  slug: string;
  date: string;
  metadata: {
    [metaKey: string]: string | number | null;
  };
  html: string;
  plain: string;
}
