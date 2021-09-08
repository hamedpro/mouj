import './App.css';
import "./common/lib/bootstrap.min.css";
import "./common/common.css"
import CustomHeader from './components/header/header';
import Home from './components/Home/Home';
import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Support from './components/support/codes';
import AdminPasswordCheckPage from './components/adminPasswordChecker/component';
import Charts from './components/charts/component';
import SelectPlanPage from './components/selectPlanToDonate/component';
import SupportMessageShowPage from './components/supportMessageShower/component';
import LoadingPage from './components/LoadingPage/LoadingPage'
import {GlobalContext} from "./globalContext";
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      is_loading_page_visible:true,
      toggle_loading_page_visibility:()=>{
        this.setState({
          is_loading_page_visible:!this.state.is_loading_page_visible
        })
      },
      loading_page_progresses:["loading home component ..."],
      set_loading_page_progresses : (value)=>{
        this.setState({
          loading_page_progresses:value
        })
      }
    }
  }
  componentDidMount(){
  }
  render(){
    return (
    <div>
      <GlobalContext.Provider value={this.state}>
        <LoadingPage progresses={this.state.loading_page_progresses} timer={2}/>
      <div className="mainBackground"></div>
      <CustomHeader />
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/support"><Support /></Route>
          <Route path="/admin-password-check/:username"  render={(props)=><AdminPasswordCheckPage {...props} />}></Route>
          <Route exact path="/charts"><Charts></Charts></Route>
          <Route exact path="/select-plan"><SelectPlanPage></SelectPlanPage></Route>
          <Route exact path="/support-message-show-page/:support_message_code" render={props=><SupportMessageShowPage support_message_code={props.match.params.support_message_code} />}></Route>

        </Switch>
      </Router>
      </GlobalContext.Provider>
    </div>
  );
  }
  
}

export default App;
