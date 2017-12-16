import React from 'react'


const Cockpit =(props)=>{
    return(
        <div className="Cockpit">
        <h1>Grossery List</h1>
        <p>Add the products you wish to purchase!</p>
        <button className='button'
          onClick={props.click}>Toggle the list</button>
        </div>
    );
}

export default Cockpit