import React from 'react';

import EmployeeCard from '../EmployeeCard/EmployeeCard';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="employee-list">
      {employees.length > 0 ? (
        employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onEdit={() => onEdit(employee.id)}
            onDelete={() => onDelete(employee.id)}g
          />
        ))
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;