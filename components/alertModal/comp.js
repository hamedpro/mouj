import React, { useContext } from "react";
import GlobalContext from "../../scripts/globalContext";
import './styles.css'
export default function AlertModal(){
    var context_value = useContext(GlobalContext)
    var visibility = context_value.alertDialogData.visibility
    var title = context_value.alertDialogData.title
    var content = context_value.alertDialogData.content
    return(
        <div className="background" style={{display: visibility ? 'flex' : "none"}}>
            <div id="alert_modal" >
                <h1>title is {title}</h1>
                <h5>content is {content}</h5>
                <button onClick={()=>context_value.changeAlertDialogState({visibility : false})}>close alert</button>
            </div>
        </div>
    )
}