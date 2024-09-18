import React, { useState, useEffect } from 'react';

import EmployeeList from './Components/EmployeeList/EmployeeList';

import EmployeeForm  from './Components/EmployeeForm/EmployeeForm';
import './App.css';  // Importing global CSS (if any)

function App() {
  // State to manage employees and the selected employee for editing
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Fetch employees from localStorage on component mount
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  // Save employees to localStorage whenever employees state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Function to add or update an employee
  const handleEmployeeSubmit = (employee) => {
    if (selectedEmployee) {
      // Update existing employee
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === selectedEmployee.id ? employee : emp
        )
      );
    } else {
      // Add a new employee (generate an ID for new employees)
      employee.id = Date.now();
      setEmployees([...employees, employee]);
    }
    setSelectedEmployee(null);  // Clear the selected employee after adding/updating
  };

  // Function to edit an employee
  const handleEditEmployee = (id) => {
    const employeeToEdit = employees.find((emp) => emp.id === id);
    setSelectedEmployee(employeeToEdit);
  };

  // Function to delete an employee
  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <h1>Employee Management Portal</h1>

      {/* Employee Form for adding/updating */}
      <EmployeeForm selectedEmployee={selectedEmployee} onSubmit={handleEmployeeSubmit} />

      {/* Employee List for displaying and managing employees */}
      <EmployeeList
        employees={employees}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
}

export default App;
