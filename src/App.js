import "./App.css";
import Rheader from "./Rheader";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber ,setNumber] = useState();
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email ,phoneNumber}]);
    setName("");
    setEmail("");
    setNumber("");
  };

  const deleteData = (index) => {
    let arr = [...data];
    arr.splice(index, 1);
    setData([...arr]);
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
              inputProps={{ type: 'email' }}
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
              inputProps={{ maxLength: 10, pattern: "[0-9]{10}"  }}
               
              InputLabelProps={{
                style: {
                  fontFamily: "Copperplate Gothic,light",
                },
              }}
              required
            />


            <Button onClick={addData} variant="contained" color="success" onMouseEnter={addData}>
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


      {
        data.map((element,index) => {
          return(
              <div className="row1">
                <div className="col1">
                    <h4>
                      {element.name}
                    </h4>
                </div>
                <div className="col2">
                    <h4>
                      {element.email}
                    </h4>
                </div>
                <div className="col3">
                    <h4>
                      {element.phoneNumber}
                    </h4>
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
          );
          
        })}
    </>
  );
}

export default App;
