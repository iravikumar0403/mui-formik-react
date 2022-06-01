import { AppBar, Container, Typography } from "@mui/material";
import { AddEmployeeForm, EmployeeGrid } from "components";

const App = () => {
  return (
    <>
      <AppBar position="static" sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="p">
          Employee List
        </Typography>
      </AppBar>
      <Container maxWidth="sm" sx={{ my: 2 }}>
        <AddEmployeeForm />
        <EmployeeGrid />
      </Container>
    </>
  );
};

export default App;
