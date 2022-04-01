import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(6);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('clicked submit!');

        dispatch({type: 'ADD_UNDERSTANDING', payload: understanding});

        history.push('/support');

    }

    console.log(understanding)


    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="understanding">Understanding (between 1 and 10):</label>
                <input
                    onChange={(event) => { setUnderstanding(event.target.value) }}
                    type="range"
                    name="understanding"
                    min="1"
                    max="10"
                    value={understanding}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default Understanding;