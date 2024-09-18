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
        image: null,
      });
    
      const [imagePreview, setImagePreview] = useState(null);
    
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
          setImagePreview(URL.createObjectURL(file));
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in employee) {
          formData.append(key, employee[key]);
        }
        onSubmit(formData);
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
        setImagePreview(null);
      };
    
      return (
        <form onSubmit={handleSubmit} className="employee-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input
              id="surname"
              type="text"
              name="surname"
              value={employee.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              id="position"
              type="text"
              name="position"
              value={employee.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              id="department"
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              value={employee.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
            {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
          </div>
          <button type="submit">Save Employee</button>
        </form>
      );
    };
    


export default EmployeeForm;