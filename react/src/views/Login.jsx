import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onsumbit = async (e) => {
    e.preventDefault();
    const isLogin = await login({username, password});
    if (isLogin){
      navigate("/home");
    } else {
      alert("credenciales incorrectas")
    }
  };
  return (
    <form onSubmit={onsubmit}>
      <Box
        margin = {"auto"}
        flexDirection = {"column"}
        display = {"flex"}
        width = {400}
        marginTop = {"20px"}
        >
          <TextField label = {"Username"} value = {username} onChange = {(e) => setUsername(e.target.value)} />
          <TextField label = {"Password"} value = {password} onChange = {(e) => setPassword(e.target.value)} />
          <Button type = {"submit"} variant = "contained">
            Login
          </Button>
        </Box>
    </form>
  )
};

export default Login;