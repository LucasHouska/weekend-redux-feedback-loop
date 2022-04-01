import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('clicked submit!');

        dispatch({ type: 'ADD_COMMENT', payload: comment });

        // history.push('/review');

    }

    console.log(comment)
    return (
        <>
            <h1>Any comment you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Comment:</label>
                <input
                    onChange={(event) => { setComment(event.target.value) }}
                    type="text"
                    name="comment"
                    value={comment}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default Comments;