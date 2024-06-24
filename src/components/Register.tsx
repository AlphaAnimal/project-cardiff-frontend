import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/userServices";

const Register: React.FC<{}> = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    if (password !== password2) {
      console.log("Passwords do not match!");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      try {
        const res = register(userData);
        res.then(() => navigate("/home"));
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Stack textAlign="center" mb={2}>
        <Typography fontSize={"28px"}>Register</Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <TextField
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={onChange}
        />
        <TextField
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={onChange}
        />
        <TextField
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={onChange}
        />
        <TextField
          type="password"
          name="password2"
          value={password2}
          placeholder="Confirm password"
          onChange={onChange}
        />
        <Button onClick={(e) => onSubmit(e)} variant="contained">
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default Register;
