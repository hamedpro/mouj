import { Component } from "react";
export default class PlanShowPage extends Component{
    constructor(props){
        super(props)
        this.state = {plan_id:Number(this.props.match.params.plan_id)}
    }
    componentDidMount(){
        window.custom_ajax({
            params:{
                func:"get_plan_data",
                plan_id : this.state.plan_id
            }
        })
        .then(plan_data=>{
            this.setState({
                plan_data:plan_data
            })
        })
    }
    render(){
        return(
            <div className="text-light">here is plan {this.props.match.params.plan_id} data</div>
        )
    }
}