import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEmployees } from "context/employee-context";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import "yup-phone";

const initialValues = {
  name: "",
  mobile: "",
  email: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  mobile: Yup.string()
    .phone("IN", true, "Invalid phone number")
    .required("This field is required"),
  email: Yup.string().email().required("This field is required"),
});

export const AddEmployeeForm = () => {
  const { employees, addEmployee } = useEmployees();

  const validateUniqueness = (values) => {
    const errors = {};
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].email === values.email) {
        errors.email = "Email already exists";
        break;
      } else if (employees[i].mobile === values.mobile) {
        errors.mobile = "Mobile already exists";
        break;
      }
    }
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    addEmployee({
      id: uuidv4(),
      ...values,
    });
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validate: validateUniqueness,
    onSubmit: handleSubmit,
  });

  return (
    <Box sx={{ backgroundColor: "white", p: 2 }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="dense"
          id="name"
          variant="standard"
          label="Name"
          name="name"
          placeholder="John Doe"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          margin="dense"
          id="mobile"
          variant="standard"
          label="Mobile"
          name="mobile"
          placeholder="9876543210"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
        <TextField
          fullWidth
          margin="dense"
          id="email"
          variant="standard"
          label="Email"
          name="email"
          placeholder="JohnDoe@email.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Box sx={{ display: "flex" }}>
          <Button
            variant="contained"
            sx={{ ml: "auto", my: 2, px: 4 }}
            type="submit"
          >
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
};
