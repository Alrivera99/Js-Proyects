import React, {useState}from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value}) =>{

    const [counter,setCounter] = useState(0); // []

    //handleAdd
    const handleAdd = (e) => {
        setCounter( (c) => c+1)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>

            <button onClick={handleAdd}>+1</button>
        </>
    )

}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
