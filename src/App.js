import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <h1>Heello world</h1>
      <Contact name="John Doe" email="Jdoe@poop.org" phone="21231-3131" />
      <Contact name="Peter Doe" email="Jdoe@poop.org" phone="21231-3131" />
    </div>
  );
}

export default App;
