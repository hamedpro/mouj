import { Component } from "react";

//get username from localstorage 
import "./styles.css"
function bel_bel(el,tempColor){
    var oldColor = el.style.background;
    el.style.background = tempColor;
    setTimeout(function(){
        el.style.background = oldColor
    },300)
}
class AdminPasswordCheckPage extends Component{
    constructor(props){
        super(props)
        /* document.onkeypress = function(e){
            for(var i = 0;i<10;i++){
                if(e.key == i.toString()){
                    document.getElementById("button_"+(i)).click()
                }
            }
        } */
      
        this.state = {
            password:[],
            username:this.props.match.params.username
        }
        
    }
    componentDidMount = ()=>{
        var self = this
        let buttons =[];
        for (let i = 0; i <= 9; i++) {
            var el = document.getElementById("button_"+(i))
            buttons.push(el)
        }
        buttons.forEach(function(button){
            button.onclick = function(){
                self.setState({password:[...self.state.password,Number(button.innerHTML)]})
                bel_bel(button,"blue");
                if(self.state.password.length === 4){
                    var joined_password = Number(self.state.password.join(""))
                    var url = '../api/requests.php?func_name=verify_admin_password&username='+self.state.username+"&password="+joined_password;
                    fetch(url)
                    .then(s=>s.text())
                    .then(s=>{
                        if(s === "true"){
                        //if(true){
                            //redirect to admin panel
                        }else{
                            alert('هویت شما تایید نشد، دوباره تلاش کنید.')
                        }
                    })
                    self.setState({password:[]})
                }
            }

        })
    }
    render(){
        return (
            <div>
            <div className="row justify-content-center d-flex mt-3">
        <div className="col-6">
            <h1 className="text-light rtl-center">ورود به حساب کاربری</h1>
        </div>
    </div>  
    <div className="row justify-content-center d-flex mt-1">
        <div className="col-10">
            <h5 className="text-secondary rtl-center">شما در حال سعی برای ورود به پنل مدیریت کاربری با نام کاربری <script>document.write(username)</script> هستید.</h5>
        </div>
    </div>  
    
    <div className="row d-flex justify-content-center mt-1">
        <hr className="bg-light w-75"/>
    </div>  
    <div className="buttons_row">
        <button id="button_1">1</button>
        <button id="button_2">2</button>
        <button id="button_3">3</button>
    </div>
    <div className="buttons_row">
        <button id="button_4">4</button>
        <button id="button_5">5</button>
        <button id="button_6">6</button>
    </div>
    <div className="buttons_row">
        <button id="button_7">7</button>
        <button id="button_8">8</button>
        <button id="button_9">9</button>
    </div>
    <div className="buttons_row">
        <button style={{opacity:0}}>*</button>
        <button id="button_0">0</button>
        <button style={{opacity:0}}>*</button>
    </div>
    </div>
        )
    }
}

export default AdminPasswordCheckPage;