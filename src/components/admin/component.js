import "./styles.css"
import {Component} from "react"
import {Switch,Route} from "react-router-dom"
import SettingPagePlansSection from "./sections/PlansSection"
import TransactionsSection from "./sections/TransactionsSection"
import UsersSection from "./sections/UsersSection"
import SupportMessagesSection from "./sections/SupportMessagesSection"
import SettingsSection from "./sections/SettingsSection"
import IntroBox from "../IntroBox/component"
export default class AdminPage extends Component{
    constructor(props){
        if(window.localStorage.getItem('admin_username') == null ){
            window.location.assign('#/select-admin')
        }
        super()
        this.state = {
            username:window.localStorage.getItem('admin_username'),
            user_profile_info : "nothing"
        }
    }
    render = ()=>(
        <div>
            <div className="profile">
                <div className="profileImage"></div>
                <h1 className="bg-primary text-light" id="username">{this.state.username}</h1>
                <div className="text-secondary" id="info">{this.state.user_profile_info}</div>
                
            </div>
            <div className="horizontalItems">
                <div className="item" id="load_plans_button" onClick={()=>window.location.assign('#admin/plans')}>plans</div>
                <div className="item" id="load_transactions_button" onClick={()=>window.location.assign('#admin/transactions')}>transactions</div>
                <div className="item" id="load_users_button" onClick={()=>window.location.assign('#admin/users')}>users</div>
                <div className="item" id="load_support_messages_button" onClick={()=>window.location.assign('#admin/support_messages')}>support_messages</div>
                <div className="item" id="load_settings_button" onClick={()=>window.location.assign('#admin/settings')}>settings</div>
            </div>
            
            <div id="dataContainer">
                <Switch>
                    <Route exact path='/admin/plans'>
                        <SettingPagePlansSection />
                    </Route>

                    <Route exact path='/admin/transactions'>
                        <TransactionsSection />
                    </Route>

                    <Route exact path='/admin/users'>
                        <UsersSection />
                    </Route>

                    <Route exact path='/admin/support_messages'>
                        <SupportMessagesSection />
                    </Route>
                    <Route exact path='/admin/settings'>
                        <SettingsSection />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}