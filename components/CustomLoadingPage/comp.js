// use its functions to render custom loading page in dom directly !
import {Component} from "react"
import "./styles.css"
export default class CustomLoadingPage extends Component{
    render(){
        return(
            <div className="custom_loading_page">
                <div className="sample_header"></div>
                <div className="content">
                    <div className='d-flex justify-content-center align-items-center'>
                    <div className="mouj-icon"></div>
                    <h1 className="m-0 p-0 d-inline text-white mx-2">mouj project</h1> 
                </div>
                
                <p className="text-info mt-4">fetching data from server ...</p>
                </div>
                
            </div>
        )
        
    }
}