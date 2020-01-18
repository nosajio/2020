import PostHeadline from 'components/PostHeadline';
import React from 'react';
import theme from 'styled/theme';
import debounce from 'utils/debounce';
import { PostsContext } from '../../contexts/posts-context';
import * as Front from './styled';

interface FrontProps {
  rootIsLoading: boolean;
}

const FrontRoute: React.FC<FrontProps> = ({ rootIsLoading }) => {
  const [indexHover, setIndexHover] = React.useState<undefined | number>(
    undefined,
  );
  React.useEffect(() => {
    window.addEventListener('mousemove', e => {
      const target = e.target as HTMLElement;
      const isOutsidePostsList = target?.parentElement?.tagName
        ? target.parentElement.tagName !== 'A'
        : false;
      debounce(() => {
        if (isOutsidePostsList) {
          setIndexHover(undefined);
        }
      }, 300)();
    });
  }, []);
  return (
    <PostsContext.Consumer>
      {posts =>
        posts.length === 0 ? null : (
          <Front.Frame>
            <Front.PostsList>
              {posts
                ? posts.map((post: Post, i) => (
                    <Front.PostFrame
                      key={`post-${i}`}
                      withTransparency={
                        typeof indexHover === 'number' && i !== indexHover
                      }
                    >
                      <PostHeadline
                        {...post}
                        onHover={() => setIndexHover(i)}
                        marginBottom={
                          i + 1 < posts.length ? theme.msrem(3) : '0'
                        }
                        to={`/r/${post.slug}`}
                      />
                    </Front.PostFrame>
                  ))
                : 'Parsing posts...'}
            </Front.PostsList>
          </Front.Frame>
        )
      }
    </PostsContext.Consumer>
  );
};

export default FrontRoute;
