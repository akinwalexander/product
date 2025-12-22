import ProductCard from './components/ProductCard.jsx';
import './App.css';

// Provide your first name here (or leave empty for "Hello, there!")
const firstName = 'JEDA';

export default function App() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh', paddingTop: '40px' }}>
      <ProductCard firstName={firstName} />
    </div>
  );
}
