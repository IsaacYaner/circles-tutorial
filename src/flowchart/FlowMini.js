/* Welcome to the FINAL stage, you've built up enough skills, let's try to 
create a mini degree planner :O */

import React, { useState } from 'react';
import ReactFlow, { isNode } from 'react-flow-renderer';

var elementsData = [
    // Courses
    { id: 'COMP1511', type: 'default', style: { backgroundColor: 'white', color: 'green', border: '2px solid green'}, data: { label: 'COMP1511', unlocks: ['COMP2521'], prerequisites: []}, position: { x: 0, y: 0} },
    { id: 'COMP1521', type: 'default', style: { backgroundColor: 'white', color: 'green', border: '2px solid green'}, data: { label: 'COMP1521', unlocks: ['COMP3151'], prerequisites: ['COMP1511']}, position: { x: 400, y: 200} },
    { id: 'COMP1531', type: 'default', style: { backgroundColor: 'white', color: 'green', border: '2px solid green'}, data: { label: 'COMP1531', unlocks: ['COMP2511'], prerequisites: ['COMP1511']}, position: { x: -400, y: 200} },
    { id: 'COMP2521', type: 'default', style: { backgroundColor: 'white', color: 'green', border: '2px solid green'}, data: { label: 'COMP2521', unlocks: ['COMP2511', 'COMP3141', 'COMP3151', 'COMP3161'], prerequisites: ['COMP1511']}, position: { x: 0, y: 200} },
    { id: 'COMP2511', type: 'default', style: { backgroundColor: 'white', color: 'green', border: '2px solid green'}, data: { label: 'COMP2511', unlocks: [], prerequisites: ['COMP1531', 'COMP2521']}, position: { x: -200, y: 400} },
    { id: 'COMP3141', type: 'default', style: { backgroundColor: 'white', color: 'green', border: '2px solid green'}, data: { label: 'COMP3141', unlocks: [], prerequisites: ['COMP2521']}, position: { x: 0, y: 400} },
    { id: 'COMP3151', type: 'default', style: { backgroundColor: 'white', color: 'green', border: '2px solid green'}, data: { label: 'COMP3151', unlocks: [], prerequisites: ['COMP1521', 'COMP2521']}, position: { x: 400, y: 400} },
    { id: 'COMP3161', type: 'default', style: { backgroundColor: 'white', color: 'green', border: '2px solid green'}, data: { label: 'COMP3161', unlocks: [], prerequisites: ['COMP2521']}, position: { x: 200, y: 400} },

    // Links
    { id: 'eCOMP1511-COMP1521', type: 'straight', style: { strok: 'black', opacity: 1 }, source: 'COMP1511', target: 'COMP1521', isHidden: false, animated: false },
    { id: 'eCOMP1511-COMP1531', type: 'straight', style: { strok: 'black', opacity: 1 }, source: 'COMP1511', target: 'COMP1531', isHidden: false, animated: false },
    { id: 'eCOMP1511-COMP2521', type: 'straight', style: { strok: 'black', opacity: 1 }, source: 'COMP1511', target: 'COMP2521', isHidden: false, animated: false },
    { id: 'eCOMP1521-COMP3151', type: 'straight', style: { strok: 'black', opacity: 1 }, source: 'COMP1521', target: 'COMP3151', isHidden: false, animated: false },
    { id: 'eCOMP1531-COMP2511', type: 'straight', style: { strok: 'black', opacity: 1 }, source: 'COMP1531', target: 'COMP2511', isHidden: false, animated: false },
    { id: 'eCOMP2521-COMP2511', type: 'straight', style: { strok: 'black', opacity: 1 }, source: 'COMP2521', target: 'COMP2511', isHidden: false, animated: false },
    { id: 'eCOMP2521-COMP3141', type: 'straight', style: { strok: 'black', opacity: 1 }, source: 'COMP2521', target: 'COMP3141', isHidden: false, animated: false },
    { id: 'eCOMP2521-COMP3151', type: 'straight', style: { strok: 'black', opacity: 1 }, source: 'COMP2521', target: 'COMP3151', isHidden: false, animated: false },
    { id: 'eCOMP2521-COMP3161', type: 'straight', style: { strok: 'black', opacity: 1 }, source: 'COMP2521', target: 'COMP3161', isHidden: false, animated: false },
]

const FlowMini = () => {
    const [elements, setElements] = useState(elementsData);



    const onElementClick = (event, elements) => {
        // Your function here...
    }

    const onLoad = (reactFlowInstance) => {
        reactFlowInstance.fitView();
    }

    return (
        <div>
            <ReactFlow
                elements={elements}
                onLoad={onLoad}
                style={{width: '100%', height: '100vh'}}
                onElementClick={onElementClick}
            >
            </ReactFlow>
        </div>
    )
}

export default FlowMini;

/* ====================TASKS====================

THE GOAL is to build a mini interactive version of the flowchart. The steps below
give you an idea of some of the functionality you need to implement

1. When selecting a node, make it change colours (adjust the style however you want)
2. When unselecting a node, make it change back to it's original colours
3. A node only becomes clickable once all its prerequisites have been met. A clickable node has a different style (any style you want) 
4. At the very start, make only COMP1511 clickable (do this in any way you want)
5. When unselecting a node, also unselect any nodes which depend on it (interpret this how you want, we will discuss)


BONUS: Hide nodes (and edges) which are unselectable!!! (Refer to https://circles360.github.io/#/ for example behaviour)
^ Implement however you want.
*/