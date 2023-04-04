// import React from 'react'
// import './ReduxTest.css'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import { increase, decrease, addString } from '../../actions/actions';
// import { useState } from 'react';


// function ReduxTest() {
//     const count = useSelector((state) => { return state.count });
    // const string = useSelector((state) => { return state.testString })
//     const dispatch = useDispatch();

//     const [inputValue, setInputValue] = useState();   // . State for saving input



//     function handleIncrease() {

//         dispatch(increase(10));

//     }

//     function handleDecrease() {

//         dispatch(decrease(2));
//     }

//     function handleValue(event) {

//         setInputValue(event.target.value)  /// . Gets Value from input and saves in a state!

//     }








//     return (
//         <div className='reduxTest'>
//             <h2> Value : {count}</h2>
           

//             <input type="text" onChange={handleValue} placeholder='add string to redux' />
           

//             <button onClick={handleIncrease} >Plus</button>
//             <button onClick={handleDecrease} >Minus</button>
//         </div>

//     )
// }

// export default ReduxTest