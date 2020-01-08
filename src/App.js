import React from "react";
import Header from "./components/layout/Header";
import { Provider } from "./Context";

import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts/Contacts";
import AddContact from "./components/Contacts/AddContact";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
