import { Component } from "react";
import "./s.css"
export default class PlansContainer extends Component{
    render(){
        return(
            <div id="plans_container">
                {this.props.children}
            </div>
        )
    }
}