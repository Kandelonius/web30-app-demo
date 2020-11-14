import React, { useEffect, useState } from 'react';

function Keys(props) {

    const [value, setValue] = useState(0);
    return (
        <button onClick={() => props.onClick(props.keyValue)}>
            {props.keyValue}
        </button>
    );
}

export default Keys;