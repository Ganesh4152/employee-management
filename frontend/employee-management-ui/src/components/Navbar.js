import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Employee Management
        </Link>

        <div>

          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-outline-light me-2" to="/employees">
            Employees
          </Link>

          <Link className="btn btn-success" to="/add-employee">
            Add Employee
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
