import React from 'react';
import profile from '../../images/profile-image.png'
import './List.css';

const List = ( ) =>
{
    // console.log( list );

    return (
        <div div className='list' >
            <div className='profile'>
                <img src={ profile } alt="profile image" />     
                <div>
                    <h4> M Waduzzaman</h4>
                <p><small>Toronto, Canada</small></p>
                </div>
                
            </div>

            <div className='bmi'>
                <p>35<small>kg</small></p>
                <p>6.5 <small>Height</small></p>
                <p>25<small>Age</small></p>
            </div>

            <div>
                <h4>Add a break</h4>
                <div className='add-break'>
                    <p>10<small></small></p>
                    <p>20<small></small></p>
                    <p>30<small></small></p>
                    <p>40<small></small></p>
                    <p>50<small></small></p>
                    
                </div>
            </div>
           
            <div>
                <h4>Exercise Details</h4>              
                {/* <p className='break-time'>Break Time {list.length}</p>  */}
                
            </div>
            <button className='activity-completed'> Activity Completed: { }</button>
            
            
        </div>
    );
};

export default List;