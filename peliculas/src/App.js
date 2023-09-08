import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './screens/Home'
function App() {
  return(
    <>
      <Header/>
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;