import { Grid } from "@mui/material";
import { EmployeeCard } from "components";
import { useEmployees } from "context/employee-context";

export const EmployeeGrid = () => {
  const { employees } = useEmployees();
  return (
    <Grid container columnSpacing={2} rowSpacing={2} sx={{ mt: 2 }}>
      {employees.map((employee) => (
        <Grid item key={employee.id} xs={12}>
          <EmployeeCard employee={employee} />
        </Grid>
      ))}
    </Grid>
  );
};
