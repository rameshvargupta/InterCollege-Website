import React from 'react'

const ImageSlider = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id='pht1' src="s1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id='pht2' src="s2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  id='pht3' src="s3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





    </>
  )
}

export default ImageSlider
