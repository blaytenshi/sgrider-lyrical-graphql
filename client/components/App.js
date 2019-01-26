import React from 'react';

export default (props) => {
    return (
        <div className='container'>
            <button type={'button'} onClick={ () => { props.history.push('/songs')} }>Songs List</button>
        </div>
    )
}