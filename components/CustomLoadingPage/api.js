import ReactDOM from "react-dom"
import CustomLoadingPage from "./comp"
export function inject_loading_page(){
    ReactDOM.render(<CustomLoadingPage />,document.getElementById("loading_page_root"))
}
export function eject_loading_page(){
    ReactDOM.unmountComponentAtNode(document.getElementById('loading_page_root'))
}
