import { Component } from "react";

export default class HomeOption extends Component{
    //props => title_href , icon_src , title, info
    render(){
        return(
            <div className="home-option row">
                    <div className="col-3 d-flex justify-content-center align-items-center m-r-1-percent">
                    <img alt="" src={this.props.icon_src} />
                    </div>
                    <div className="col mt-3">
                        <h2 className="home-option-title"><a href={this.props.title_href}  className="text-info">{this.props.title}</a></h2>
                        <h4 className='text-secondary info'>{this.props.info}</h4>
                    </div>
            </div>
        )
    }
}