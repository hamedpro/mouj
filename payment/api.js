var api = {
    php:{},
    localStorage:{}
}
api.localStorage.newTransaction = function(username,amount,info,category){
    newTr = {
        username,
        amount,
        info,
        category
    }
    currentTrs = null; 
    if(localStorage.getItem('mouj-transactions') == undefined){
        currentTrs = [];
    }else{
        currentTrs = JSON.parse(localStorage.getItem('mouj-transactions'));
    }
    currentTrs.push(newTr);
    localStorage.setItem("mouj-transactions",JSON.stringify(currentTrs))
}
api.localStorage.getTransactions = function(){
    return JSON.parse(localStorage.getItem('mouj-transactions'))
}
api.php.newTransaction = function(username,amount,info,category){
    
}

var tests = {}
/* tests.localStorage.newTransaction = function(){
    //api.localStorage.newTransaction()
} */