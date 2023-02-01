import './App.css';
import CartProvider from './context/CartContext';
import Rutas from './routes/routes.jsx';

function App() {
  return (
    <div className='dadContainer'>
      <CartProvider>
        <Rutas/> 
      </CartProvider>
    </div>
  );
}

export default App;