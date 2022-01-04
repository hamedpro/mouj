import './App.css';
import "../../common/lib/bootstrap.min.css";
import "../../common/common.css"
import CustomHeader from '../header/header';
import Home from '../Home/Home';
import React, { useState } from "react"
import {Switch,Route,HashRouter as Router} from "react-router-dom";
import AdminPasswordCheckPage from '../adminPasswordChecker/component';
import Charts from '../charts/component';
import SupportMessageShowPage from '../supportMessageShower/component';
//import LoadingPage from '../LoadingPage/LoadingPage'
import NewTransaction from '../newTransaction/component';
import NewSupportMessage from '../NewSupportMessage/component';
import { Register } from '../register/Register';
import { PaymentResult } from '../PaymentResult/component';
import PaymentGateway from '../PaymentGateway/component';
import AdminPage from '../admin/component';
import SelectAdminPage from '../SelectAdmin/component';
import AboutUs from '../AboutUs/comp';
import CustomFooter from '../CustomFooter/comp';
import VotesPage from "../VotesPage/comp"
import Plans from  "../Plans/comp"
import PlanShowPage from '../PlanShowPage/comp';
import Users from "../Users/comp"
import SupportMessages from "../SupportMessages/comp"
import CheckSupportMessageStatus from "../CheckSupportMessageStatus/comp"
import { AppIsNotAvailable } from '../app_is_not_available/component';
//import "nprogress/nprogress.css"
//import nprogress from "nprogress"
import {custom_ajax} from '../../scripts/custom_ajax'
import GlobalContext from "../../scripts/globalContext"
import AlertModal from '../alertModal/comp';
export default function App(){
    const [alertDialogData,changeAlertDialogState] = useState({
      visibility : true,
      title : "nothing",
      content : "nothing"
    })
    window.custom_ajax = custom_ajax
    return (
    <GlobalContext.Provider value={{alertDialogData,changeAlertDialogState}}>
      <AlertModal></AlertModal>
    <div style={{height:"100%"}}>
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
          <Route exact path="/support-messages/check_status" render={props=><CheckSupportMessageStatus />}></Route>
          
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
      
      <CustomFooter></CustomFooter>
    </div>
    </GlobalContext.Provider>
  );
  }
  /* i deleted .title margin right from common css make sure it does not break something 
also for margin it self check that
we must show all current open plans at charts page not only last of them */