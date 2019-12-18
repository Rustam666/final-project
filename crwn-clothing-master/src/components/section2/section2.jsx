import React from 'react';
import '../bootstrap/bootstrap-grid.css';
import '../bootstrap/style.css'
import  '../bootstrap/bootstrap-reboot.css';
import '../main.scss';
import Product1 from "../images/product-1.jpg";
import Product2 from '../images/product-2.jpg';
import Product3 from '../images/product-3.jpg';
import Product4 from '../images/product-4.jpg';
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from '../../redux/cart/cart.actions';

const Section2 =()=>(
    <section className="bg-light ">
        <div className="container margin">
            <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center ">
                    <h2 className="mb-4">Best Sellers</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm col-md-6 col-lg ">
                    <div className="product">
                        <a href="#" className="img-prod">
                            <img className="img-fluid" src={Product1}alt="no fucks given"/>
                            <span className="status">30%</span>

                        </a>
                        <div className="text py-3 px-3">
                            <h3><a href="#">Floral Jackquard Pullover</a></h3>
                            <div className="d-flex">
                                <div className="pricing">
                                    <p className="price"><span className="mr-2 price-dc">$120.00</span><span
                                        className="price-sale">$80.00</span></p>
                                </div>
                                <div className="rating">
                                    <CustomButton onClick={() => addItem()} inverted>
                                        Add to cart
                                    </CustomButton>
                                </div>
                            </div>
                            <p className="bottom-area d-flex px-3">
                                <a href="#" className="add-to-cart text-center py-2 mr-1">
                                    <span>Add to cart</span></a>
                                <a href="#" className="buy-now text-center py-2">Buy now<span></span></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm col-md-6 col-lg ">
                    <div className="product">
                        <a href="#" className="img-prod"><img className="img-fluid" src={Product2}
                                                              alt="Colorlib Template"/>
                            <div className="overlay"></div>
                        </a>
                        <div className="text py-3 px-3">
                            <h3><a href="#">Floral Jackquard Pullover</a></h3>
                            <div className="d-flex">
                                <div className="pricing">
                                    <p className="price"><span>$120.00</span></p>
                                </div>
                                <div className="rating">
                                    <p className="text-right">

                                    </p>
                                </div>
                            </div>
                            <p className="bottom-area d-flex px-3">
                                <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart </span></a>
                                <a href="#" className="buy-now text-center py-2"><span>Buy now</span></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm col-md-6 col-lg ">
                    <div className="product">
                        <a href="#" className="img-prod"><img className="img-fluid" src={Product3}
                                                              alt="Colorlib Template"/>
                            <div className="overlay"></div>
                        </a>
                        <div className="text py-3 px-3">
                            <h3><a href="#">Floral Jackquard Pullover</a></h3>
                            <div className="d-flex">
                                <div className="pricing">
                                    <p className="price"><span>$120.00</span></p>
                                </div>
                                <div className="rating">

                                </div>
                            </div>
                            <p className="bottom-area d-flex px-3">
                                <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart </span></a>
                                <a href="#" className="buy-now text-center py-2"><span>buy now</span></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm col-md-6 col-lg ">
                    <div className="product">
                        <a href="#" className="img-prod"><img className="img-fluid" src={Product4}
                                                              alt="Colorlib Template"/>
                            <div className="overlay"></div>
                        </a>
                        <div className="text py-3 px-3">
                            <h3><a href="#">Floral Jackquard Pullover</a></h3>
                            <div className="d-flex">
                                <div className="pricing">
                                    <p className="price"><span>$120.00</span></p>
                                </div>
                                <div className="rating">

                                </div>
                            </div>
                            <p className="bottom-area d-flex px-3">
                                <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart </span></a>
                                <a href="#" className="buy-now text-center py-2"><span></span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


);

export default Section2
