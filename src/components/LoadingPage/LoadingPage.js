import { Component } from "react";
import "./LoadingPage.css";

class LoadingPage extends Component{
    render(){
        return(
            <div className="loading_page">
                <div className="icon"></div>
                <div className="progress">
                    <div className="progress-bar"></div>
                </div>
                <h3 className="text-light current_progress_name">transforming...</h3>
                <h3 className="current_progress_from_5">(4/5)</h3>
            </div>
        )
    }
}


export default LoadingPage;