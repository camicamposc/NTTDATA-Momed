import React, { forwardRef } from 'react'


const ComponentToPrint = forwardRef((props, ref) => {

    return <div ref={ref}>hello world</div>;
});

export default ComponentToPrint