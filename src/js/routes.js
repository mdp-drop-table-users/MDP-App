import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Dashboard from 'views/Dashboard';
import CalendarView from 'views/CalendarView';
import NotFound from 'views/NotFound';
import Treatments from 'views/Treatments';
import Search from 'views/Search';

const publicPath = '/';

export const routeCodes = {
  // DASHBOARD: publicPath,
  // CALENDAR_VIEW: `${ publicPath }calendar`,
  TREATMENTS: `${ publicPath }treatments`,
  REFER: publicPath,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ publicPath } component={ App }>
          <IndexRoute component={ Search } />
          <Route path={ routeCodes.TREATMENTS } component={ Treatments } />
          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    );
  }
}
