import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Feeling() {

    dispatch = useDispatch();

    const [feeling, setFeeling] = useState(6)


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('clicked submit!')

        dispatch({type: 'ADD_FEELING', payload: feeling})
    }

    console.log(feeling)

    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="feeling">Feeling (between 1 and 10):</label>
                <input 
                onChange={(event) => {setFeeling(event.target.value)}}
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