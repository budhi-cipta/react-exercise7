import React, {Component} from 'react';
import {connect} from 'react-redux'
import {removeCartProduct, removeAllCartProduct} from '../actions/action'

import './Pages.css';


class Cart extends Component {
    render() {
        const cart = this.props.cart;
        console.log(cart.length === 0);
        return (
            <div className="container">
                {
                    cart.length > 0 ? (
                        <div className="remove">
                            <button onClick={this.props.removeAllCartProduct.bind(this , cart)}>remove all</button>
                        </div>
                    ) : ''
                }
                {
                    cart.map(item => 
                        <div className="product" key={item.id}>
                            <li >
                                <h3>nama barang: {item.name}</h3>
                                <h3>harga barang: {`Rp. ${item.price.toLocaleString()}`}</h3>
                                <h3>jumlah item: {item.quantity}</h3>
                                <h3>total harga: {item.price * item.quantity}</h3>
                                <button onClick={this.props.removeCartProduct.bind(this , item)}>remove</button>
                            </li>
                        </div>
                    )
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
   
    return{
        products : state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeCartProduct: cart => dispatch(removeCartProduct(cart)),
        removeAllCartProduct: cart => dispatch(removeAllCartProduct(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);