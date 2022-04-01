import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';



const feedback = {
    feeling: '',
    understanding: '',
    supported: '',
    comments: ''
}



const feedbackReducer = (state = feedback, action) => {
    if(action.type === 'ADD_FEELING') {
        console.log(action.payload)
        return {
            ...state,
            feeling: action.payload
        }
    }

    return state;
}

const store = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
