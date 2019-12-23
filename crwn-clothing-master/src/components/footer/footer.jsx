import React from 'react';
import '../bootstrap/bootstrap-grid.css';
import '../bootstrap/style.css'
import  '../bootstrap/bootstrap-reboot.css';
import '../main.scss';
import { Link } from 'react-router-dom';
import {FaInstagram} from "react-icons/all";
import {FaTwitter} from "react-icons/all";
import {FaFacebook} from "react-icons/all";
import {FaArrowAltCircleUp} from "react-icons/all";

const Footer=()=>(
    <footer className="ftco-footer bg-light ftco-section ">

        <div className="container margin">
            <div className="row">
                <div className="mouse">
                    <a href="#" className="mouse-icon margin">
                        <div className="mouse-wheel"><FaArrowAltCircleUp/></div>
                    </a>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Jasmin Boutique</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li><a href="#"><FaTwitter className='icon1'/></a></li>
                            <li><a href="#"><FaFacebook className='icon1'/></a></li>
                            <li><a href="#"><FaInstagram className='icon1'/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4 ml-md-5">
                        <h2 className="ftco-heading-2">Menu</h2>
                        <ul className="list-unstyled">
                            <li><Link to="/shop" className="py-2 d-block">Shop</Link></li>
                            <li><Link to="/aboutus" className="py-2 d-block">About</Link></li>
                            <li><a href="#" className="py-2 d-block">Journal</a></li>
                            <li><Link to="/contacts" className="py-2 d-block">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Help</h2>
                        <div className="d-flex">
                            <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                <li><a href="#" className="py-2 d-block">Shipping Information</a></li>
                                <li><a href="#" className="py-2 d-block">Returns &amp; Exchange</a></li>
                                <li><a href="#" className="py-2 d-block">Terms &amp; Conditions</a></li>
                                <li><a href="#" className="py-2 d-block">Privacy Policy</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-2 d-block">FAQs</a></li>
                                <li><a href="#" className="py-2 d-block">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Have a Questions?</h2>
                        <div className="block-23 mb-3">
                            <ul>
                                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                                </li>
                                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a>
                                </li>
                                <li><a href="#"><span className="icon icon-envelope"></span><span
                                    className="text">info@yourdomain.com</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">

                    <p>
                        Copyright
                        All rights reserved | This site is made by Rustam Qurbanov <i className="icon-heart color-danger"
                                                                            aria-hidden="true"></i>

                    </p>
                </div>
            </div>
        </div>
    </footer>

);

export default Footer