import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Dashboard from 'views/Dashboard';
import CalendarView from 'views/CalendarView';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  CALENDAR_VIEW: `${ publicPath }calendar`,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ publicPath } component={ App }>
          <IndexRoute component={ Dashboard } />
          <Route path={ routeCodes.DASHBOARD } component={ Dashboard } />
          <Route path={ routeCodes.CALENDAR_VIEW } component={ CalendarView } />

          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    );
  }
}