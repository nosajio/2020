import Page from 'components/Page';
import PageTop from 'components/PageTop';
import { PostsContext } from 'contexts/posts-context';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Front from 'routes/Front';
import Read from 'routes/Read';
import { getAllPosts } from 'services/posts-api';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styled/globals';
import theme from 'styled/theme';
import { getAllSavedPosts, refreshPostStore } from 'utils/store';

interface RootState {
  posts: Post[];
}

class Root extends React.Component<{}, RootState> {
  state = {
    posts: [],
  };

  componentDidMount() {
    const savedPosts = getAllSavedPosts();
    if (savedPosts) {
      this.setState({ posts: savedPosts });
    } else {
      this.cachedFetchPosts();
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <PostsContext.Provider value={this.state.posts}>
          <Router>
            <Page>
              <PageTop />
              <GlobalStyles />
              <Switch>
                <Route exact path="/" component={Front} />
                <Route exact path="/r/:slug" component={Read} />
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
    this.setState({ posts: parsedPosts });
  }
}

export default Root;
