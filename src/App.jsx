import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import CreateUser from "./createUser";
import UpdateUser from "./updateUser";
import InfoUser from "./infoUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/users" element={<CreateUser />}></Route>
          <Route path="/users/:id" element={<UpdateUser />}></Route>
          <Route path="/users/:id" element={<InfoUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
