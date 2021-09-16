import { Component } from "react";
import "./support-option.css"

class SupportOption extends Component{
    render = ()=>{
        return (
        <div className="row mb-1 mx-2" dir='rtl'>
            <div className="col-1">
                <img alt="icon svg" src={this.props.icon_src} />
            </div>
            <div className="col">
                {this.props.children}
            </div>
        </div>
        )
       
    }
}
export default SupportOption;