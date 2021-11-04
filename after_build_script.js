import * as fs from "fs"
var env_vars_as_json = JSON.parse(fs.readFileSync('./env_vars.json'))
console.log('')
console.log("project was built according to these env vars -> ")
console.log(env_vars_as_json)
console.log('')
console.log('[mouj-project] folder is ready to deploy')