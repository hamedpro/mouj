import {Component} from "react";
import "./styles.css"
import lightbulb_white_svg from "../../common/bootstrap-icons/lightbulb-white.svg"
import { custom_ajax } from "../../custom_ajax";
export default class PlanOption extends Component{
    constructor(props){
        super(props)
        this.state = {
            items : [],
            final_amount_as_rial : 10,
            current_amount : 100,
            plan_title : 'loading...',
            plan_description: "loading...",
            plan_id : Number(this.props.plan_id),
            starter_username : "loading..."
        }
    }
    set_items = ()=>{
        let items = []
        items.push("مجموع مشارکت ها : "+this.state.current_amount +" ریال")
        items.push("مبلغ نهایی طرح :"+this.state.final_amount_as_rial +" ریال")
        items.push("نام کاربری شروع کننده : " + this.state.starter_username)
        this.setState({items})
    }
    componentDidMount = ()=>{
        custom_ajax({
            params:{
                func : 'get_plan_data',
                plan_id : this.props.plan_id
            }
        })
        .then(plan_data =>{
            let new_state = {
                final_amount_as_rial : Number(plan_data.final_amount_as_rial),
                current_amount : Number(plan_data.current_amount),
                plan_title : plan_data.title,
                plan_description : plan_data.description,
                starter_username : plan_data.starter_username
            }
            this.setState(new_state,this.set_items)
            
        })
    }
    render(){
        return(
            <div className="p-2 lastDoneWork mb-2">
                <div className="row">
                    <div className="col-8 mx-0">
                        <h3 className="text-light mx-0 dir_rtl">{this.state.plan_title}</h3>
                        <p className="text-light dir_rtl my-0">{this.state.plan_description}</p>
                    </div>
                    <div className="p-0 col-4 d-flex justify-content-center">
                        <div className="main_icon"></div>
                    </div>
                </div>
                <div className="items row w-100 mx-auto px-0">
                    {this.state.items.map((item,index)=>{
                        return (
                            <div key={index} className="item dir_rtl p-1">
                                <span className="light_bulb_white_icon" style={{paddingLeft:"3px"}}><img src={lightbulb_white_svg} alt='lightbulb white svg' /></span>
                                <span className="mx-auto">{item}</span>
                            </div>  
                        )
                    })}
                    
           
                </div>

                <div className="row dir_rtl mt-2">
                    <h5 className="text-light">میزان پیشرفت :‌</h5>
                </div>
                <div className='mb-2'>
                    <div className="progress">
                        <div className="progressbar bg-success" style={{width:(this.state.current_amount / this.state.final_amount_as_rial) * 100 +"%",textAlign:"center",color:"white"}}>{(this.state.current_amount  / this.state.final_amount_as_rial) * 100 +"%"}</div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center" >
                    <div className="col">
                        <button className="btn btn-info w-100" onClick={this.props.button_onclick}>مشارکت در طرح</button>
                    </div>
                </div>
                
                
            </div>
        )
    }
    
}