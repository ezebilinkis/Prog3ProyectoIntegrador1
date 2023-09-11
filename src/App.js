import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from './Screen/Home/home';
import Footer from './Components/Footer/Footer';
/* import ResultadosBusqueda from "./Screen/ResultadosBusqueda/ResultadosBusqueda"; */
import detalleAlbum from "./Screen/Detalles/DetalleAlbum";
import detalleCancion from "./Screen/Detalles/DetalleCancion";


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/detalleAlbum/:id'} component={detalleAlbum} />
        <Route path={'/detalleCancion/:id'} component={detalleCancion} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
