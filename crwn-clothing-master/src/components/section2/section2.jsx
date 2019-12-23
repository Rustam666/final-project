import React from 'react';

import '../bootstrap/style.css'
import  '../bootstrap/bootstrap-reboot.css';
import '../main.scss';

import {Spring} from "react-spring/renderprops-universal";
import Slider from "../carousel/carousel";
import '../carousel/slider.scss'
const Section2 =()=>( <Spring from={{opacity:0}}
                              to={{opacity:1}}
                              config={{delay:2000,duration:2000}}

>
    {props =>(
        <div style={props}>

    <section className="bg-light ">
        <div className="container  ">
            <div className="row justify-content-center size">
                <div className="col-md-12 heading-section text-center margin">
                    <h2 className="mb-4">Best Sellers</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

                </div>

            </div>

        </div>
            <Slider />


    </section>
        </div>
            )}

        </Spring>

);

export default Section2
