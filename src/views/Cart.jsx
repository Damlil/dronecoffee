import React, { useState } from 'react'
import './Menu.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEta, resetStore, deleteItem } from '../actions/actions';
import navicon from '../assets/navicon.svg'
import bag from '../assets/bag.svg'
import './Cart.css'




function Cart() {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => { return state.products })    // Getting products from redux




  let totalPrice = 0;

  products.forEach(elem => {
    totalPrice += elem.price;
  })






  const mappedKaffe = products.map((kaffe) => {
    return <div key={kaffe.id} name={kaffe.title} value={kaffe.price}  className="section--cart__article-list" > <h1 className='mappedkaffe__h1'>{kaffe.title} 
     <span className='dots'>....................................<button onClick={() => removeItem(kaffe)} >X</button> </span>  </h1>  <p className='mappedkaffe__p'>{kaffe.price}kr</p></div> 
  }) // mappar ut från redux och visar i carten 

  
function removeItem(kaffe) {
  dispatch(deleteItem(kaffe))
}




  const etaDetails = products.map(elem => (     // . mapping array from redux,  and saving title n price into variable 
    {
      name: elem.title,
      price: elem.price
    } 
  ));






  const data = {
    "details": {
      "order": 
      etaDetails
    }
  }
   
    const url = 'https://airbean.awesomo.dev/api/beans/order'


  //  let dataEta = ''

  
async function getETA() {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});

const etaData = await response.json()
console.log(etaData);
dispatch(addEta(etaData))



navigate('/status') 


}


function clickNav() {
  navigate('/nav')
}


function handleClick() {
  
  getETA()
  dispatch(resetStore())

    }  



  return (

    <section className='section--cart'>
    <div className="menuicon" onClick={clickNav} > <img src={navicon} className="menuicon__img" alt="" /></div>
     <div className='bagicon'><img src={bag} className="bagicon__img" alt=""/> </div>
      <article className='section--cart__article'>
        <header className='section--cart__header'>
        <h1 className='section--cart__article-h1'>Din beställning</h1>
           <ul className='section--cart__article-list'>  {mappedKaffe} </ul>
          

            <article className='section--cart__bottom'>
            <h1 className='section--cart__bottom-h1'>Total <span className='dots'>............................................................</span> {totalPrice} </h1>
            <p className='section--cart__bottom-text'> inkl moms + drönarleverans</p>
            </article>
            <button onClick={() => handleClick()} className='section--cart__btn'>Take my money!</button>
        </header>
        

       
    
      </article>
    </section>
       
    
        
      )
    }
    


export default Cart




// <div>Cart :

// {mappedKaffe}

// <button onClick={() => handleClick()}>take my money</button>


// </div>
// )