import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function Forms() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const hireme = (e) => {
      handleChange()
  };

  

  return (
    <>
      <form onSubmit={hireme}>
        <Typography
          sx={{ textAlign: "center", fontSize: "3rem", fontFamily: "bold" }}
        >
          Login
        </Typography>
        <Container sx={{ textAlign: "center", margin: "12px" }}>
          <TextField
            name="name"
            value={input.name}
            type="text"
            onChange={handleChange}
            placeholder="username"
          />
          <TextField
            name="email"
            value={input.email}
            type="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <TextField
            name="password"
            value={input.password}
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <br />
          <Button type="submit">Hire Me</Button>
        </Container>
      </form>

      <h2 className="text-center text-white font-semibold text-[2rem]">
        Your Details
      </h2>
      <br />




      <Table sx={{ width: "50%", textAlign: "center", margin: "0 auto" }}>
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{input.name}</TableCell>
            <TableCell>{input.email}</TableCell>
            <TableCell>{input.password}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default Forms;
