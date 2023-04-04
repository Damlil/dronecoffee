import React from 'react'
import { useLocation } from "react-router-dom"
import './Menu.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';
import { useState } from 'react';
import bag from '../assets/bag.svg'



function Menu() {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigationState = useLocation();
  const coffeMenu = navigationState.state.coffees
  const [cartNumber, setCartNumber] = useState(0)

  function handleClick(item) {
    console.log(item);
    setCartNumber(cartNumber + 1)
    dispatch(addToCart(item))
  }

  const coffeComp = coffeMenu.map((item) => {
    return <article className='theMenu' key={item.id} >

      <div className='listMenu'>

        <button className='addBtn' onClick={() => handleClick(item)} value={item.title}>+</button>

        <div className="desc">
          <h2 className='listH2'>{item.title}</h2>
          <p className='listP'>{item.desc}</p>
        </div>

        <h3>{item.price} kr</h3>
 
      </div>

    </article>
  })


  function clickNav() {
    navigate('/nav')
  }
  function clickCart() {
    navigate('/cart/test')
  }


  return (
    <div className='menuCard'>
      <header className='menuHeader'>
        <nav className='menuNav'>
          <div className='navBtn' onClick={clickNav}>
              <svg viewBox="0 0 100 80" width="25" height="25">
                <rect width="100" height="20" rx="4"></rect>
                <rect y="30" width="100" height="20" rx="4"></rect>
                <rect y="60" width="100" height="20" rx="4"></rect>
              </svg>
          </div>
          <div className='cartBtn' onClick={clickCart}>
            <img className='cartImg' src={bag} alt="" />
            <p className='cartNr'>{ cartNumber }</p>
          </div>
        </nav>
        
      </header>
      <h1 className='menuH1'>Meny</h1>

      {coffeComp}


      <footer className='menuFooter'>
      </footer>
    </div>
  )
}

export default Menu






// import React, { useState } from 'react'
// import { useLocation } from "react-router-dom"
// import './Menu.css'
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../actions/actions';



// function Menu() {

//   const [count, setCount] = useState(0)

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const navigationState = useLocation();
//   const coffeMenu = navigationState.state.coffees


//   function handleClick(item) {


//     console.log(item);

//     dispatch(addToCart(item)) 
//     setCount(count+1)

//   }


//   const coffeComp = coffeMenu.map((item) => {
//     return <article className='theMenu' key={item.id} >

//       <div className='listMenu'>

//         <button onClick={() => handleClick(item)} value={item.title}>Add</button>

//         <div className="desc">
//           <h2>{item.title}</h2>
//           <p>{item.desc}</p>
//         </div>

//         <h3>{item.price}</h3>

//       </div>

//     </article>
//   })


//   function clickNav() {
//     navigate('/nav')
//   }
//   function clickCart() {
//     navigate('/cart/test')
//   }


//   return (
//     <div className='list'>
//       <nav>
//         <button onClick={clickNav}>NAV</button>
//         <button onClick={clickCart}>CART</button>
//         <p> {count}</p>
//       </nav>
//       {coffeComp}
//     </div>
//   )
// }

// export default Menu