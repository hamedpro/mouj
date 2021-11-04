import * as fs from "fs"
var new_env_vars = {
    "mysql_hostname":process.argv[2],
    "mysql_username":process.argv[3],
    "mysql_password":process.argv[4],
    "mysql_database_name":process.argv[5],
    "api_entry_point":process.argv[6]
}
console.log(new_env_vars)
fs.writeFileSync('./env_vars.json',JSON.stringify(new_env_vars))
console.log('env_vars set according to your input, now you can build or serve project')