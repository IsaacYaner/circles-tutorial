import React, {useState} from 'react';
import ReactFlow from 'react-flow-renderer';

const hi = [];
const Test = () => {
    const [s, setS] = useState();
    return (
        <div>
            <ReactFlow
                elements={[]}
            >
                <div>hi</div>
            </ReactFlow>
        </div>

    );
}

export default Test;