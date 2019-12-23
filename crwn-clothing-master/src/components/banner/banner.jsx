import React from 'react';
import '../bootstrap/bootstrap-grid.css';
import '../bootstrap/style.css'
import  '../bootstrap/bootstrap-reboot.css';
import '../main.scss';

import {Spring} from "react-spring/renderprops-universal";


const Banner =({title})=>(
    <Spring from={{opacity:0,marginTop:-500}}
            to={{opacity:1,marginTop:0}}
            config={{duration:1000}}

    >
        {props =>(
            <div style={props}>
    <div className="hero-wrap hero-bread bg-about" >
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 text-center">

                    <h1 className="mb-0 bread">{title}</h1>
                </div>
            </div>
        </div>
    </div>
            </div>
        )}
    </Spring>
);

export default Banner