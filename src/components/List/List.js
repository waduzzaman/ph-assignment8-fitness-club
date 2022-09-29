import React from 'react';

const List = ( { list } ) => {
    return (
        <div>
              <h3>This is for Total activities</h3>
                <p> Total Activity:{ list.length}</p>
            
        </div>
    );
};

export default List;