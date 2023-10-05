import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementMultiplier, decrementMultiplier } from '../../redux/slice/counterSlice';

function Counter() {

    const [multiplier, setMultiplier] = useState(10);

    const count = useSelector((state) => state.counterStore.count);
    const dispatch = useDispatch();

    return (

        <div className='mt-2 pt-3 ps-2 text-center border-top'>
           <div className='h4 pb-2'>
                 Counter : {count}
           </div>
           <div className='row'>
                <div className='col-12 col-md-6 p-4'>
                    <div className='border border-2 p-4'>
                        <h4 className='text-success pb-2'>Basic Counter</h4>
                        <button className='btn btn-primary ms-2'
                            onClick={() => dispatch(increment())}>Add</button>
                        <button className='btn btn-danger ms-2'
                            onClick={() => dispatch(decrement())}>Remove</button>
                    </div>
                </div>

                <div className='col-12 col-md-6 p-4'>
                    <div className='border border-2 p-4'>
                        <h4 className='text-success pb-2'>Multiplier Counter</h4>
                        <div className='row'>
                            <div className='col-4 p-1'>
                                <input type='text' placeholder='multiplier' 
                                    value={multiplier}
                                    onChange={(e) => setMultiplier(e.target.value)}
                                    className='form-control'></input>
                            </div>
                            <div className='col-4 p-1'>
                                <button className='btn btn-primary form-control'
                                onClick={() => dispatch(incrementMultiplier(multiplier))}>Add</button>
                            </div>
                            <div className='col-4 p-1'>
                                <button className='btn btn-danger form-control'
                                onClick={() => dispatch(decrementMultiplier(multiplier))}>Remove</button>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>

           </div>
        </div>
    )
}

export default Counter