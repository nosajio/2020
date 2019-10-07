import React from 'react';
import * as Front from './styled';
import { getAllPosts } from '../../services/posts-api';

interface FrontProps {}

const FrontRoute: React.FC<FrontProps> = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  React.useEffect(() => {
    Promise.all([getAllPosts(), import('@nosaj/codex')]).then(
      ([posts, codex]) => {
        const parsedPosts: Post[] = posts.map((post: PostFile) =>
          JSON.parse(codex.md_to_json(post.filename, post.body)),
        );
        setPosts(parsedPosts);
      },
    );
  }, []);
  return (
    <Front.Frame>
      nosaj.io blog
      <Front.PostsList>
        {posts.map((post: Post) => (
          <Front.PostFrame key={post.slug}>{post.title}</Front.PostFrame>
        ))}
      </Front.PostsList>
    </Front.Frame>
  );
};

export default FrontRoute;
