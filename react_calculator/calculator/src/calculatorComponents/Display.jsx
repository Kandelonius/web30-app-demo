import React, { useEffect, useState } from 'react';

function Display(props) {

    const [nextValue, setNextValue] = useState("0");

    return (
        <div id="displayInner" className="result" type="text">
            {nextValue}
        </div>
    )
}

export default Display;