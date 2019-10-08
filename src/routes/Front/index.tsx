import React from 'react';
import { PostsContext } from '../../contexts/posts-context';
import * as Front from './styled';

interface FrontProps {}

const FrontRoute: React.FC<FrontProps> = () => {
  return (
    <PostsContext.Consumer>
      {posts => (
        <Front.Frame>
          nosaj.io blog
          <Front.PostsList>
            {posts
              ? posts.map((post: Post) => (
                  <Front.PostFrame key={post.slug}>
                    {post.title}
                  </Front.PostFrame>
                ))
              : 'Loading posts...'}
          </Front.PostsList>
        </Front.Frame>
      )}
    </PostsContext.Consumer>
  );
};

export default FrontRoute;
