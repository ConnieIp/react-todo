import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducer';
import TodoList from './components/TodoList.js'

const store = createStore(reducer);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <TodoList/>
    </Provider>, document.getElementById('root'));