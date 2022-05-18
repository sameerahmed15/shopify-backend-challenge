import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Add Items</h1>
      <form action="/quotes" method="POST">
        <label>Product name</label>
        <input type="text" name="name"></input>
        <br></br>
        <br></br>
        <label>Quantity</label>
        <input type="text" name="quantity"></input>
        <br></br>
        <br></br>
        <button type="submit">Add Item</button>
      </form>

      <h3>Inventory List</h3>
    </div>
  );
}

export default App;