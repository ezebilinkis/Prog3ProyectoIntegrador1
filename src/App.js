import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from './Screen/Home/home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
