import './counter.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../reducers/counterSlice'

function Counter() {
    
    const [number, setNumber] = useState(1);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    
    const handleClick = () => {
        setNumber(number + 1);
        dispatch(increment());

    }

    const handleDown = () => {
        setNumber(number - 1);
        dispatch(decrement());
    }

    return (
        <div className="Counter">
            <h1>Counter - {number}</h1>
            <h1>Redux - Count: {count}</h1>
            <hr></hr>
            <Button className="ButtonUp" variant="success" size="lg" onClick={handleClick}>UP</Button>{' '}
            <Button className="ButtonDown" variant="danger" size="lg" onClick={handleDown}>Down</Button>
        </div>
    );
}
//<button onClick={handleClick}>up</button>

export default Counter;