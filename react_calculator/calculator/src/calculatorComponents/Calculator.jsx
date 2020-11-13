import React, { useEffect, useState } from 'react';
import Display from './Display';
import Keys from './Keys';

function Calculator() {

    const [value, setValue] = useState(0);

    const handleOperation = (value) => {
        console.log(value);
    }

    return (<div>

        <div id="displayBorder">
            <Display />
        </div>
        <div id="keyBorder">
            <div id="firstRow">
                <Keys keyValue={7} onClick={handleOperation} />
                <Keys keyValue={8} onClick={handleOperation} />
                <Keys keyValue={9} onClick={handleOperation} />
                <Keys keyValue={"*"} onClick={handleOperation} />
            </div>
            <div id="secondRow">
                <Keys keyValue={4} onClick={handleOperation} />
                <Keys keyValue={5} onClick={handleOperation} />
                <Keys keyValue={6} onClick={handleOperation} />
                <Keys keyValue={"/"} onClick={handleOperation} />

            </div>
            <div id="thirdRow">
                <Keys keyValue={1} onClick={handleOperation} />
                <Keys keyValue={2} onClick={handleOperation} />
                <Keys keyValue={3} onClick={handleOperation} />
                <Keys keyValue={"-"} onClick={handleOperation} />
            </div>
            <div id="fourthRow">
                <Keys keyValue={0} onClick={handleOperation} />
                <Keys keyValue={"+"} onClick={handleOperation} />
                <Keys keyValue={"."} onClick={handleOperation} />
            </div>
            <div>
                <Keys keyValue={"c"} onClick={handleOperation} />
                <Keys keyValue={"="} onClick={handleOperation} />
            </div>
        </div>
    </div>
    )
}

export default Calculator;