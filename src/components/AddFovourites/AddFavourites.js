import React, { Component } from 'react';
import axios from 'axios';
import './AddFavourites.css';
import   config from '../../config.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

class AddFavourites extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            addFavourites: {
                accountNumber: '',
                iBanAccountNumber:'',
                bank:''
            
            }
        }
    }

    handleChange = (event) => {
        const { addFavourites } = this.state;
        addFavourites[event.target.name] = event.target.value;
        this.setState({ addFavourites });
    }


    handleSubmit = (event) => {        
        event.preventDefault();
        const { addFavourites } = this.state;
        console.log(addFavourites);
            axios.post(config.url+'/',addFavourites).then((response)=>{
            console.log(response.data)           
        }).catch((error)=>{ 
           swal(error.response.data.message);        
        });

      
    }
    render() {



        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-sm-12 col-md-4 col-md-offset-4">
                        <div><h3 className="col-md-12 col-sm-3 text-center login-title">Add Favourite account</h3></div>
                      
                        <div>                           
                            <form className="form-signin">
                              <label>Account Number</label>
                                <input type="text" id="customerId" name="customerId" className="form-control user-field" placeholder="enter the Account number" onChange={this.handleChange} required autoFocus />
                                <label>IBAN/Account Number</label>
                                <input type="text" id="ibanAccountNumber" name="ibanAccountNumber" className="form-control user-field" placeholder="enter the IBAN/ Account number" onChange={this.handleChange} required autoFocus />
                                <label>Bank</label>
                                <input type="text" id="bank" name="bank" className="form-control user-field" placeholder="enter the bank" onChange={this.handleChange} required autoFocus />
                         
                                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                                    Save</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}



export default AddFavourites;