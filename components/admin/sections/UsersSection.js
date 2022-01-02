import { Component } from "react";
import Option from "../../Option/Option"
import {custom_ajax} from "../../../custom_ajax"
import IntroBox from "../../IntroBox/component"
import trash_white_svg from "../../../common/bootstrap-icons/trash-white.svg"
import award_white_svg from "../../../common/bootstrap-icons/award-white.svg"
export default class UsersSection extends Component{
    constructor(){
        super()
        this.state = {
            users:[]
        }
    }
    make_user_admin = (username)=>{
        //todo : check if user is admin tell this to user and return 
        if (! window.confirm("are you sure you want to make this user admin? ")) return
        var password = window.prompt("enter a password for his account")
        custom_ajax({
            params:{
                func:"make_user_admin",
                username,
                password
            }
        })
        .then(result_data=>{
            alert('done successfuly')
            this.reload_users()
        })
    }
    delete_user_handler = (username)=>{
        if (! window.confirm("are you sure you want to delete this user ? ")) return
        custom_ajax({
            params:{
                func:"delete_user",
                username
            }
        })
        .then(result_data=>{
            alert('done successfuly')
            this.reload_users()
        })
    }
    reload_users = ()=>{
        custom_ajax({
            params:{
                func:"get_users"
            }
        })
        .then(users=>{
            this.setState({
                users
            })
        })
    }
    render(){
        return(
            <div>
                <IntroBox title='users' info="you can modify users here" />
                {this.state.users.map(user=>{
                    return(
                        <Option title={user.username} content={"no info"} key={user.username}>
                            <img alt='trash icon white' src={trash_white_svg} className="icon" onClick={()=>{this.delete_user_handler(user.username)}}/>
                            <img alt='award icon white' src={award_white_svg} className="icon" onClick={()=>{this.make_user_admin(user.username)}}/>
                        </Option>
                    )
                })}
            </div>
        )
        
    }
    componentDidMount(){
        this.reload_users()
    }
}