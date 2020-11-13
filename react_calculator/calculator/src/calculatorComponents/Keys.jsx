import React, { useEffect, useState } from 'react';

function Keys() {

    const [value, setValue] = useState(0);

    // const handleClick = () => {
    //     this.setState({ count: this.state.count + 1 });
    // }

    return (<div>
        <div id="firstRow">
            <span><button onClick={() => setValue(7)}>7</button></span>
            <span><button onClick={() => setValue(8)}>8</button></span>
            <span><button onClick={() => setValue(9)}>9</button></span>
            {/* <span><button onClick={() => setValue(*)}>*</button></span> */}
        </div>
        <div id="secondRow">
            <span><button onClick={() => setValue(4)}>4</button></span>
            <span><button onClick={() => setValue(5)}>5</button></span>
            <span><button onClick={() => setValue(6)}>6</button></span>
        </div>
        <div id="thirdRow">
            <span><button onClick={() => setValue(1)}>1</button></span>
            <span><button onClick={() => setValue(2)}>2</button></span>
            <span><button onClick={() => setValue(3)}>3</button></span>
        </div>
        <div id="fourthRow">
            <span><button onClick={() => setValue(0)}>0</button></span>
        </div>
    </div>
    )
}

export default Keys;