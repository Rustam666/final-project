import React from 'react';
import {connect, useSelector} from 'react-redux';
import {render} from "redux-logger/src/diff";
import '../../components/main.scss'
import Banner from "../../components/banner/banner";
import '../../components/bootstrap/style.css'
import CustomButton from "../../components/custom-button/custom-button.component";
import {addItems} from "../../redux/cart/cart.actions";
export const SingleProduct = (props,{ addItems}) => {
    const collectionsList = useSelector(state => state.shop.collections);
    const collection = collectionsList.find((item) => item.id === +props.match.params.collection ) || {items:[]};
    const product = collection.items.find((item) => item.id === +props.match.params.product) || {};
    const { name, price, imageUrl } = product;
    console.log(product);
    return (
        <div>
        <Banner title='Single Product'/>

            <section className='single-product-section' >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 ">
                           <img src={imageUrl} className="img-fluid img1" alt=""/>
                        </div>
                        <div className="col-lg-6 product-details pl-md-5 ">
                            <h3>{name}</h3>

                            <p className="price"><span>${price}</span></p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
                                your mouth.</p>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from
                                it would have been rewritten a thousand times and everything that was left from its
                                origin would be the word "and" and the Little Blind Text should turn around and return
                                to its own, safe country. But nothing the copy said could convince her and so it didn’t
                                take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and
                                Parole and dragged her into their agency, where they abused her for their.
                            </p>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="form-group d-flex">
                                        <div className=" flex">

                                            <select name="" id="" className="form-control">
                                                <option value="">Small</option>
                                                <option value="">Medium</option>
                                                <option value="">Large</option>
                                                <option value="">Extra Large</option>
                                            </select>
                                            <CustomButton onClick={() => addItems(product)} inverted>
                                                Add to cart
                                            </CustomButton>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-md-12">
                                    <p >80 piece available</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItems: product => dispatch(addItems(product))
});

export default connect(
    null,
    mapDispatchToProps
)(SingleProduct);
