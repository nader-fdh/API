import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import UserList from "./components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [ListOfUser, setListOfUser] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUser(response.data));
  }, [0]);

  return (
    <div className="header">
      <h1>Contact ower sponsor</h1>
      <div className="App">
        {ListOfUser.length > 1
          ? ListOfUser.map((user) => <UserList key={user.id} {...user} />)
          : true}
      </div>
    </div>
  );
}

export default App;
