import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navbar extends Component{ 
//const Navbar = ()=>{
    //return(
        render(){
            return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i><p>{this.props.items.quantity}</p></Link></li>
                    </ul>
                </div>
            </nav>
   
            )
        }
    }
const mapStateToProps = (state)=>{
    alert (state.addedItems);
    alert (state.addedItems.quantity);
    return {
        items: state.addedItems
    }
  }
export default connect(mapStateToProps)(Navbar);