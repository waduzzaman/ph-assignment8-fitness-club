import React from 'react';
import './Workout.css'

const Workout = ( {activity, handleAddToList } ) =>
{
    // const {activity, handleAddToList } = props;
    const { image, name, age, time } = activity;
    
  

    return (
        <div className='workout'>
            <img src={ image } alt="" />
            <div className='workout-details'>
                <p className='workout-name'>Activity Name:{name} </p>
                <p>Age: { age }</p>
                <p>Time : {time} min</p>
            </div>
            <button button onClick={()=>handleAddToList(activity)}
            className = 'btn-list' >
                <p>Add to List</p>
            </button>
           
        </div>
    );
};

export default Workout;