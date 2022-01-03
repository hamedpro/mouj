//test this file contents
export async function check_server_connection(url){
    //it resove with values -> true (server is available) and false (server is not available)
    return new Promise((res,rej)=>{
        var xhr_req = new XMLHttpRequest()
        xhr_req.onload = function(req_info){
            if(this.status>=200 && this.status <300){
                res(true)
            }else{
                res(false)
            }
        }
        xhr_req.onerror = function(req_info){
            res(false)

        }
        xhr_req.open("GET",url)
        xhr_req.send()
    })
}
export async function check_servers_connection(urls){
    //it will resolve with these values -> url:string
    //reject if there is not any available server
    
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<urls.length;i++){
            console.log(i)
            check_server_connection(urls[i]).then(result=>{
                if(result){
                    resolve(urls[i])
                }else if(i == (urls.length -1)){
                    reject()
                }
            })
        }
    })
}
/* check_servers_connection(['http://localhost:80/mouj-backend/requests.php',"http://localhost:8089"])
.then(res=>{
    console.log(res + " is available url")
},rej=>{
    console.log('not any of them were ready')
})
 */