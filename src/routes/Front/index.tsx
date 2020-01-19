import PostHeadline from 'components/PostHeadline';
import React, { SyntheticEvent } from 'react';
import theme from 'styled/theme';
import debounce from 'utils/debounce';
import { eventPathContainsClassName } from 'utils/events';
import { PostsContext } from '../../contexts/posts-context';
import * as Front from './styled';
import { RouteComponentProps } from 'react-router-dom';

interface FrontProps extends RouteComponentProps {
  rootIsLoading: boolean;
}

const FrontRoute: React.FC<FrontProps> = ({ rootIsLoading, history }) => {
  const frameRef = React.useRef<null | HTMLUListElement>(null);

  // The index of the item that's currently being hovered / targeted
  const [indexHover, setIndexHover] = React.useState<undefined | number>(
    undefined,
  );

  // The index of the item that's currently being transitioned to
  const [indexNavigate, setIndexNavigate] = React.useState<undefined | number>(
    undefined,
  );

  // Handle the transition to a post
  const handleNavigateToPost = React.useCallback(
    (e: SyntheticEvent, navigatePath: string, selectedIndex: number) => {
      const target = e.target as HTMLLIElement;
      const targetPosition = target?.parentElement?.offsetTop || 0;
      const scrollTo = targetPosition - theme.mspx(7);
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
      setIndexNavigate(selectedIndex);
      setTimeout(() => {
        history.push(navigatePath, { animated: true });
      }, 500);
    },
    [history],
  );

  const handleMouseMove = React.useCallback(
    (e: MouseEvent, frameClassName?: string) => {
      if (!frameClassName) {
        return;
      }
      const isOutsidePostsList = !eventPathContainsClassName(e, frameClassName);
      debounce(() => {
        if (isOutsidePostsList) {
          setIndexHover(undefined);
        }
      }, 300)();
    },
    [],
  );

  // Reset the hover effect when the focus moves outside of a post list item
  React.useEffect(() => {
    const frameEl: HTMLUListElement | null = frameRef.current;
    const frameClassName = frameEl?.className;

    window.addEventListener('mousemove', e =>
      handleMouseMove(e, frameClassName),
    );

    return () => {
      window.removeEventListener('mousemove', e => handleMouseMove(e));
    };
  }, [frameRef, handleMouseMove]);

  return (
    <PostsContext.Consumer>
      {posts =>
        posts.length === 0 ? null : (
          <Front.Frame>
            <Front.PostsList ref={frameRef}>
              {posts
                ? posts.map((post: Post, i) => (
                    <Front.PostFrame
                      key={`post-${i}`}
                      withTransparency={
                        typeof indexNavigate !== 'number' &&
                        typeof indexHover === 'number' &&
                        i !== indexHover
                      }
                      isHidden={
                        typeof indexNavigate === 'number' && i !== indexNavigate
                      }
                    >
                      <PostHeadline
                        {...post}
                        onHover={() => setIndexHover(i)}
                        marginBottom={
                          i + 1 < posts.length ? theme.msrem(3) : '0'
                        }
                        onClick={e =>
                          handleNavigateToPost(e, `/r/${post.slug}`, i)
                        }
                        // to={`/r/${post.slug}`}
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
