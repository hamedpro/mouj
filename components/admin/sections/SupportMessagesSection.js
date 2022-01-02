import { Component } from "react";
import {custom_ajax} from "../../../custom_ajax"
import Option from "../../Option/Option"
import IntroBox from "../../IntroBox/component"
import box_arrow_up_white from "../../../common/bootstrap-icons/box-arrow-up-white.svg"
export default class SupportMessagesSection extends Component{
    constructor(){
        super()
        this.state = {
            support_messages:[]
        }
    }
    open_support_message(support_message_id){
        window.location.assign("#/support-messages/"+support_message_id)
    }
    render(){
        return(
           <div>
                <IntroBox title="support messages" info="browse support messages" />
                {this.state.support_messages.map(support_message=>{
                    return(
                        <Option title={support_message.subject} content={support_message.content} key={support_message.id}>
                            <img src={box_arrow_up_white} alt="box arrow up svg" onClick={()=>this.open_support_message(support_message.id)} />
                        </Option>
                    )
                })}
            </div> 
        )
        
    }
    componentDidMount(){
        custom_ajax({
            params:{
                func:'get_support_messages'
            }
        })
        .then((support_messages)=>{
            this.setState({
                support_messages
            })
        })
    }

}