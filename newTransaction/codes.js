function redirect_to_payment_gateway (){
     let user_confirm = confirm('آیا صحت اطلاعات را تایید می کنید؟')
    if(!user_confirm) return;
    //redirect to payment gateway =>
    let amount = Number(document.getElementById('amount').value);
    let username = document.getElementById('username').value;
    let category = document.getElementById('category').value;
    let info = "empty";
    let generated_url = `../paymentGateway/index.php?amount=${amount}&username=${username}&category=${category}&info=${info}`;
    window.location.replace(generated_url);
}

window.onload = function(){
    
    document.getElementById("redirect_to_payment_gateway").onclick = redirect_to_payment_gateway
}