import { faAward, faBook, faBuildingColumns, faHockeyPuck, faSearch, faTrophy } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Student from './Student'
import Marquee1 from './Marquee1'
import Middle from './Middle'
import Website from './Website'
import FooterLast from './FooterLast'



const Cart = () => {
  return (
    <>
      <div className="box5">
        <div className="row" id='box1'>

          <div className="col-2"> <FontAwesomeIcon className="icons" icon={faTrophy} /><div className='div1' >Achievment</div> </div>
          <div className="col-2"> <FontAwesomeIcon className="icons" icon={faBook} /> <div className='div1' > Library </div></div>
          <div className="col-2"> <FontAwesomeIcon className="icons" icon={faBuildingColumns} /><div className='div1' > Museam </div></div>
          <div className="col-2"><FontAwesomeIcon className="icons" icon={faAward} /><div className='div1' > Alumini</div></div>
          <div className="col-2"><FontAwesomeIcon className="icons" icon={faHockeyPuck} /><div className='div1' > Sports</div></div>
          <div className="col-2"> <FontAwesomeIcon className="icons" icon={faSearch} /><div className='div1' >Letest Search </div></div>
        </div>
      </div>
      <Student />
      <Marquee1/>
      <Middle/>
      <Website/>
    <FooterLast/>
    </>
  )
}

export default Cart
