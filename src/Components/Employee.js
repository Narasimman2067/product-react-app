import React, { useState } from "react";
import { data } from "../Data/data";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
export function EmployeeDetails() {
  // implement of the data

  const [employeesData, setEmployees] = useState(data);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [experiences, setExperience] = useState("");

  const addNewEmployee = () => {
    const newEmployee={
        id,
        name,
        batch,
        gender,
        yearsOfExperience:experiences,
    }
    // using spread operator to divide each by each element
    setEmployees([...employeesData,newEmployee])
  };

  return (
    <div>
      <div className="input-div">
        <TextField
          id="outlined-basic"
          label="Enter your id"
          variant="outlined"
          onChange={(event)=>setId(event.target.value)}
          value={id}
        />
        <TextField
          id="outlined-basic"
          label="Enter your name"
          variant="outlined"
          onChange={(event)=>setName(event.target.value)}
          value={name}
        />
        <TextField
          id="outlined-basic"
          label="Enter your batch"
          variant="outlined"
          onChange={(event)=>setBatch(event.target.value)}
          value={batch}
        />
        <TextField
          id="outlined-basic"
          label="Enter your gender"
          variant="outlined"
          onChange={(event)=>setGender(event.target.value)}
          value={gender}
        />
        <TextField
          id="outlined-basic"
          label="Enter your experiences"
          variant="outlined"
          onChange={(event)=>setExperience(event.target.value)}
          value={experiences}
        /> 
      </div>
      <div className="btn">
        <Button size="small" variant="contained" color="primary"
        onClick={addNewEmployee}>
          Add data
        </Button>
      </div>

      <div className="main-card">
        {employeesData.map((employees, id) => (
          <Card className="card-div" key={employees.id}>
            <CardContent className="content-div">
              <Typography gutterBottom variant="h5" component="div">
                Name:{employees.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Batch :{employees.Batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender:{employees.Gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience:{employees.yearsOfExperience}
              </Typography>
            </CardContent>
            <CardActions className="btn-div">
              <Button size="small" variant="contained" color="primary">
                edit
              </Button>
              <Button size="small" variant="contained" color="error">
                delete
              </Button>
              <Button size="small" variant="contained" color="success">
                viewoptions
               </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
