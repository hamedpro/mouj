import { Component } from "react";
import IntroBox from "../../IntroBox/component"
import Option from "../../Option/Option"
import {custom_ajax, custom_ajax_default_path} from "../../../api_client/custom_ajax"
import trash_white_svg from "../../../common/bootstrap-icons/trash-white.svg"
export default class SettingPagePlansSection extends Component{
    constructor(){
        super()
        this.state = {
            plans:[]
        }
    }
    reload_plans = ()=>{
        custom_ajax({
            params:{
                func:"get_plans"
            }
        })
        .then(plans=>{
            this.setState({
                plans:plans
            })
        })
    }
    delete_plan = (plan_id)=>{
        if (! window.confirm('are you sure you want to delete this plan ? ')) return
        custom_ajax({
            params:{
                func:"delete_plan",
                plan_id
            }
        })
        .finally(r=>{
            this.reload_plans()
        })
    }
    componentDidMount(){
        this.reload_plans()
    }
    render = ()=>(
        <div>
            <IntroBox title="plans" info="you can modify plans here" />
            {
                this.state.plans.map(plan=>{
                    return (
                        <Option title={plan.title} content={plan.description} key={plan.id}>
                            <img alt='trash white svg' src={trash_white_svg} onClick={()=>this.delete_plan(plan.id)}></img>
                        </Option>
                    )
                })
            }
        </div>
    )
}