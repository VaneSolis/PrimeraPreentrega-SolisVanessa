import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';


function App() {

  return (
    <>
    <h1>Technolife</h1>
    <NavBar />
    <ItemListContainer greeting={"Productos a la venta"} />
    </>
  );
}

export default App;
