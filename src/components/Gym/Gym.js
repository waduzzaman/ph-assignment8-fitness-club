import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import List from '../List/List';
import './Gym.css'

const Gym = () =>
{
    const [ activities, setActivities ] = useState([]);

    useEffect( () =>
    {
        fetch( 'activities.json' )
            .then( res => res.json() )
            .then( data => setActivities( data ) )
        
    }, [] )


  
    
    return (
        <div className='activity-container'>
            <div className="activity-container-details">
                {
                    activities.map( activity => <Activity
                        key={ activity.id }
                        activity={ activity }
                        // handleAddToList={handleAddToList}
                    ></Activity> )
                }
            </div>
            <div className="cart-container">
               <List></List>

            </div>
            
        </div>
    );
};

export default Gym;