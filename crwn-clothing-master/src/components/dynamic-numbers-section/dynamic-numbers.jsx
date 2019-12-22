import React from 'react';
import {Spring} from "react-spring/renderprops-universal";
import '../bootstrap/bootstrap-grid.css';
import '../bootstrap/style.css'
import  '../bootstrap/bootstrap-reboot.css';
import '../main.scss'

export default class DynamicNumbers extends React.Component {

render(){
    return(


<section className="ftco-section ftco-counter bg4 img" id="section-counter" >
    <div className="container">
        <div className="row justify-content-center py-5">
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                        <div className="block-18 text-center">
                            <div className="text">
                                <Spring
                                    from ={{number:0}}
                                    to= {{number:10000}}
                                    config={{duration:10000}}
                                    onScroll={onscroll}
                                >
                                    {props=>(
                                        <h1>
                                            {props.number.toFixed()}
                                        </h1>
                                        )}
                                </Spring>
                                <span>Happy Customers</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                        <div className="block-18 text-center">
                            <div className="text">
                                <Spring
                                    from ={{number:0}}
                                    to= {{number:10000}}
                                    config={{duration:10000}}
                                >
                                    {props=>(
                                        <h1>
                                            {props.number.toFixed()}
                                        </h1>
                                    )}
                                </Spring>
                                <span>Branches</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                        <div className="block-18 text-center">
                            <div className="text">
                                <Spring
                                    from ={{number:0}}
                                    to= {{number:10000}}
                                    config={{duration:10000}}
                                >
                                    {props=>(
                                        <h1>
                                            {props.number.toFixed()}
                                        </h1>
                                    )}
                                </Spring>
                                <span>Partner</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                        <div className="block-18 text-center">
                            <div className="text">
                                <Spring
                                    from ={{number:0}}
                                    to= {{number:10000}}
                                    config={{duration:10000}}
                                >
                                    {props=>(
                                        <h1>
                                            {props.number.toFixed()}
                                        </h1>
                                    )}
                                </Spring>
                                <span>Awards</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )   }
}