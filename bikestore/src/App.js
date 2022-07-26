import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './components/NavBar'
import CartContent  from './components/CartContent'
import ItemListContainer  from './components/ItemListContainer'



function App ()  {
  
  return (
    <>
    <NavBar />
    <CartContent />
    <ItemListContainer />
    </>
  );
}

export default App