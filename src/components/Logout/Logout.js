import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert'
import swal from 'sweetalert';

export class Logout extends Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            alert: true
        }
    }
    handleLogout() {
        /*Clear local storage*/
        this.props.validateUser(false)
        swal(`You have successsfully logged out`)
        this.props.history.push('/login')
    }
    handleCancel() {
        this.setState({
            alert: false
        })
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                {
                    this.state.alert ? (
                        <div>
                            <SweetAlert
                                warning
                                showCancel
                               confirmBtnText="Yes"
                                confirmBtnBsStyle="primary"
                                cancelBtnBsStyle="default"
                                title="Are you sure you want to logout?"
                                style={{ fontSize: "1px" }}
                                onConfirm={this.handleLogout}
                                onCancel={this.handleCancel}
                            >
                            </SweetAlert>
                        </div>) : (<div>
                       
                        </div>)
                }
            </div>
        )
    }
}
export default withRouter(Logout)
