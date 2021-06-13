var api = {}
var api = {
    php:{},
    localStorage:{}
}
api.localStorage.newSupportMessage = function(username,subject,content,status){
    newSM = {
        username,
        subject,
        content,
        status
    }
    var currentSMs = []
    if(localStorage.getItem('mouj-supportMessages') != undefined){
        currentSMs =JSON.parse(localStorage.getItem('mouj-supportMessages'))
    }
    currentSMs.push(newSM)
    localStorage.setItem('mouj-supportMessages',JSON.stringify(currentSMs))
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
