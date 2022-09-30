import React from 'react';
import './Activity.css'

const Activity = ( {activity }) =>{
    const { image, name, age, time } = activity;    
   
    const handleAddToList = () =>
    {
        console.log( time );
   }
    return (
        <div className='activity'>
            {
                <><img src={ image } alt="" />
                    <div className='activity-info'>
                        <p className='activity-name'>Activity Name: { name }</p>
                        <p className='age'>Age: { age }</p>
                        <p className='time'>Time: {time}</p>    
                    </div>
                    <button onClick={handleAddToList}  className='btn-list'><p>Add to List</p></button>
                                
                </>               
            }

        </div>


    );
};

export default Activity;