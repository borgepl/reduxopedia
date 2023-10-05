import React from 'react'
import { useSelector } from 'react-redux'

function DestinationFact() {

    const selectedDest = useSelector((state) => state.destinationStore.destinationSelected);

    if (selectedDest===null) return (
        <div className='text-center text-warning pt-4'>Select Destination</div>
    )
    else {

        return (
   
            <div className='text-center border p-3 m-3'>
                <h4 className='text-success'>{selectedDest.name}</h4>
                Days Recommended : {selectedDest.days} <br />
                Fun Fact : {selectedDest.fact}
            </div>
          )
    }

 
}

export default DestinationFact