import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainLayout from './components/layouts/main';
import ProductList from './components/routes/product-list/product-list';
import ProductDetails from './components/routes/product-details';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/product-details/:id" component={ProductDetails} />
            <Route path="/items/search=:id" component={ProductList} />
            <Redirect to="/" />
          </Switch>
        </MainLayout>
      </Router>
    </Provider>
  );
}

export default App;