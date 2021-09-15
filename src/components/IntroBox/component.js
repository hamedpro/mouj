import { Component } from "react";

export default class IntroBox extends Component{
    //this component require these props => title, info
    render (){
        return (
            <div>                
                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-6">
                        <h1 className="text-light rtl-center" id="dataContainer-title">{this.props.title}</h1>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-10">
                        <h5 className="text-secondary rtl-center" id="dataContainer-info">{this.props.info}</h5>
                    </div>
                </div>

                <div className="row justify-content-center d-flex">
                    <hr className="bg-light w-75" />
                </div>
            </div>
        )
    }
}