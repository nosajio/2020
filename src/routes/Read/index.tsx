import React from 'react';
import * as Read from './styled';
import { PostsContext } from '../../contexts/posts-context';
import { RouteComponentProps } from 'react-router';
import PostHeadline from 'components/PostHeadline';
import theme from 'styled/theme';

interface ReadRouteProps extends RouteComponentProps<{ slug: string }> {
  rootIsLoading: boolean;
}

const ReadRoute: React.FC<ReadRouteProps> = ({ match }) => {
  const { slug } = match.params;
  const posts = React.useContext(PostsContext);
  const post = posts.find(p => p.slug === slug);

  return post ? (
    <Read.Frame>
      <PostHeadline
        {...post}
        marginBottom={theme.msrem(5)}
        to={`/r/${post.slug}`}
      />
      <Read.Body dangerouslySetInnerHTML={{ __html: post.html }} />
    </Read.Frame>
  ) : null;
};

export default ReadRoute;
