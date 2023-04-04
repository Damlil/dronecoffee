import React from 'react'
import '../App.css'
import drone from '../assets/drone.svg'
import { useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'





function Status() {

  const [displayEta, setDisplayEta] = useState('');

  const etaProducts = useSelector((state) => { return state.eta })



  useEffect(() => {

    updateETA()

  },[])
  

  async function updateETA() {

    const response = await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${etaProducts.eta.orderNr}`)
    const data = await response.json()


    setDisplayEta(Object.values(data)[0])


  }

  return (

    <section className='section--status'>

     { etaProducts ? <p className='section--status__ordernumber'> { etaProducts.eta.orderNr }  </p>  : null }

      <img src={drone} className="section--status__img" alt="" />
      <h1 className='section--status-heading__1'>Din beställning är  på väg!</h1>



      { etaProducts ? <h2 className='section--status-heading__2'> Minuter { displayEta }    </h2>  :null }

      <button onClick={updateETA} className='section--status__btn'>Ok, cool!</button>


    </section>



  )
}

export default Status