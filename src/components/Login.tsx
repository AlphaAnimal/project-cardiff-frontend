import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../state/userServices";

const Login: React.FC<{}> = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    const userData = {
      email,
      password,
    };
    try {
      const res = login(userData);
      res.then(() => navigate("/home"));
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <Stack className="heading" textAlign="center" mb={2}>
        <Typography fontSize={"28px"}>Login</Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
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

        <Button onClick={(e) => onSubmit(e)} variant="contained">
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default Login;
