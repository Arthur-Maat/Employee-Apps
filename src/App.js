import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import EmployeeList from './Components/EmployeeList/EmployeeList';
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleEmployeeSubmit = (employee) => {
    if (selectedEmployee) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === selectedEmployee.id ? employee : emp
        )
      );
    } else {
      employee.id = Date.now();
      setEmployees([...employees, employee]);
    }
    setSelectedEmployee(null);
  };

  const handleEditEmployee = (id) => {
    const employeeToEdit = employees.find((emp) => emp.id === id);
    setSelectedEmployee(employeeToEdit);
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Routes to different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-employee" element={<EmployeeForm selectedEmployee={selectedEmployee} onSubmit={handleEmployeeSubmit} />} />
          <Route path="/employee-list" element={<EmployeeList employees={employees} onEdit={handleEditEmployee} onDelete={handleDeleteEmployee} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
