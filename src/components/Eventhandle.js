import React from 'react';

function EventHandle() {
    function clickHandler(){
        console.log("button clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>click me</button>
        </div>
    )
}
export default EventHandle