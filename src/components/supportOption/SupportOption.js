import { Component } from "react";
import "./support-option.css"
class SupportOption extends Component{
    render = ()=>{
        <div class="row mb-1 mx-2" dir='rtl'>
            <div class="col-1">
                <img src="${object.iconSrc}" />
            </div>
            <div class="col">
                {this.props.children}
            </div>
        </div>
    }
}
export default SupportOption;