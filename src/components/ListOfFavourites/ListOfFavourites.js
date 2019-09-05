import React, { Component } from "react";
import axios from "axios";
import config from "../../config.json";
import add from "./add.jpg";
import { FaEdit } from "react-icons/fa";
import "../../App.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class ListOfFavourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFavourites: [],
      currentPage: 0,
      todosPerPage: 5
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    this.getData().then(response => {
      console.log(response.data);
      this.setState({ listFavourites: response.data });
    }).catch(err=>{
        alert(err.response.data.message)
    });
  };
  getData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(config.url + "favourites/" + this.state.currentPage)
        .then(response => {
          resolve(response);
          console.log(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  handleAddFavourite = () => {
    this.props.history.push("/addFavourites");
  };
  edit = item => {
    console.log(item);
    sessionStorage.setItem("favourites", JSON.stringify(item));
    localStorage.setItem("favouriteId", item.favouriteId);
    this.props.history.push("/editFavourites/" + item.favouriteId);
  };

  next = () => {
    this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      this.fetchData();
    });
  };
  prev = () => {
    if (this.state.currentPage >= 0) {
      this.setState({ currentPage: this.state.currentPage - 1 }, () => {
        this.fetchData();
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div>
          <button id="btn3" onClick={this.handleAddFavourite}>
            <img src={add} alt="add" width="30px" height="30px" />
            Add a newAccount
          </button>
        </div>
        <div className="row">
          {this.state.listFavourites.map((item, i) => {
            return (
              <Card key={i} className=" col-md-3 col-lg-3">
                <CardBody>
                  <CardTitle>
                    {item.accountName}
                    <span style={{ float: "right", color: "orange" }}>
                      <FaEdit onClick={() => this.edit(item)} />
                    </span>
                  </CardTitle>
                  <CardSubtitle>{item.accountNumber}</CardSubtitle>
                  <CardText>{item.bankName}</CardText>
                </CardBody>
              </Card>
            );
          })}
        </div>
        <br/>
        <div className="row">
          <button
            onClick={this.prev}
            className="btn btn-warning "
            style={{ float: "left" }}
          >
            Prev
          </button>
          <button
            onClick={this.next}
            className="btn btn-warning offset-md-10"
            style={{ float: "right" }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
export default ListOfFavourites;

// render() {
//     return (
//       <div className="container">
//         <div>
//           <button  id="btn3" onClick={this.handleAddFavourite}>
//             <img src={add} alt="add" width="30px" height="30px" />
//             Add a newAccount
//           </button>
//         </div>
//         <div className="row">
//         {this.state.listFavourites.map((item, i) => {
//           return (
//             <Card key={i} className=" col-md-3 col-lg-3">
//               <CardBody>
//                 <CardTitle>{item.accountName}<span style={{float:"right", color: "orange"}}><FaEdit onClick={()=>this.edit(item)} /></span></CardTitle>
//                 <CardSubtitle>{item.accountNumber}</CardSubtitle>
//                 <CardText>{item.bankName}</CardText>
//               </CardBody>
//             </Card>
//           );
//         })}
//         </div>
//       </div>
//     );
//   }
