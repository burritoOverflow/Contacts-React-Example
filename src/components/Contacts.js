import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "Jdoe@website.org",
        phone: "123-456-9011"
      },
      {
        id: 2,
        name: "Peter Piper",
        email: "pp@website.org",
        phone: "555-555-1213"
      },
      {
        id: 3,
        name: "Tyler Durden",
        email: "projectmayhem@website.org",
        phone: "867-5309"
      }
    ]
  };

  // remove the contact from the state
  // note this function is passed to the child contact component as props
  deleteContact = id => {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: filteredContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </>
    );
  }
}

export default Contacts;
