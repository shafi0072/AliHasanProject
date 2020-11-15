import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import theme from './package/theme/theme';
import TestPage from './package/components/TestPage';

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/test" component={TestPage} />
          <Route path="/">
            <Redirect to="/test" />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);
