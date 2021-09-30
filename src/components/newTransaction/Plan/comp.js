import { Component } from "react";

export default class Plan extends Component{
    /* props : title , info , props_list : string[] , button_onclick_handler :func */
    render(){
        return(
            <div className="plan">
                    <b className="title">{this.props.title}</b>
                    <h6 className="info">{this.props.info}</h6>
                    <div className="props">
                        {this.props.props_list.map(prop=>{
                            return (
                                <div className="prop">{prop}</div>
                            )
                        })}
                    </div>
                    <div className="row d-flex justify-content-center mt-4 mb-1">
                        <button className="btn btn-success w-75" onClick={this.props.button_onclick_handler}>انتخاب طرح</button>
                    </div>
                    
                </div>
        )
    }
}