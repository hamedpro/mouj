import './App.css';
import "./common/lib/bootstrap.min.css";
import "./common/common.css"
import CustomHeader from './components/header/header';
import Home from './components/Home/Home';
import React from "react"
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
import Support from './components/support/codes';
import AdminPasswordCheckPage from './components/adminPasswordChecker/component';
import Charts from './components/charts/component';
import SelectPlanPage from './components/selectPlanToDonate/component';
import SupportMessageShowPage from './components/supportMessageShower/component';
function App() {
  return (
    <div>
      
      <div className="mainBackground"></div>
      <CustomHeader />
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/support"><Support /></Route>
          <Route exact path="/admin-password-check"><AdminPasswordCheckPage></AdminPasswordCheckPage></Route>
          <Route exact path="/charts"><Charts></Charts></Route>
          <Route exact path="/select-plan"><SelectPlanPage></SelectPlanPage></Route>
          <Route exact path="/support-message-show-page"><SupportMessageShowPage></SupportMessageShowPage></Route>

        </Switch>
      </Router>
      
      
      
    </div>
  );
}

export default App;
