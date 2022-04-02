import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';



const feedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comment: 0
}



const feedbackReducer = (state = feedback, action) => {
    if(action.type === 'ADD_FEELING') {
        console.log(action.payload)
        return {
            ...state,
            feeling: Number(action.payload)
        }
    } else if(action.type === 'ADD_UNDERSTANDING') {
        console.log(action.payload)
        return {
            ...state,
            understanding: Number(action.payload)
        }
    } else if(action.type === 'ADD_SUPPORT') {
        console.log(action.payload)
        return {
            ...state,
            support: Number(action.payload)
        }
    } else if(action.type === 'ADD_COMMENT') {
        console.log(action.payload)
        return {
            ...state,
            comment: action.payload
        }
    }

    return state;
}


const oldFeedbackReducer = (state = [], action) => {
    if(action.type ==='FEEDBACK') {
        console.log('payload is', action.payload)
        return action.payload
    }
    
    return state;
}


const store = createStore(
    combineReducers({
        feedbackReducer,
        oldFeedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
