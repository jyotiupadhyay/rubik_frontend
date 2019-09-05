import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';
import   config from '../../config.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            formData: {
                customerId: '',
            
            }
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }


    handleSubmit = (event) => {        
        event.preventDefault();
     this.props.validateUser(true);
        const { formData } = this.state;
        console.log(formData);
        localStorage.setItem("customerId",formData.customerId)
            axios.post(config.url+'login/'+formData.customerId).then((response)=>{
            console.log(response.data)
          this.props.history.push("/listOfFavourites");       
        }).catch((error)=>{ 

           swal("Invalid Customer Id.Please try again.");        
        });

      
    }
    render() {



        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-sm-12 col-md-4 col-md-offset-4">
                        <div><h1 className="col-md-12 col-sm-3 text-center login-title">LOGIN</h1></div>
                       <div> <h3 className="col-md-12 text-center login-sub-title">Customer Id</h3></div>
                        <div>                           
                            <form className="form-signin">
                                <input type="text" id="customerId" name="customerId" className="form-control user-field" placeholder="Enter the customer id" onChange={this.handleChange} required autoFocus />
                         
                                <button id="btn1" className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                                    Login</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}



export default withRouter(Login);