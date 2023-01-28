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
  const [Name, setName] = useState("");
  const [Batch, setBatch] = useState("");
  const [Gender, setGender] = useState("");
  const [Experiences, setExperience] = useState("");

  const addNewEmployee = () => {
    const newEmployee={
        id,
        Name,
        Batch,
        Gender,
        yearsOfExperience:Experiences,
    }
    // using spread operator to divide each by each element
    setEmployees([...employeesData,newEmployee])
    setId('')
    setName('')
    setBatch('')
    setGender('')
    setExperience('')

  };

// delete a data

const deleteEmployeesData=(employeeID)=>{
const removedEmployee = employeesData.filter((employee)=>(employee.id !== employeeID))
setEmployees(removedEmployee)

}



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
          value={Name}
        />
        <TextField
          id="outlined-basic"
          label="Enter your batch"
          variant="outlined"
          onChange={(event)=>setBatch(event.target.value)}
          value={Batch}
        />
        <TextField
          id="outlined-basic"
          label="Enter your gender"
          variant="outlined"
          onChange={(event)=>setGender(event.target.value)}
          value={Gender}
        />
        <TextField
          id="outlined-basic"
          label="Enter your experiences"
          variant="outlined"
          onChange={(event)=>setExperience(event.target.value)}
          value={Experiences}
        /> 
      </div>
      <div className="btn">
        <Button size="small" variant="contained" color="primary"
        onClick={addNewEmployee}>
          Add data
        </Button>
      </div>

      <div className="main-card">
        {employeesData.map((employee, id) => (
          <Card className="card-div" key={employee.id}>
            <CardContent className="content-div">
           
              <Typography gutterBottom variant="h5" component="div">
                Name:{employee.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                batch :{employee.Batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                gender:{employee.Gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                experience:{employee.yearsOfExperience}
              </Typography>
            </CardContent>
            <CardActions className="btn-div">
              <Button size="small" variant="contained" color="primary">
                edit
              </Button>
              <Button onClick={()=>deleteEmployeesData(employee.id)}
              size="small" variant="contained" color="error"
               >
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
