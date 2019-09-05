import React, { Component } from "react";
import axios from "axios";
import "./EditFavourites.css";
import config from "../../config.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

class EditFavourites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankId: "",
      favourites: {
        accountName: "",
        accountNumber: "",
        bankName: ""
      }
    };
  }
  componentDidMount() {
    const { editId } = this.state;
    const data = JSON.parse(sessionStorage.getItem("favourites"));
    this.setState({ favourites: data });
  }
  handleUpdate = event => {
    console.log("@@@@");
    event.preventDefault();
    const { favourites } = this.state;
    var favouriteId = localStorage.getItem("favouriteId");

    let favouritesData = {
      accountName: favourites.accountName,
      accountNumber: favourites.accountNumber,
      bankId: this.state.bankId
    };
    axios
      .put(config.url + "favourite/" + favouriteId, favouritesData)
      .then(response => {
        console.log(response.data);
        swal("favourites updated successfully");
        this.props.history.push("/listOfFavourites");
      })
      .catch(error => {
        console.log(error);
        swal(error.response.data.message);
      });
  };
  handleChange = event => {
    const { favourites } = this.state;
    favourites[event.target.name] = event.target.value;
    this.setState({ favourites });
  };

  handleBankName = event => {
    if (event.target.value.length == 20) {
      axios
        .post(config.url + "bankDetails/" + this.state.favourites.accountNumber)
        .then(response => {
          console.log(response.data);
          const { favourites } = this.state;
          favourites.bankName = response.data.bankName;
          this.setState({ favourites, bankId: response.data.bankId });
          console.log(response.data.bankId);
        })
        .catch(error => {
          console.log(error);
          swal(error.response.data.message);
        });
    }
  };
  handleDelete=(event)=>{
      event.preventDefault();
      const data = JSON.parse(sessionStorage.getItem("favourites"));
      console.log(data)
      axios
        .delete(config.url + "login/" + data.favouriteId +'/'+data.customerId)
        .then(response => {
          console.log(response.data);
          this.props.history.push('/listOfFavourites')
        })
        .catch(error => {
          console.log(error);
        });

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-sm-12 col-md-4 col-md-offset-4">
            <div>
              <h3 className="col-md-12 col-sm-3 text-center login-title">
                Edit Favourite account
              </h3>
            </div>

            <div>
              <form className="form-signin">
                <label>Account Name</label>
                <input
                  type="text"
                  id="accountName"
                  name="accountName"
                  value={this.state.favourites.accountName}
                  className="form-control user-field"
                  placeholder="Enter the Account name"
                  onChange={this.handleChange}
                  required
                  autoFocus
                />
                <div onChange={this.handleBankName}>
                  <label>IBAN/Account Number</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={this.state.favourites.accountNumber}
                    className="form-control user-field"
                    placeholder="Enter the IBAN/ Account number"
                    onChange={this.handleChange}
                    required
                    autoFocus
                  />
                </div>
                <label>Bank</label>
                <input
                  type="text"
                  id="bankName"
                  value={this.state.favourites.bankName}
                  name="bankName"
                  className="form-control user-field"
                  placeholder="Enter the bank"
                  onChange={this.handleChange}
                  required
                  autoFocus
                  disabled
                />

                <button
                  id="btn4"
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  onClick={this.handleUpdate}
                >
                  Save
                </button>
                <button
                  id="btn5"
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  onClick={this.handleDelete}
                >
                  delete
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default EditFavourites;
