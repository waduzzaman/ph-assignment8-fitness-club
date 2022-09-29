import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './Gym.css'

const Gym = () =>
{
    const [ activities, setActivities ] = useState( [] );

    useEffect( () =>
    {
        fetch( 'activities.json' )
            .then( res => res.json() )
        .then( data => setActivities( data ) )
    },[])

    return (
        <div className='gym-container'>
            <div className="activities-container">
                {
                    activities.map( activity => <Workout
                        key={ activity.id }
                        activity={activity}
                    ></Workout> )
              }
           </div>
            <div className="complete-activities">
                <h3>This is for Total activities</h3>
           </div>
        </div>
    );
};

export default Gym;