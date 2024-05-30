import React, { useState } from "react";
import "./App.css";
import Rheader from "./Rheader";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const addData = () => {
    if (!name || !email || !phoneNumber) {
      setError("All fields are required.");
      setOpen(true);
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      setOpen(true);
      return;
    }
    setData([...data, { name, email, phoneNumber }]);
    setName("");
    setEmail("");
    setNumber("");
  };

  const deleteData = (index) => {
    let arr = [...data];
    arr.splice(index, 1);
    setData([...arr]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div className="head">
        <Rheader />
      </div>
      <div className="content">
        <div className="display">
          <Stack direction={"row"} spacing={2}>
            {/* Name */}
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              InputLabelProps={{
                style: {
                  fontFamily: "Copperplate Gothic,light",
                },
              }}
              required
            />

            {/* Email */}
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              inputProps={{ type: "email" }}
              InputLabelProps={{
                style: {
                  fontFamily: "Copperplate Gothic,light",
                },
              }}
              required
            />

            {/* Number */}
            <TextField
              value={phoneNumber}
              onChange={(e) => setNumber(e.target.value)}
              id="outlined-basic"
              label="Phone No."
              variant="outlined"
              inputProps={{ maxLength: 10, pattern: "[0-9]{10}" }}
              InputLabelProps={{
                style: {
                  fontFamily: "Copperplate Gothic,light",
                },
              }}
              required
            />

            <Button onClick={addData} variant="contained" color="success">
              <AddIcon />
            </Button>
          </Stack>
        </div>
      </div>

      <div className="row1">
        <div className="col1">
          <h4>Name</h4>
        </div>
        <div className="col2">
          <h4>Email</h4>
        </div>
        <div className="col3">
          <h4>Phone Number</h4>
        </div>
        <div className="col4">
          <h4>Remove</h4>
        </div>
      </div>

      {data.map((element, index) => (
        <div className="row1" key={index}>
          <div className="col1">
            <h4>{element.name}</h4>
          </div>
          <div className="col2">
            <h4>{element.email}</h4>
          </div>
          <div className="col3">
            <h4>{element.phoneNumber}</h4>
          </div>
          <div className="col4">
            <Button
              onClick={() => deleteData(index)}
              variant="contained"
              color="error"
            >
              <DeleteIcon />
            </Button>
          </div>
        </div>
      ))}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
