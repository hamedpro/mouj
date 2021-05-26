function redirect_to_payment_gateway (){
     let user_confirm = confirm('آیا صحت اطلاعات را تایید می کنید؟')
    if(!user_confirm) return;
    //redirect to payment gateway =>
    let amount = Number(document.getElementById('amount').value);
    let username = document.getElementById('username').value;
    let category = document.getElementById('category').value;
    //let info = document.getElementById('info').value;
    let info = "empty";
    console.log("amount"+amount)
    console.log("username"+username)
    console.log("category"+category)
    console.log("info"+info)
    

    let generated_url = `./back-end/payment-gateway-simulator.php`;
    //window.location.replace(generated_url);
}

window.onload = function(){
    new Vue({
        el:"#app"
    })
    document.getElementById("redirect_to_payment_gateway").onclick = redirect_to_payment_gateway
}