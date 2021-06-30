function redirect_to_payment_gateway (){
    user_confirm = confirm('آیا صحت اطلاعات را تایید می کنید؟')
    if(!user_confirm) return;
    //redirect to payment gateway =>
    let amount = Number(document.getElementById('amount').value);
    let username = document.getElementById('username').value;
    let category = document.getElementById('category').value;
    let info = "empty";
    let generated_url = `../paymentGateway/index.php`+object_to_query({
        amount,
        username,
        category,
        info,
        plan_id:Number(localStorage.getItem('plan_id_to_donate'))
    });
    window.location.replace(generated_url);
}

window.onload = function(){
    
    document.getElementById("redirect_to_payment_gateway").onclick = redirect_to_payment_gateway
}