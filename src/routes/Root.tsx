import Page from 'components/Page';
import PageTop from 'components/PageTop';
import { PostsContext } from 'contexts/posts-context';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import Front from 'routes/Front';
import Read from 'routes/Read';
import { getAllPosts } from 'services/posts-api';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styled/globals';
import theme from 'styled/theme';
import { getAllSavedPosts, refreshPostStore } from 'utils/store';
import LoadingBar from 'components/LoadingBar';

interface RootState {
  posts: Post[];
  isLoading: boolean;
}

class Root extends React.Component<{}, RootState> {
  state = {
    posts: [],
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const savedPosts = getAllSavedPosts();
    if (savedPosts) {
      this.setState(this.storePosts(savedPosts));
    } else {
      this.cachedFetchPosts();
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <PostsContext.Provider value={this.state.posts}>
          <Router>
            <Page padded>
              {isLoading && <LoadingBar />}
              <PageTop />
              <GlobalStyles />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={(routeProps: RouteComponentProps) => (
                    <Front {...routeProps} rootIsLoading={isLoading} />
                  )}
                />
                <Route
                  exact
                  path="/r/:slug"
                  component={(
                    routeProps: RouteComponentProps<{ slug: string }>,
                  ) => <Read {...routeProps} rootIsLoading={isLoading} />}
                />
              </Switch>
            </Page>
          </Router>
        </PostsContext.Provider>
      </ThemeProvider>
    );
  }

  // Fetch posts from API, then parse and store them in the user's browser
  // storage
  async cachedFetchPosts() {
    const [posts, codex] = await Promise.all([
      getAllPosts(),
      import('@nosaj/codex'),
    ]);
    const parsedPosts: Post[] = posts.map((post: PostFile) =>
      JSON.parse(codex.md_to_json(post.filename, post.body)),
    );
    refreshPostStore(parsedPosts);
    this.setState(this.storePosts(parsedPosts));
  }

  storePosts = (posts: Post[], isLoading: boolean = false) => ({
    posts,
    isLoading,
  });
}

export default Root;
