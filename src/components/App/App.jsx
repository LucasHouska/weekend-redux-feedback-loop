import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';

import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Review from '../Review/Review';
import CompletedSurvey from '../CompletedSurvey/CompletedSurvey';

function App() {

  const dispatch = useDispatch();

  const fetchFeedback = () => {
    axios.get('/feedback')
    .then(response => {
      console.log(response.data);
      dispatch({type: 'FEEDBACK', payload: response.data});
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchFeedback();
  }, [])

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path='/' exact>
          <Feeling />
        </Route>

        <Route path='/understanding'>
          <Understanding />
        </Route>

        <Route path='/support'>
          <Support />
        </Route>

        <Route path='/comments'>
          <Comments />
        </Route>

        <Route path='/review'>
          <Review />
        </Route>

        <Route path='/completed'>
          <CompletedSurvey />
        </Route>


      </div>
    </Router>
  );
}

export default App;
