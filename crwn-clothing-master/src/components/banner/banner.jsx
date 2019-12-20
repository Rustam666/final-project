import React from 'react';
import '../bootstrap/bootstrap-grid.css';
import '../bootstrap/style.css'
import  '../bootstrap/bootstrap-reboot.css';
import '../main.scss';
import { Link } from 'react-router-dom';


const Banner =({title})=>(
    <div className="hero-wrap hero-bread bg-about" >
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 text-center">
                    <p className="breadcrumbs"><span className="mr-2"><Link to='/'>Home</Link></span>
                        <span>{title}</span></p>
                    <h1 className="mb-0 bread">{title} us</h1>
                </div>
            </div>
        </div>
    </div>

);

export default Banner