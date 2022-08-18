import React, { useReducer } from 'react';


function Level1() {

    function reducerFunction(state,action) {

        switch(action.type) {
            case 'incr':
                return state + 1;
            case 'decr':
                return state - 1;
            default:
                return state
                        
        }

    }
  
    const [count, dispatch] =  useReducer(reducerFunction, 0)
  
    return (
    <div>
       <h1>count = {count}</h1>
       <button onClick={ ()=>{ dispatch({type: 'incr'})} }>Increment</button>
       <button onClick={ ()=>{  dispatch({type: 'decr'})} }>Decrement</button> 

    </div>
  )
}

export default Level1