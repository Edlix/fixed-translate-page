import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  //Redirectx,
}
from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import TranslationPage from './components/TranslationPage/TranslationPage';

//USE THIS API:
//https://vue-questionaire.herokuapp.com/translationsx
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/translation" exact component={TranslationPage}/>
        <Route path="/profile" exact component={ProfilePage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
