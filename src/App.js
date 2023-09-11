import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from './Screen/Home/home';
import Footer from './Components/Footer/Footer';
import ResultadosBusqueda from "./Screen/ResultadosBusqueda/ResultadosBusqueda";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/resultados'} component={ResultadosBusqueda} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
