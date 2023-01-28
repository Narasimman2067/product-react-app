
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
    
    </div>
  );
}

export default App;
