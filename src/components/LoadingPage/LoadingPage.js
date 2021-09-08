import { Component } from "react";
import "./LoadingPage.css";
import { GlobalContext } from "../../globalContext";
class LoadingPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            progresses : props.progresses,
            current_progress_index : 0,
            progressbar_percent:0,
            fade_out_animation:false
        }
        if(typeof props.timer != 'undefined'){
            setTimeout(()=>{
                this.next_progress()
            },this.props.timer*1000)
        }
    }
    static contextType = GlobalContext;
    next_progress = ()=>{
        if(this.state.current_progress_index>=this.state.progresses.length){
            return 
        }
        this.setState({
            current_progress_index:this.state.current_progress_index+1,
            progressbar_percent:(this.state.current_progress_index+1)/this.state.progresses.length *100
        },()=>{
            if(this.state.progressbar_percent === 100){
                setTimeout(()=>{
                    this.hide_with_animation()
                },1000)
            
        }    
        })
        

        
    }
    hide_with_animation = ()=>{
        this.setState(state =>{
            return {
                fade_out_animation:true
            }
        },()=>{
            setTimeout(()=>{
                this.context.toggle_loading_page_visibility()
            },2000)
        })
    }
    make_text_1 = ()=>{
        let text ;
        if(this.state.current_progress_index+1>this.state.progresses.length){
            text = "ok"
        }else{
            text = `(${this.state.current_progress_index+1}/${this.state.progresses.length})`;
        }
        
        return text
    }
    make_text_2 = ()=>{
        let text;
        if(this.state.current_progress_index+1>this.state.progresses.length){
            text = "everything done";
        }else{
            text = this.state.progresses[this.state.current_progress_index]
        }
        return text;

    }
    render(){
        return(
            <GlobalContext.Consumer>
                {value=>{
                    if(!value.is_loading_page_visible){
                        return null
                    }
                    return (
                        <div className={`loading_page ${this.state.fade_out_animation?"animate_out":""}`}>
                
                            <div className="center">
                                <div className="icon" onClick={this.next_progress}></div>
                                <div className="progress">
                                    <div className="progress-bar" onClick={value.toggle_loading_page_visibility} style={{width:this.state.progressbar_percent+"%"}}></div>
                                </div>
                                <div className="text">
                                    <h5 className="text-light current_progress_name">{this.make_text_2()}</h5>
                                    <h5 className="current_progress_from_5 text-light">{this.make_text_1()}</h5>
                                </div>
                                
                            </div>
                        
                        </div>
                    )
                }}
            
            </GlobalContext.Consumer>
            
        )
    }
}


export default LoadingPage;