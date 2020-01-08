import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name"
                value={name}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter e-mail"
                value={email}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone number"
                value={phone}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-light"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
