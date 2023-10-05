import React from 'react'
import { useDispatch } from 'react-redux';
//import { resetCounter } from '../../redux/slice/counterSlice';
import { resetDestination } from '../../redux/slice/destinationSlice';

function ResetApp() {

    const dispatch = useDispatch();
    const reset = () => {
        //dispatch(resetCounter());
        dispatch(resetDestination());
    }

  return (
    <div className='text-center'>
        <button className='btn btn-warning'
        onClick={reset}>Reset App</button>
    </div>
  )
}

export default ResetApp