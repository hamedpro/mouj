import * as fs from "fs"
var env_vars_as_json = JSON.parse(fs.readFileSync('./env_vars.json'))
console.log('')
console.log("project was built according to these env vars -> ")
console.log(env_vars_as_json)
console.log('')
console.log('[mouj-project] folder is ready to deploy')
console.log(`[note] : if you want to deploy on a real server,
you must change permitions of php files and folders which contain them 
(for example with chmod command on linux),
set that folders permition to 755 and set php files permitions to 644,
otherwise you will get internal server error`)