import React from "react";
import { useState } from "react";
import {
    TextField, Button, Container, Typography, Table,
    TableBody, TableCell,  TableHead, TableRow,
} from "@mui/material";
function Forms() {
    //state write into the functiions
    const [input, setInput] = useState(null)
    const hireme = (e) => {
        e.preventDefault();
            
    }

    return (
        <>
            <form>
                <Typography
                    sx={{ textAlign: "center", fontSize: "3rem", fontFamily: "bold" }}>
                    Login
                </Typography>
                <Container sx={{ textAlign: "center", margin: "12px" }}>
                    <TextField
                        name="name"
                        value={input}
                        type="text"
                        onChange={(e) => { e.target.value }}
                        placeholder="username"
                    />
                    <TextField
                        // value={input.Email}
                        name="Email"
                        type=" email"
                        onChange={(e) => { e.target.value }}

                        placeholder="Email"
                    />
                    <TextField

                        // value={input.Password}
                        name="Password"
                        type=" password"
                        onChange={(e) => { e.target.value }}

                        placeholder="Password"
                    />
                    <br />
                    <Button onClick={hireme}>Hire Me</Button>
                </Container>
            </form>






            <h2 className=" text-center text-white font-semibold   text-[2rem]">Your Details</h2><br/>
 
            <Table sx={{width:'50%' , textAlign:'center' ,  margin:'0 auto'}}>
                <TableHead>
                    <TableRow>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Row 1, Column 1</TableCell>
                        <TableCell>Row 1, Column 2</TableCell>
                        <TableCell>Row 1, Column 3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Row 2, Column 1</TableCell>
                        <TableCell>Row 2, Column 2</TableCell>
                        <TableCell>Row 2, Column 3</TableCell>
                    </TableRow>
                </TableBody>

            </Table>

        </>
    );
}

export default Forms;
