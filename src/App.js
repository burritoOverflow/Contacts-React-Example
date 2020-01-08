import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" email="Jdoe@poop.org" phone="21231-3131" />
      <Contact name="Peter Doe" email="Jdoe@poop.org" phone="21231-3131" />
    </div>
  );
}

export default App;
