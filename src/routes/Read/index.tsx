import React from 'react';
import * as Read from './styled';
import { PostsContext } from '../../contexts/posts-context';
import { RouteComponentProps } from 'react-router';

interface ReadRouteProps extends RouteComponentProps<{ slug: string }> {}

const ReadRoute: React.FC<ReadRouteProps> = ({ match }) => {
  const { slug } = match.params;
  const posts = React.useContext(PostsContext);
  const post = posts.find(p => p.slug === slug);

  return post ? (
    <Read.Frame>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </Read.Frame>
  ) : (
    <>No post</>
  );
};

export default ReadRoute;
