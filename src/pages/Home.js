import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProductToCart} from '../actions/action';

import './Pages.css';

class Home extends Component {
    render() {
        const products = this.props.products;
        return (
            <div className="container">
                    {products.map(item => 
                    <div className="product" key={item.id}>
                        <li >
                            <h3>Nama Barang: {item.name}</h3>
                            <h3>Harga Barang: {`Rp. ${item.price.toLocaleString()}`}</h3>
                            <h3>Stock Barang: {item.stock}</h3>
                            <button onClick={this.props.addProductToCart.bind(this , item)}>add to cart</button>
                        </li>
                    </div>
                    )}
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
        addProductToCart: product => dispatch(addProductToCart(product))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);