import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../Context";

class Contacts extends Component {
  // the value is from the context provider
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
