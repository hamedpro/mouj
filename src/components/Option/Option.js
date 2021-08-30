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
                    <div className="right_container">
                        <h2 className="title">{this.props.title}</h2>
                        <div className="content">{this.props.content}</div>
                    </div>
                </div>
                <div className="iconsContainer">
                    {this.props.icons.forEach(icon=>{
                        return (
                            <div className="icon" onClick={icon.handler}>{icon.svg}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Option;