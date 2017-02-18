const React                       = require('react');
const { render }                  = require('react-dom');
const { Provider }                = require('react-redux');
const { createStore }             = require('redux');

const make_reducer                = require('./state/reducers/make_reducer');

const TopLevelWrapperComponent    = require('./components/TopLevelWrapperComponent');

const store = createStore(make_reducer);


render(
    <Provider
        store={store}>
        <TopLevelWrapperComponent />
    </Provider>,
    document.getElementById('root')
);
