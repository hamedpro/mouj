import './App.css';
import "./common/lib/bootstrap.min.css";
import "./common/common.css"
import CustomHeader from './components/header/header';
import Home from './components/Home/Home';
import React from "react"
import {Switch,Route,HashRouter as Router} from "react-router-dom";
import AdminPasswordCheckPage from './components/adminPasswordChecker/component';
import Charts from './components/charts/component';
import SupportMessageShowPage from './components/supportMessageShower/component';
//import LoadingPage from './components/LoadingPage/LoadingPage'
import {GlobalContext} from "./globalContext";
import NewTransaction from './components/newTransaction/component';
import NewSupportMessage from './components/NewSupportMessage/component';
import { Register } from './components/register/Register';
import { PaymentResult } from './components/PaymentResult/component';
import PaymentGateway from './components/PaymentGateway/component';
import AdminPage from './components/admin/component';
import SelectAdminPage from './components/SelectAdmin/component';
import AboutUs from './components/AboutUs/comp';
import CustomFooter from './components/CustomFooter/comp';
import VotesPage from "./components/VotesPage/comp"
import Plans from  "./components/Plans/comp"
import PlanShowPage from './components/PlanShowPage/comp';
import Users from "./components/Users/comp"
import SupportMessages from "./components/SupportMessages/comp"
//import "nprogress/nprogress.css"
//import nprogress from "nprogress"
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
  render(){
    return (
    <div style={{height:"100%"}}>
      <GlobalContext.Provider value={this.state}>
        {/* <LoadingPage progresses={this.state.loading_page_progresses} timer={1}/> */}
      <div className="mainBackground"></div>
      <CustomHeader />
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/users"><Users /></Route>
          <Route path="/admin-password-check/:username" render={(props)=><AdminPasswordCheckPage {...props} />}></Route>
          <Route exact path="/charts"><Charts></Charts></Route>
          <Route exact path="/plans"><Plans></Plans></Route>
          <Route exact path="/plans/:plan_id" render={props=> <PlanShowPage {...props} />}></Route>
          <Route exact path="/new-transaction"><NewTransaction></NewTransaction></Route>
          <Route exact path="/support-messages/new" render={props=><NewSupportMessage />}></Route>
          <Route exact path="/support-messages/:support_message_id" render={props=><SupportMessageShowPage support_message_id={props.match.params.support_message_id} />}></Route>
          <Route exact path="/support-messages" render={props=><SupportMessages />}></Route>
          <Route exact path="/register" render={props=><Register />}/>
          <Route exact path="/payment-result" render={props=> <PaymentResult />}/>
          <Route exact path="/payment-gateway" render={props=> <PaymentGateway />}/>
          <Route exact path="/select-admin" render={props=> <SelectAdminPage />}/>
          <Route path="/admin" render={props=> <AdminPage {...props}/>}/>
          <Route exact path="/about-us" render={props=> <AboutUs {...props}/>}/>
          <Route exact path="/votes" render={props=> <VotesPage {...props}/>}/>
        </Switch>
      </Router>
      </GlobalContext.Provider>
      <CustomFooter></CustomFooter>
    </div>
  );
  }
  
}

export default App;
