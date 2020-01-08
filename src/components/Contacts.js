import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact, i) => (
          <Contact
            key={i}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
