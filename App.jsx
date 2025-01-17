import AddEmployeeForm from './AddEmployee';
import EmployeeList from './EmployeeList';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/employeeList" element ={<EmployeeList/>} />
          <Route path="/addEmployee" element ={<AddEmployeeForm/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App