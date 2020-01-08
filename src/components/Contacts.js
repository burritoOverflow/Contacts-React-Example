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

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
