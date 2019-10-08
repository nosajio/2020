import React from 'react';
import { PostsContext } from '../../contexts/posts-context';
import * as Front from './styled';
import { Link } from 'react-router-dom';

interface FrontProps {}

const FrontRoute: React.FC<FrontProps> = () => {
  return (
    <PostsContext.Consumer>
      {posts =>
        posts.length === 0 ? (
          'Loading'
        ) : (
          <Front.Frame>
            <Front.PostsList>
              {posts
                ? posts.map((post: Post) => (
                    <Front.PostFrame key={post.slug}>
                      <Link to={`/r/${post.slug}`}>{post.title}</Link>
                    </Front.PostFrame>
                  ))
                : 'Loading posts...'}
            </Front.PostsList>
          </Front.Frame>
        )
      }
    </PostsContext.Consumer>
  );
};

export default FrontRoute;
