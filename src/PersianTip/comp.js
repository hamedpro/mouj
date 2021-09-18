import { Component } from "react";
import lightbulb_white_svg from "../common/bootstrap-icons/lightbulb-white.svg"
import "./css.css"
export default class PersianTip extends Component{
    render(){
        return(
            <div className='persian_tip_container'>
                <img src={lightbulb_white_svg} alt='lightbulb white svg' />
                {this.props.children}
            </div>
        )
    }
}