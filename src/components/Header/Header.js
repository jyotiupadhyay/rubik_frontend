import React,{Component} from 'react';
import ing from './ing.jpg';
import './Header.css';
import {withRouter} from 'react-router-dom';

class Header extends Component{


    render(){
        
        return(
            <div>
                <div className="main">
                    <ul>
                        <li><img src={ing} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title">ING-RUBIK BANKING PLATFORM</h2></li>
                        {/* <li className="button3">
                        {
                        this.props.isLoggedIn ?
                            <span ><button className="bt" onClick={() => this.props.redirect('/logout', this.props.history)} data-toggle="tooltip" title="Logout" >Logout</button></span> :
                            <span><button className="bt" onClick={() => this.props.redirect('/login', this.props.history)} data-toggle="tooltip" title="Login" >Login</button></span>
                    }
                        </li>
                        <li className="selectDropDown"> <select  onChange={this.handleSelect}>
                        <option value="en">ENGLISH</option>
                        <option value="sp">SPANISH</option>
                    </select></li> */}
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(Header);
