let auto_load = {}

auto_load.load_file = function(path){
	if(path.includes('.js')){
		return new Promise((resolve,reject)=>{
			let element = document.createElement("script")
			element.src = path
			element.onload = function(){
				resolve()
			}
			document.getElementsByTagName("head")[0].appendChild(element);
		})
	}else if(path.includes('.css')){
		return new Promise((resolve,reject)=>{
			let element = document.createElement("link")
			element.rel = "stylesheet"
			element.href = path
			element.onload = function(){
				resolve();
			}
			document.getElementsByTagName("head")[0].appendChild(element);
		})
	}
}
auto_load.load_files = async function (paths,load_mode = "local_max"){
	//load modes = 'cdn_min','cdn_max','local_min','local_max'
	for(let i = 0;i<paths.length;i++){
		if(typeof paths[i] == "string"){
			await auto_load.load_file(paths[i]+"?time="+Date.now())
		}else{
			switch(load_mode){
				case 'cdn_min':
					if(paths[i].load_from_cache == true){
						await auto_load.load_file(paths[i].urls.cdn_min)
					}else{
						await auto_load.load_file(paths[i].urls.cdn_min+"?time="+Date.now())
					};
					break;
				case 'cdn_max':
					if(paths[i].load_from_cache == true){
						await auto_load.load_file(paths[i].urls.cdn_max)
					}else{
						await auto_load.load_file(paths[i].urls.cdn_max+"?time="+Date.now())
					};
					break;
				case 'local_min':
					if(paths[i].load_from_cache == true){
						await auto_load.load_file(paths[i].urls.local_min)
					}else{
						await auto_load.load_file(paths[i].urls.local_min+"?time="+Date.now())
					};
					break;
				case 'local_max':
					if(paths[i].load_from_cache == true){
						await auto_load.load_file(paths[i].urls.local_max)
					}else{
						await auto_load.load_file(paths[i].urls.local_max+"?time="+Date.now())
					};
					break;
				
			}
		}
		
	}
}
function build_components_urls(component_names_array){
	let results = [];
	component_names_array.forEach(component_name =>{
		results.push(`./front-end/components/${component_name}/${component_name}.css`);
		results.push(`./front-end/components/${component_name}/${component_name}.js`);
	})
	return results;
};

let dependencies = [
	"./api/api.js",
	{urls:{local_max:'./front-end/archive/chart.js'},load_from_cache:true},
	{urls:{local_max:"./front-end/archive/jquery-3.5.1.js"},load_from_cache:true},
	{urls:{local_max:"./front-end/archive/vue.js"},load_from_cache:true},
	{urls:{local_max:"./front-end/archive/vue-router.js"},load_from_cache:true},
	{urls:{local_max:"./front-end/archive/vuex.js"},load_from_cache:true},
	{urls:{local_max:"./front-end/archive/bootstrap-5.0.0-beta2-dist/js/bootstrap.bundle.js"},load_from_cache:true},
	"./front-end/archive/loading-bar.js",
	{urls:{local_max:"./front-end/archive/bootstrap-5.0.0-beta2-dist/css/bootstrap.rtl.css"},load_from_cache:true},
	"./front-end/archive/common.css",
	"./front-end/archive/loading-bar.css"
]
let components_names = [
	'home',
	'home-option',
	'header',
	'admin-dashboard',
	'charts',
	'support',
	'user-home',
	'new',
	'register',
	'support-option',
	'tip',
	'support-form',
	'payment-success'
]
let js_vue_app_files = [
	'./front-end/router.js',
	'./front-end/store.js',
	'./front-end/app.js'
]

auto_load.load_files(dependencies)
.then(()=>{
	return auto_load.load_files(build_components_urls(components_names))
})
.then(()=>{
	return auto_load.load_files(js_vue_app_files)
})

