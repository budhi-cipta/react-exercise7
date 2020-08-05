import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

const Navbar = ({cart}) => {
    const dataCart = cart.length;
    return (
        <div>
             <Link to="/"> Home
             </Link> 
             <Link to="/cart"> Cart{`(${dataCart})`}
             </Link>   
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(Navbar);