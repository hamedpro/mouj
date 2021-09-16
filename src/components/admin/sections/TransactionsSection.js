import { Component } from "react";
import Option from "../../Option/Option"
import {custom_ajax} from "../../../api_client/custom_ajax"
import trash_white_svg from "../../../common/bootstrap-icons/trash-white.svg"
import IntroBox from "../../IntroBox/component"
export default class TransactionsSection extends Component{
    constructor(){
        super()
        this.state = {
            transactions:[]
        }
    }
    delete_transaction = (transaction_id)=>{
        if(! window.confirm('are you sure you want to delete this transaction ?')) return
        custom_ajax({
            params:{
                func:"delete_transaction",
                transaction_id
            }
        }).finally(r=>{
           this.reload_transactions() 
        })
        
    }   
    render(){
        return(
           <div>
               <IntroBox title="transactions" info="you can modify transactions here" />
                {this.state.transactions.map(tr=>{
                    return(
                        <Option title={tr.username} info={tr.final_amount_as_rial}>
                            <img src={trash_white_svg} alt='trash white icon as svg' onClick={()=>this.delete_transaction(tr.id)} />
                        </Option>
                    )
                })}
            </div> 
        )
        
    }
    componentDidMount(){
        this.reload_transactions()
    }
    reload_transactions = ()=>{
        custom_ajax({
            params:{
                func:"get_transactions"
            }
        })
        .then(transactions=>{
            this.setState({
                transactions
            })
        })
    }
}