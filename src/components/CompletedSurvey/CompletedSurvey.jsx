import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CompletedSurvey() {

    const history = useHistory();
    const feedback = useSelector(state => state.oldFeedbackReducer)
    console.log('feedback is', feedback)


    const handleClick = () => {

        history.push('/feeling');

    }

    return (
        <>
            <div>
                <h1>Thank you for your feedback!</h1>
            </div>
            <div>
                <button onClick={handleClick}>Leave new feedback</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Prior Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedback.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>Feeling: {item.feeling}</td>
                                    <td>Understanding: {item.understanding}</td>
                                    <td>Support: {item.support}</td>
                                    <td>Comments: {item.comments}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CompletedSurvey;