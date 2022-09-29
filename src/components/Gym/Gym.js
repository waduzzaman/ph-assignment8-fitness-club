import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './Gym.css'

const Gym = () =>
{
    const [ activities, setActivities ] = useState( [] );
    const [list, setList] = useState([]);

    useEffect( () =>
    {
        fetch( 'activities.json' )
            .then( res => res.json() )
        .then( data => setActivities( data ) )
    }, [] )
    
    const handleAddToList = () => {
        console.log( "clicked" );
        
        const newList = [ ...list, list];
        setList( newList );
    }
    



    return (
        <div className='gym-container'>
            <div className="activities-container">
                {
                    activities.map( activity => <Workout
                        key={ activity.id }
                        activity={ activity }
                        handleAddToList={handleAddToList}
                    ></Workout> )
              }
           </div>
            <div className="complete-activities">
                <h3>This is for Total activities</h3>
                <p> Total Activity:{ list.length}</p>
           </div>
        </div>
    );
};

export default Gym;