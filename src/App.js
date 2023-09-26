// importamos los componentes
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from './Screen/Home/home';
import Footer from './Components/Footer/Footer';
import detalleAlbum from "./Screen/Detalles/DetalleAlbum";
import detalleCancion from "./Screen/Detalles/DetalleCancion";
import Favoritos from "./Screen/Favoritos/index";
import VerTodosAlbums from "./Screen/VerTodos/VerTodos";
import verTodas from "./Screen/VerTodasCanciones/verTodas.Canciones";
import NotFound from "./Screen/NotFound"

//Declaramos en la función app las rutas de la aplicación. Switch chequea que la ruta exista y redirecciona.
//Route tiene la información de la ruta y el componente.
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch> 
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/detalleAlbum/:id'} component={detalleAlbum} />
        <Route path={'/detalleCancion/:id'} component={detalleCancion} />
        <Route path={'/verTodasCanciones'} component={verTodas} />
        <Route path={'/verTodosAlbums'} component={VerTodosAlbums} />
        <Route path={'/favoritos'} component={Favoritos} />
        <Route path={''} component={NotFound} />
      </Switch>
      <Footer/>
    </div>
  );
}
export default App;
