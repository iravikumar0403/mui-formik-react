import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEmployees } from "context/employee-context";

export const EmployeeCard = ({ employee }) => {
  const { deleteEmployeeById } = useEmployees();
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mr: 8 }}>
        <Box>
          <Typography sx={{ color: "text.secondary" }}>Name</Typography>
          <Typography variant="h6" sx={{ color: "secondary.main" }}>
            {employee.name}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "text.secondary" }}>Mobile</Typography>
          <Typography variant="h6" sx={{ color: "secondary.main" }}>
            {employee.mobile}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mr: 8,
          mt: 4,
        }}
      >
        <Box>
          <Typography sx={{ color: "text.secondary" }}>Email</Typography>
          <Typography variant="h6" sx={{ color: "secondary.main" }}>
            {employee.email}
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => deleteEmployeeById(employee.id)}
        >
          Delete
        </Button>
      </Box>
    </Paper>
  );
};
