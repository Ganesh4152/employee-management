import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeService from "../services/EmployeeService";

function AddEmployee() {

    const navigate = useNavigate();

    const saveEmployee = (employee) => {

        EmployeeService.createEmployee(employee)
            .then(() => {
                alert("Employee Added Successfully");
                navigate("/employees");
            })
            .catch(console.error);
    };

    return (
        <div className="container mt-4">
            <h2>Add Employee</h2>

            <EmployeeForm onSubmit={saveEmployee} />

        </div>
    );
}

export default AddEmployee;
