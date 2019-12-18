import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {FaAlignRight} from "react-icons/all";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import {style} from "redux-logger/src/diff";

class Header extends React.Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})

    }


    render() {
        return (
            <nav className= "barbar1">
                <div className="nav-center">
                    <div className={this.state.isOpen?'none':"nav-header"}>
                        <Link to='/'>
                            <img src='' alt='#'/>
                        </Link>
                    </div>
                    <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'}>
                        <li>
                            <Link to='/shop'>
                                SHOP
                            </Link>
                        </li>
                    <li>
                        <Link to='/aboutus'>
                           ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            CONTACT US
                        </Link>
                    </li>
                        <li>
                            <Link to='/signin'>
                                SIGN IN
                            </Link>
                        </li>
                    </ul>
                    <div className='flex'>
                        <div className={this.state.isOpen?'none':""}>
                    <CartIcon />
                        </div>
                    <button type='button' className='nav-btn' onClick={this.handleToggle}>
                        <FaAlignRight  className='nav-icon'/>
                    </button>
                    </div>
                </div>


                        {this.props.hidden ? null : <CartDropdown/>}
            </nav>
    );
  }
  }


  let mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser, hidden: selectCartHidden});
    export default connect(mapStateToProps)(Header);