import { useState } from "react";

function EmployeeForm({ onSubmit, initialData = {} }) {

    const [employee, setEmployee] = useState({
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        email: initialData.email || "",
        department: initialData.department || "",
        salary: initialData.salary || ""
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(employee);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                className="form-control mb-2"
                name="firstName"
                placeholder="First Name"
                value={employee.firstName}
                onChange={handleChange}
            />

            <input
                className="form-control mb-2"
                name="lastName"
                placeholder="Last Name"
                value={employee.lastName}
                onChange={handleChange}
            />

            <input
                className="form-control mb-2"
                name="email"
                placeholder="Email"
                value={employee.email}
                onChange={handleChange}
            />

            <input
                className="form-control mb-2"
                name="department"
                placeholder="Department"
                value={employee.department}
                onChange={handleChange}
            />

            <input
                className="form-control mb-3"
                type="number"
                name="salary"
                placeholder="Salary"
                value={employee.salary}
                onChange={handleChange}
            />

            <button className="btn btn-primary">
                Save Employee
            </button>

        </form>
    );
}

export default EmployeeForm;
