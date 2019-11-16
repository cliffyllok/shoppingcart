import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge';
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
                        <li><Link to="/diy">DIY</Link></li>
                        <li><Link to="/cart">
                            <Badge badgeContent={this.props.items.length} color="primary" anchorOrigin={{ horizontal: 'right', vertical: 'top', }} overlap='circle' > 
                                <i className="material-icons">shopping_cart</i>
                            </Badge>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
   
            )
        }
    }
const mapStateToProps = (state)=>{
    
    return {
        items: state.addedItems
    }
  }
export default connect(mapStateToProps)(Navbar);