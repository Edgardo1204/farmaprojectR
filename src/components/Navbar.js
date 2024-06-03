import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/medicamentos">Show Medicamentos</Link></li>
        <li><Link to="/medicamentos/create">Create Medicamento</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
