import React from 'react'

const Middle = () => {
    return (
        <div className='box7 my-5'>


            <h1 className='middle'>Our Campus</h1>

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">

                    <div class="carousel-item active">

                        <div class="card-group">

                            <div class="cart col-md-12 col-lg-4">
                                <img src="6.png" class="card-img-top" alt="..." />
                            </div>

                            <div class="cart col-md-12 col-lg-4">
                                <img src="5.jpg" class="card-img-top" alt="..." />
                            </div>

                            <div class="cart col-md-12 col-lg-4">
                                <img src="7.jpg" class="card-img-top" alt="..." />
                            </div>

                        </div>

                    </div>

                    <div class="carousel-item">
                        <div class="card-group">

                            <div class="cart col-md-12 col-lg-4">
                                <img src="8.jpg" class="card-img-top" alt="..." />
                            </div>

                            <div class="cart col-md-12 col-lg-4">
                                <img src="9.jpg" class="card-img-top" alt="..." />
                            </div>

                            <div class="cart col-md-12 col-lg-4">
                                <img src="10.jpg" class="card-img-top" alt="..." />
                            </div>

                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="card-group">

                            <div class="cart col-md-12 col-lg-4">
                                <img src="11.jpg" class="card-img-top" alt="..." />
                            </div>

                            <div class="cart col-md-12 col-lg-4">
                                <img src="12.jpg" class="card-img-top" alt="..." />
                            </div>

                            <div class="cart col-md-12 col-lg-4">
                                <img src="13.jpg" class="card-img-top" alt="..." />
                            </div>

                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



        </div>
    )
}

export default Middle
