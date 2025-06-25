import { FiCreditCard, FiDollarSign, FiPhone } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="navbar">
      <button><FiCreditCard size={24} /></button>
      <button><FiDollarSign size={24} /></button>
      <button><FiPhone size={24} /></button>
    </nav>
  );
}
