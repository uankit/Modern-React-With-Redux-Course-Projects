// 1. Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
// 2. Get reference to div with ID root
const el = document.getElementById("root");
// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);
// 4. Create a component
const App = () => {
  const name = "Ankit";
  return <h1 style={{ border: "1px solid blue" }}>Hello {name}</h1>;
};
// 5. Display the component on the screen
root.render(<App />);
