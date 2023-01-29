
import './App.css';
import Base from './Base/Base';
import { EmployeeDetails } from './Components/Employee';

function App() {
  return (
    <div className="App">
    <Base
    heading="Batch Details"
    description="all Employee details"
    
    >
    <EmployeeDetails/>
   </Base>
   <img href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEeaYUgQ0DPGzGi08JKgQgXsPT0rfpa3X_Hsd21hPypiSKpuGrRG9QaEQwUEBgdKqD6A&usqp=CAU" alt=''/>
    </div>
  );
}

export default App;
