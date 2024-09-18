import React from 'react';
import './EmployeeCard.css';
const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  const { name, surname, email, position, department, phone, startDate, image } = employee;
  return (
    <div className="employee-card">
      <div className="employee-image">
        <img src={image || 'default-image-url.jpg'} alt={`${name} ${surname}`} />
      </div>
      <div className="employee-details">
        <h3>{name} {surname}</h3>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Position:</strong> {position}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Date Joined:</strong> {new Date(startDate).toLocaleDateString()}</p>
      </div>
      <div className="employee-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};
export default EmployeeCard;
