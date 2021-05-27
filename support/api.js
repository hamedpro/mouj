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