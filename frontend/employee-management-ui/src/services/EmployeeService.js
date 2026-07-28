import axios from "axios";

const API_URL = "http://13.235.36.25:8082/api/employees";

const getAllEmployees = () => axios.get(API_URL);

const getEmployeeById = (id) =>
    axios.get(`${API_URL}/${id}`);

const createEmployee = (employee) =>
    axios.post(API_URL, employee);

const updateEmployee = (id, employee) =>
    axios.put(`${API_URL}/${id}`, employee);

const deleteEmployee = (id) =>
    axios.delete(`${API_URL}/${id}`);

const EmployeeService = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};

export default EmployeeService;
