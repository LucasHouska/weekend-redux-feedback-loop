import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState(6)


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('clicked submit!')

        dispatch({ type: 'ADD_FEELING', payload: feeling })

        history.push('/understanding');
    }

    console.log(feeling)

    return (
        <>
            <h1>How are you feeling today?</h1>
            <p>{feeling}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="feeling">Feeling (between 1 and 10):</label>
                <input
                    onChange={(event) => { setFeeling(event.target.value) }}
                    type="range"
                    name="feeling"
                    min="1"
                    max="10"
                    value={feeling}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default Feeling;