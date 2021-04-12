/* We are going to learn how to update the flowchart!!!  */
import React, { useState } from 'react';
import ReactFlow, { isEdge, isNode } from 'react-flow-renderer';

/* ====================TASKS==================== */
// Elements data (We have added some styling to this)
var elementsData = [
    // Nodes
    { id: 'A', type: 'default', style: { backgroundColor: 'blue', color: 'white' }, data: { label: 'A'}, position: { x: 0, y: 200} },
    { id: 'B', type: 'default', style: { backgroundColor: 'green', color: 'white' }, data: { label: 'B'}, position: { x: 200, y: 0} },
    { id: 'C', type: 'default', style: { backgroundColor: 'red', color: 'white' }, data: { label: 'C'}, position: { x: -200, y: 0} },

    // Edges
    { id: 'eA-B', type: 'straight', source: 'A', target: 'B' },
    { id: 'eA-C', type: 'straight', source: 'A', target: 'C' },
];

const FlowState = () => {
    /* In react, every component has a state. A component is only re-rendered
    when something changes about its state.
    
    useState() is how react sets up states for a component. In the below line:
    "elements" - the state of our component.
    "setElements" - a function which can update our state
    "elementsData" - the initial data our state ("elements") is set to

    A general usage to set up states is:
    const [state, setState] = useState(initialData);
    */
    const [elements, setElements] = useState(elementsData);

    
    // We passed this function in to our <ReactFlow></ReactFlow>. This will be
    // run every time an element (node or edge) is clicked
    // event is the click event (which our react flow provider passes in to this function)
    // element is the element we clicked (which our react flow provider passes in to this function)
    const onElementClick = (event, element) => {
        if (isNode(element)) { // If it is a node (imported helper function. Read the documentation)
            // Let's swap the font colour and background colour of this element
            
            // In React, we must find a way to notify the state that it has changed
            // When updating simple toplevel data, we can simply modify it.
            // However, when updating nested data (like in this case), we must create a new object
            // in order to notify the state that it has been changed
            var updatedElements = [...elements]; // The spread operator (shallow copy)
            for (var e of updatedElements) {
                if (e.id === element.id) { // The element we clicked on
                    [e.style.backgroundColor, e.style.color] = [e.style.color, e.style.backgroundColor]; // Toggle the colours
                }
            }

            // Update the state (causing a rerender)
            setElements(updatedElements);

            // ^ The above is a straight forward way of updating state. Below, I will 
            // show you the syntax react PROS use update their state (sunglass emoji)
            // *** Honestly, doesn't really matter. I prefer the first one as well but your choice

            /*
            setElements((prevElements) =>
                prevElements.map((el) => {
                    if (el.id === element.id) {
                        const oldBackground = el.style.backgroundColor;
                        const oldColor = el.style.color;
                        el = {
                            ...el,
                            style: {
                                ...el.style,
                                backgroundColor: oldColor,
                                color: oldBackground
                            }
                        }
                    }
                    console.log()
                    return el;
                })      
            );
            */
        }
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
                onElementClick={onElementClick} // When an element (node or edge) is clicked, this function is called!!!
            >
            </ReactFlow>
        </div>
    )

}

export default FlowState;

/* ====================TASKS====================
1. When a node is clicked, toggle it's display text to lower/upper case
2. When an edge is clicked, change it's type (https://reactflow.dev/docs/api/edges/)
3. Read up the nodes and edges options on the link given and play around with updating their states

... Next up we will try to create a mini degree planner
*/