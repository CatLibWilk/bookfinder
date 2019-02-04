import React from 'react';

const List = (props) => {
    return (
            <div id='list' className='col-md-6 mx-auto mt-3 p-2'>
                {props.children}
            </div>

    )
};

export default List;