import { Component } from "react";
import { custom_ajax } from "../../../api_client/custom_ajax";

export default class CurrentPlan extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            items_1:[],
            items_2:[],
            plan_title:"loading",
            plan_info:"loading",
            progressbar_percent:0
        }
    }
    componentDidMount(){
        custom_ajax({
            params:{
                func:"get_plan_data",
                plan_id:this.props.plan_id
            }
        })
        .then(plan_data=>{
            var items_1 = []
            var items_2 = []
            items_1.push("مجموع مشارکت ها : "+plan_data.current_amount+" ریال")
            items_2.push("جمع مبلغ مورد نیاز :‌ "+plan_data.final_amount_as_rial+" ریال")
            var current_amount = Number(plan_data.current_amount)
            var final_amount  = Number(plan_data.final_amount_as_rial)
            var progressbar_percent = (current_amount/final_amount) * 100

            this.setState({
                plan_title:plan_data.title,
                plan_info:plan_data.description,
                items_1,
                items_2,
                progressbar_percent
            })
        })
    }
    render(){
        return(
            <div className="lastDoneWork mb-4">
                <div className="row pt-2 px-2">
                    <div className="col-8 mx-0">
                        <h2 className="text-light mx-0 dir_rtl">{this.state.plan_title}</h2>
                        <p className="text-light dir_rtl">{this.state.plan_info}</p>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <div className="main_icon"></div>
                    </div>
                </div>
                <div className="items row mt-2">
                    <div className="col d-flex flex-column">
                        {/* <div className="item">
                            <div className="icon"></div>
                            <div className="content">به نام خدا</div>
                        </div> */}
                        {this.state.items_1.map(item=>{
                            return(
                                <div className="item" key={item}>{item}</div>
                            )
                        })}
                    </div>
                    <div className="col d-flex flex-column">
                        {this.state.items_2.map(item=>{
                            return(
                                <div className="item" key={item}>{item}</div>
                            )
                        })}
                    </div>
                </div>

                <div className="row dir_rtl px-2 mt-3">
                    <h5 className="text-light">میزان پیشرفت :‌</h5>
                </div>
                <div className='px-4 pt-2 pb-3'>
                    <div className="progress">
                        <div className="progressbar bg-success" style={{width:this.state.progressbar_percent+"%",textAlign:"center",color:"darkblue"}}> {Math.round(this.state.progressbar_percent) + ' %'}</div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center pb-2 px-2 pt-2" >
                    <div className="col">
                        <button className="btn btn-info w-100" onClick={()=>{window.location.assign("#/new-transaction")}}>مشارکت در طرح</button>
                    </div>
                </div>
                
                
            </div>
        )
    }
}