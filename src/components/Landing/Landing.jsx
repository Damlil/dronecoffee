// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import './HomeView.css'




// function Landing() {
//     const navigate = useNavigate();



//     function handleClick() {

//         navigate('/nav');
    
//     }
    


//   return (
    
//     <section className='home-container'>
//     <article className='home-container-items' onClick={ handleClick }>
//         <h1 className='home-logo'>A</h1>
//         <h1 className='home-h1'>AIR BEAN</h1>
//         <p className='home-text'>DRONEDELIVERED COFFEE</p>
//     </article>
// </section>
//   )
// }

// export default Landing



import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Landing.css'




function Landing() {
    const navigate = useNavigate();
 
    function handleClick() {

        navigate('/nav');
    
    }
    
  return (
    
    <section className='home-container'>
    <article className='home-container-items' onClick={ handleClick }>
        <img src="src/assets/airbean-landing.svg" alt="" />
    </article>
</section>
  )
}

export default Landing