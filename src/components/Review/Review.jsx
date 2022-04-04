import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


function Review({fetchFeedback}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const feedback = useSelector(state => state.feedbackReducer)

    console.log(feedback)

    const handleSubmit = () => {
        console.log('clicked submit!', feedback)

        axios.post('/feedback', feedback)
        .then(response => {
            console.log(response)
            dispatch({type: 'CLEAR'})
            history.push('/completed')
            fetchFeedback();
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <>
            <h1>Review your feedback!</h1>
            <h2>Feelings: {feedback.feeling}</h2>
            <h2>Understanding: {feedback.understanding}</h2>
            <h2>Support: {feedback.support}</h2>
            <h2>Comment: {feedback.comment}</h2>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Review;