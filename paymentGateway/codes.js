window.onload = function(){
    document.getElementById('pay_button').onclick = function(){
        genUrl = "../paymentSuccess/index.html?username=hamed&amount=2000&info=something&category=anese"
        window.location.replace(genUrl)
    }
}