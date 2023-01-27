import * as React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { Router } from 'react-router-dom';

import { IntlContainer } from '../../intl';
import History from '../app/history';
import Store from '../app/store';
import Theme from '../app/theme';
import Routes from '../app/routes';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <MuiThemeProvider theme={Theme}>
          <IntlContainer>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              {/* CssBaseline kickstart an elegant, consistent,
              and simple baseline to build upon. */}
              <CssBaseline />
              <Router history={History}>
                <Routes />
              </Router>
            </MuiPickersUtilsProvider>
          </IntlContainer>
        </MuiThemeProvider>
      </Provider>
    </>
  );
};

export default App;
