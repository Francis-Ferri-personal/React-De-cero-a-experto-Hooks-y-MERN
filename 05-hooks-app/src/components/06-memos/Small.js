import React, { memo } from 'react'

// export const Small = React.memo(({value}) => {
export const Small = memo(({value}) => {
    console.log("Me volví a lamar :(");
    return (
        <small>{value}</small>
    )
})

