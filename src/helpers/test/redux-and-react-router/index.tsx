import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from '../../../redux/store';
export const withReduxAndRouter = (Component: JSX.Element) => () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={() => Component} />
        </Switch>
      </Router>
    </Provider>
  ) as any;
};