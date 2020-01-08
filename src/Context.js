import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

// serves as global state
export class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  // allows the state to be accessible globally
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
