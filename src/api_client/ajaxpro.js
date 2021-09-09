export async function ajaxpro({url,params={},parse_json=false,parse_to_text=false}){
    if(Object.keys(params).length != 0){
        url+= "?";
        for(var prop in params){
            url+= prop+"="+params[prop]+"&"
        }
        url = url.split('')
        url.pop()
        url = url.join('')
    }
    if(parse_json){
        try{
            return await window.fetch(url).then(res=>res.json());
        }catch(e){
            return "invalid_json"
        }
    }else if(parse_to_text){
        return await window.fetch(url).then(res=>res.text())
    }else{
        return await window.fetch(url)
    }    
};

