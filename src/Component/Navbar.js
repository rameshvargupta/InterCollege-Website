import React from 'react';
import { useState } from 'react';
import Marquee from './Marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import HeaderLogo from './HeaderLogo';
import ImageSlider from './ImageSlider';
import Cart from './Cart';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <HeaderLogo />
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="#">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleDropdownToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

                    {/* <div class="collapse navbar-collapse Nav" id="navbarSupportedContent"> */}

                    <div
                        className={`collapse navbar-collapse Nav ${isDropdownOpen ? 'show' : ''
                            }`}
                        id="navbarSupportedContent"
                    >


                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">

                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Academic
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="">Cources</a></li>
                                    <li><a class="dropdown-item" href="#">Faculty Profile</a></li>
                                    <li><a class="dropdown-item" href="#">Syllabus</a></li>
                                    <li><a class="dropdown-item" href="#">Research & Development Guidelines</a></li>
                                    <li><a class="dropdown-item" href="#">Common Minimum Curriculam</a></li>
                                    <li><a class="dropdown-item" href="#">Anti raging measures</a></li>
                                    <li><a class="dropdown-item" href="#">Academic Calendar 2024</a></li>
                                    <li><a class="dropdown-item" href="#">Holidays Calendar 2024</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admissions
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Admission 2024-25</a></li>
                                    <li><a class="dropdown-item" href="#">Fees Payment Last Date </a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Student
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Time Table</a></li>
                                    <li><a class="dropdown-item" href="#">Result</a></li>
                                </ul>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">NIRF</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Donate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Grivance</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Examination
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Time Table</a></li>
                                    <li><a class="dropdown-item" href="#">Result</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Photo Gallery</a></li>
                                    <li><a class="dropdown-item" href="#">Video Gallery</a></li>
                                    <li><a class="dropdown-item" href="#">News Paper Cliping</a></li>
                                    <li><a class="dropdown-item" href="#">Canvocation</a></li>
                                    <li><a class="dropdown-item" href="#">Ajadi ka Amtrit Mahotsav</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    LMS
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Leave management System</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Contact</a></li>
                                    <li><a class="dropdown-item" href="#">Directory</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Hindi Sansakaran</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Login</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
            <div className="update">
                <div className="name">
                    Current Update
                </div>
                <Marquee />

            </div>

            <ImageSlider />

            <div className="start">
                <div className="row motivateCart my-5">
                    <div className="col-4 img1">
                        <img id='m1' src="m1.png" alt="" />
                    </div>
                    <div className="col-4 img1">
                        <img id='m2' src="m2.png" alt="" />
                    </div>
                    <div className="col-4 img1">
                        <img id='m3' src="m3.png" alt="" />
                    </div>
                </div>

            </div>

            <div className="box">

                <div className="row mainbox">
                    <div className="col-md-12 col-lg-7  princple1 ">

                        <h1>About Of MBIC</h1>
                        Steeped in history and washed by the gurgling rivers flowing down the Himalayas, Siddharthnagar is the place, well known worldwide as the playground of Prince Siddhartha-later known as Lord Buddha. With an objective of furthering the sense of enlightenment, in a blend of traditionalism and modern education, the great socialist stalwart Shri Mulayam Singh Yadav started the process of developing the area since 1989. This was indeed the start of journey to the culmination of great dream of establishing this University. Subsequently, Shri Akhilesh Yadav, the Honble Chief Minister of Uttar Pradesh, laid the foundation stone of the University on October 30, 2013 and the Government of Uttar Pradesh formally notified the Gazzett on June 17, 2015 regarding the opening of this Centre for Higher Learning. The newly established Siddharth University, in fact, is a holy stream of historical tradition and legacy of the Philosophy and preaching of Lord Buddha and is aimed at enlightening and igniting the youth of this area with His great messages.
                    </div>

                    <div className="col-md-12 col-lg-4 princple2">

                        <div className="princple">
                            <img id='princpleimg' src="https://www.suksn.edu.in/images/home/authorities-2.jpg" alt="" />
                            <div className="details">
                                <h3>D.S. Singh</h3>
                                <p>Princple</p>
                            </div>
                        </div>

                        <div className="princple">
                            <img id='princpleimg1' src="https://www.suksn.edu.in/images/home/authorities-1.jpg" alt="" />
                            <div className="details">
                                <h3>D.S. Singh</h3>
                                <p>Princple</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cart />
        </>
    )
}

export default Navbar
