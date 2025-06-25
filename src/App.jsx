import './App.css';
import Cartao from './components/Cartao';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="app">
      <h1>Meu Clone Nubank</h1>
      <Navbar />
      <Cartao />
    </div>
  );
}
