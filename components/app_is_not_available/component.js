import React from "react"
import "./styles.scss"
export function AppIsNotAvailable(){
    function refresh_data(){
        window.location.reload()
    }
    return(
        <>
            <div id="app_is_not_available_layer">
                <div className="background"></div>
                <div className="center container">
                <div className="main_icon_container mb-3"></div>
                <h2 className="title text-primary">mouj is not avaiable right now</h2>
                <h6 className="info text-secondary">server is down or app is in maintenance mode, be sure we are trying hard to keep mouj up !</h6>
                <button onClick={refresh_data} id="refresh_button" className="btn btn-info btn-lg rounded w-75 mt-2">refresh</button>
                </div>
            </div>
            
        </>
    )
}