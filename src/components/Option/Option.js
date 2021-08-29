import { Component } from "react";
ButtomButton = props=>{
    if(typeof props.text == "undefined"){
        return null
    }
    return (
        <div className="buttom_button" onClick={props.handler}>{props.text}</div>

    )
}
class Option extends Component{
    //todo : container.classList.add('with_bottom_button')
    //    container.classList.add('dont_effect')
    render = ()=>{
        return (
            <div>
                <div className="plan" onClick={typeof this.props.container_click_handler == 'undefined'? function(){}:this.props.container_click_handler}>
                    <div class="right_container">
                        <h2 class="title">{this.props.title}</h2>
                        <div className="content">{this.props.content}</div>
                    </div>
                </div>
                <div className="iconsContainer">
                    {this.props.icons.forEach(icon=>{
                        return (
                            <div class="icon" onClick={icon.handler}>{icon.svg}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Option;