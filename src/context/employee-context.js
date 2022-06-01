import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext([
  {
    name: "",
    email: "",
    phone: "",
  },
]);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [employee, ...prev]);
  };

  const removeEmployeeById = (employeeId) => {
    setEmployees((prev) =>
      prev.filter((employee) => employee.id !== employeeId)
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, removeEmployeeById }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);
