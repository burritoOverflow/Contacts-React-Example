import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Consumer } from "../../Context";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = {
    showContactInfo: false
  };

  // toggle the state on click
  handleShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  // this doesnt *actually* perform a delete operation, as we're just
  // doing a mock up here
  handleDeleteClick = async (id, dispatch) => {
    // use for the mock api
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    // mock api returns a 200 on 'success'
    if (response.status === 200) {
      // dispatch to context, responsible for DOM deletion
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.handleShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.handleDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
