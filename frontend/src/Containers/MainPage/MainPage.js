import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";

import ButtonAppBar from "../../Components/AppBar";
import {  useSelector } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 450,
    color: "secondary",
  },
});

export default function MainPage() {
  const classes = useStyles();

const { user } = useSelector((state) => state.loggedUser);


  const [result, setresult] = useState(0.0);
  const [inputValue, ] = useState(0.0);
  const [retreivedValue, ] = useState(user.number);

  return (
    <div>
      <ButtonAppBar />

      <h3 style={{marginTop:'100px'}}>
        Hello {user.first_name+' '+user.last_name} , Please Enter a Number Below..
      </h3>

      <div className="mainDiv" style={{ margin: "10%" }}>
        <TableContainer elevation={2} variant="outlined" component={Paper}>
          <Table className={classes.table} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Input</TableCell>
                <TableCell>Retreived Value</TableCell>
                <TableCell>Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    id="outlined-basic"
                    required
                    defaultValue={inputValue}
                    type="number"
                    label="Enter Number"
                    variant="outlined"
                    onChange={(e) => {
                      setresult(e.target.value / retreivedValue);
                    }}
                  />
                </TableCell>
                <TableCell>{retreivedValue}</TableCell>
                <TableCell>{result}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
