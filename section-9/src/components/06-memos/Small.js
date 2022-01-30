import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log(' Call :(  ');
    // http? :(

    return (
        <small> {value} </small>
    )
});

