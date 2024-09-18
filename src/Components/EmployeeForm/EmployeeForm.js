import React, { useState, useEffect } from 'react';
import  './EmployeeForm.css';

const EmployeeForm = ({ selectedEmployee, onSubmit }) => {
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    email: '',
    position: '',
    department: '',
    phone: '',
    startDate: '',
    image: null, // Change to handle file object
  });

  const [imagePreview, setImagePreview] = useState(null); // State for image preview

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
      setImagePreview(selectedEmployee.image);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee((prevEmployee) => ({
        ...prevEmployee,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file)); // Create preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert file to base64 if needed or handle file upload
    const formData = new FormData();
    for (const key in employee) {
      formData.append(key, employee[key]);
    }
    onSubmit(formData); // Pass formData to parent
    setEmployee({
      name: '',
      surname: '',
      email: '',
      position: '',
      department: '',
      phone: '',
      startDate: '',
      image: null,
    });
    setImagePreview(null); // Clear preview
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Surname</label>
        <input
          type="text"
          name="surname"
          value={employee.surname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Position</label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Department</label>
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={employee.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={employee.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
      </div>
      <button type="submit">Save Employee</button>
    </form>
  );
};

export default EmployeeForm;