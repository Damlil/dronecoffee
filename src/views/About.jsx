import React from 'react'
import './About.css'
import graphicsFooter from '../assets/graphics-footer.svg'
import graphicsHeader from '../assets/graphics-header.svg'
import evaCortado from '../assets/eva-cortado.jpg'
import navicon from '../assets/navicon.svg'
import { useNavigate } from 'react-router-dom';





function About() {


  const navigate = useNavigate();
  function clickNav() {
    navigate('/nav')
  }



  return (
    <section className='section--about'>
      <header className='section--about__header'>
      <div className="menuicon" onClick={clickNav} > <img src={navicon} className="menuicon__img" alt="" /></div>
      </header>
      <article className='section--about__article'>
      <h1 className='section--about__article-heading'>Vårt kaffe</h1>
      <p className='section--about__article-heading-text'> <strong>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo 
      half and half mazagran. Pumpkin spice. </strong> <br /> <br />
      Que dark fair trade, spoon decaffeinated, barista wi
      ngs whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra 
      affogato. So affogato macchiato sit
      extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth
      , grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak. <br /> <br />
      Roast id macchiato, single shot siphon mazagran mi
      lk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice
       iced. At extra, rich grinder,
      brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta,
       acerbic café au lait instant shop latte. 
      Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
     </p>
  
    </article>
    <article className='section--about__evaCortado-article'>
    <img src={evaCortado}  className="eva-cortado__img" alt="" />
    <h3 className='evaCortado-article-heading'>Eva Cortado</h3>
    <p className='evaCortado-article-text'>VD & Grundare</p>
    </article>
    <img src={graphicsFooter} className='section--about__imgSecond' alt="" />
    </section>
  )
}

export default About