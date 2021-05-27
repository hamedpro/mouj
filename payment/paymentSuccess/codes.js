urlData = hamed.getArgsFromUrl(window.location.href)
api.localStorage.newTransaction(urlData.username,Number(urlData.amount),urlData.info,urlData.category)
window.onload = function(){
    document.getElementById('username').textContent = urlData.username
    document.getElementById('amount').textContent = urlData.amount
    document.getElementById('info').textContent = urlData.info
    document.getElementById('category').textContent = urlData.category
}