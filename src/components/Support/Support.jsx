import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState(6);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('clicked submit!');

        dispatch({type: 'ADD_SUPPORT', payload: support});

        history.push('/comments');

    }

    console.log(support)

    return (
        <>
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="support">Support (between 1 and 10):</label>
                <input
                    onChange={(event) => { setSupport(event.target.value) }}
                    type="range"
                    name="support"
                    min="1"
                    max="10"
                    value={support}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default Support;