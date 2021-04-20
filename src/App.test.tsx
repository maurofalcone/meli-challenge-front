import { withReduxAndRouter } from './helpers/test/redux-and-react-router';
import * as ReactDOM from 'react-dom';
import App from './App';

it('app renders without crashing', () => {
    const div = document.createElement('div');
    const layout = <App><div>children</div></App>;
    const Component = withReduxAndRouter(layout);
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
});
