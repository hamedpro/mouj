import * as fs from "fs"
var env_vars = JSON.parse(fs.readFileSync("../../env_vars.json"))
export async function custom_ajax({params={}}){
    var url = env_vars.api_entry_point;
    // note : in reject func of first then block you should use e.message for error handling
    if(Object.keys(params).length !== 0){
        url+= "?";
        for(var prop in params){
            url+= prop+"="+params[prop]+"&"
        }
        url = url.split('')
        url.pop()
        url = url.join('')
    }
    var fetch_response = window.fetch(url)
    //todo check if error in fetch_response, throw that
    console.log('fetch request detected to: '+url)
    var parsed_json = null;
    try{
        parsed_json = await fetch_response.then(res=>res.json())
    }catch(e){
        throw new Error('invalid_json')
    }
    
    //check if error field in json is not empty
    if(parsed_json.errors.length !== 0){
        throw new Error("errors_field_is_not_empty")
    }
    return parsed_json['data']
};
console.log(env_vars)