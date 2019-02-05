import React from 'react';

const List = (props) => {
    return (
            <div id='list' className='col-md-6 mx-auto mt-3 p-2'>
            <table className='col-12'>

                {props.children}
            </table>
            </div>

    )
};

export default List;