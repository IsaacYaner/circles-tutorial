/* Welcome to the react flow renderer tutorial! In this file, we will learn how to
set up a basic flowchart. */

import React, { useState } from 'react';
import ReactFlow from 'react-flow-renderer';

/* Here are some sample nodes and edges data we are going to load our flowchart with. 
Read more about:
    - Node formatting: https://reactflow.dev/docs/api/nodes/ 
    - Edge formatting: https://reactflow.dev/docs/api/edges/
*/
var elementsData = [
    // Nodes
    { id: 'A', type: 'default', data: { label: 'A' /* Each node can carry some data */}, position: { x: 0, y: 200} },
    { id: 'B', type: 'default', data: { label: 'B' /* We can put anything we want in here */}, position: { x: 200, y: 0} },
    { id: 'C', type: 'default', data: { label: 'C' /* Literally anything else you want */}, position: { x: -200, y: 0} },

    // Edges
    { id: 'eA-B', type: 'straight', source: 'A', target: 'B' },
    { id: 'eA-C', type: 'straight', source: 'A', target: 'C' },
];


const FlowSetup = () => {
    /* The state of our element (will go into more detail in FlowState.js, don't
    worry about it for now!) */
    const [elements, setElements] = useState(elementsData);

    
    // The function that will be run on load
    // reactFlowInstance is just the instance of the flowchart that our <ReactFlow></ReactFlow> 
    // passes to this function when it is called
    const onLoad = (reactFlowInstance) => {
        // For now, we will just ensure we are zoomed out enough to see all the nodes
        // and edges on our screen
        reactFlowInstance.fitView();
    }

    return (
        // Our flowchart is contained inside the <ReactFlow></ReactFlow> provider
        // We need to initialise this provider with some data. Read more about all
        // the data you can pass to this flowchart at: https://reactflow.dev/docs/api/component-props/
        <div>
            <ReactFlow
                elements={elements} // The elements of this flowchart
                onLoad={onLoad} // Function to be run when loading the flowchart
                style={{width: '100%', height: '100vh'}}
                // And like 5000000 other options you can play with
            >

            </ReactFlow>
        </div>
    
    );
    
}

export default FlowSetup;


/* ====================TASKS====================
1. Play around with elementsData (read up on the formatting, link at top of page)
2. Play around with the <ReactFlow></ReactFlow> parameters (https://reactflow.dev/docs/api/component-props/)

... Next up we will learn how to change states
*/