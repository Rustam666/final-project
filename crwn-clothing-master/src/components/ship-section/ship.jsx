import React from 'react';
import '../bootstrap/bootstrap-grid.css';
import '../bootstrap/style.css'
import  '../bootstrap/bootstrap-reboot.css';
import '../main.scss';
import Recommend from '../../assets/recommended (1).png';
import Box from '../../assets/box.png';
import Medal from '../../assets/quality.png'
import {Spring} from "react-spring/renderprops-universal";

const Ship =()=>(
    <Spring from={{opacity:0}}
            to={{opacity:1}}
            config={{delay:2000,duration:2000}}


    >
        {props =>(
            <div style={props}>
    <section className=" bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center bg-ship">

                </div>
                <div className="col-md-7 py-5 wrap-about pb-md-5">
                    <div className="heading-section-bold mb-4 mt-md-5">
                        <div className="ml-md-0">
                            <h2 className="mb-4">Better Way to Ship Your Products</h2>
                        </div>
                    </div>
                    <div className="pb-md-5">
                        <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious
                            Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their
                            agency, where they abused her for their.</p>
                        <div className="row ">
                            <div className="col-lg-4 text-center d-flex align-self-stretch">
                                <div className="media block-6 services">
                                    <div className="flexing">
                                    <div className="icon d-flex justify-content-center align-items-center mb-4">
                                        <img className='shipping-icons' src={Recommend} alt='#'/>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Refund Policy</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center d-flex align-self-stretch ">
                                <div className="media block-6 services">
                                    <div className="flexing">
                                    <div className="icon d-flex justify-content-center align-items-center mb-4">
                                        <img className='shipping-icons' src={Box} alt='#'/>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Premium Packaging</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center d-flex align-self-stretch flexing">
                                <div className="media block-6 services">
                                    <div className="flexing">
                                    <div className="icon d-flex justify-content-center align-items-center mb-4">

                                        <img className='shipping-icons' src={Medal} alt='#'/>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Superior Quality</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
        )}

    </Spring>


);

export default Ship