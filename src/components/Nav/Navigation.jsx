import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavView.css'



function Navigation() {
  const [coffees, setCoffees] = useState();
  const navigate = useNavigate();



  useEffect(() => {
    async function getCoffees() {

      const response = await fetch('https://airbean.awesomo.dev/api/beans/')
      const data = await response.json()

      setCoffees(data.menu)


    }
    getCoffees()
  }, [])

  

  function navMenu() {
    navigate('/menu', { state: { coffees: coffees } });
  }
  function navAbout() {
    navigate('/about')
  }
  function navStatus() {
    navigate('/status')
  }
  function navNav() {
    navigate('/')
  }







  return (

    <section className='nav-container'>
      <article className='nav-header'>
        <p className='nav-header-btn' onClick={ navNav } >X</p>
      </article>
      <article className='nav-options'>
        <h1 className='nav-text' onClick={ navMenu }>Meny</h1>
        <hr className='nav-hr' />
        <h1 className='nav-text'onClick={ navAbout } >Vårt kaffe</h1>
        <hr className='nav-hr' />
        <h1 className='nav-text' onClick={ navStatus }>Orderstatus</h1>
        <hr className='nav-hr' />
      </article>
    </section>

  )
}

export default Navigation