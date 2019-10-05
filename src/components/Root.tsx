import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Front from '../routes/Front';
import GlobalStyles from '../styled/globals';
import theme from '../styled/theme';

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={Front} />
          </Switch>
        </>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
