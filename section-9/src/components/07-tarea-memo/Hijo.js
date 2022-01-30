import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {
    console.log('Call :(  ');

    return (
        <button
            className="btn btn-primary"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
})
