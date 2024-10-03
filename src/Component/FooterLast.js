import React from 'react'

const FooterLast = () => {
  return (
    <div className="box12"
      style={{
        height: "350px",

        backgroundImage:
          'url(footer.jpg)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "red",
      }}>

      <div id='box13'>
        <div className="row">
          <div className='col-md-12 col-lg-4'>
            <img src="https://www.suksn.edu.in/images/home/logo.png" alt="" />
          </div>

          <div className='col-md-12 col-lg-7'>

            <div className="row">
              <div className="col-3">
                <h2>Quick Links</h2>
                <a href=""> Results  </a>
                <a href=""> Tenders  </a>
                <a href=""> Contactus  </a>
                <a href=""> Photogallery  </a>
                <a href=""> WebMail  </a>
                <a href=""> Feedback  </a>
              </div>

              <div className="col-3">
                <h2>Co-Curriculum</h2>
                <a href="">Sports</a>
                <a href="">Delegacy</a>
                <a href="">NCC</a>
                <a href="">NSS</a>

              </div>

              <div className="col-3">
                <h2>Important Links</h2>
                <a href="">UGC</a>
                <a href="">UPHED</a>
                <a href="">MHRD</a>
                <a href="">AIU</a>
                <a href="">NCTE</a>
                <a href="">DDUSP</a>
                <a href="">E-Contents</a>
              </div>



              <div className="col-3 lastside">
                <h2>Contact Us</h2>
                <a href="">Civil Lines, Gorakhpur (U.P.) - 273009 [ INDIA ]</a>
                <a href=""> +91-551-2201577 +91-551-2340363</a>
                <a href=""> +91-551-2330767, +91-551-2340363</a>
                <a href="">Ramesh86@gmail.com</a>
              </div>

            </div>
          </div>

        </div>

      </div>

      <div className="col-12 box16 navbar-dark bg-danger">
      M B I C Buddha Nagar Adda Bazar Maharajganj Uttar Pradesh. All Rights Reserved @ 2023. Create By Web Developer Rameshvar Gupta 
      Mobile- 7523062030 And Follow Me This Email- rameshvargupta230@gmail.com
      </div>
    </div>


  )
}

export default FooterLast
