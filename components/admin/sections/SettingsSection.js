import { Component } from "react";
import {custom_ajax} from "../../../custom_ajax"
import Option from "../../Option/Option"
import IntroBox from "../../IntroBox/component"
import box_arrow_up_white from "../../../common/bootstrap-icons/box-arrow-up-white.svg"
var options = [
    {
        title:'new plan',
        info:"some info about create new plan option",
        handler(){
            var starter_username = window.localStorage.getItem("admin_username")
            var title = window.prompt('enter its title')
            var description = window.prompt('enter its description')
            var final_amount_as_rial = window.prompt('enter final amount as rial')
            custom_ajax({
                params:{
                    func:'new_plan',
                    starter_username,
                    final_amount_as_rial,
                    title,
                    description
                }
            })
            .then(r=>{
                alert('new plan saved successfuly !')
            })
        }
    },
    {
        title:"delete hole database and reconfigure",
        info:"be careful when using this option",
        handler(){
            if( ! window.confirm('are you completely sure you want to delete all data from db and re configure app ??')){
                return false
            }
            custom_ajax({
                params:{
                    func:"delete_database"
                }
            }).then(r=>{
                alert("done successfuly , you will redirect to home page right now !")
                window.location.assign("#/")
            },()=>{
                alert("there was an error in that processs")
            })
        }
    }, 
    {
        title:"make user admin",
        info:"give admin previlages to a user",
        handler(){
            alert("you must do it from admins section of this page")
        }
    }
]
export default class SettingsSection extends Component{
    render(){
        return(
            <div>
                <IntroBox title="settings" info="you can modify settings here" />
                {options.map(option=>{
                    return (
                        <Option title={option.title} content={option.info} key={option.title}>
                            <img alt="arrow white svg" className="" src={box_arrow_up_white} onClick={option.handler}/>
                        </Option>
                    )
                })}
            </div>
        )
    }
}