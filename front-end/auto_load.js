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


let js_files = [
	"./package.js",
	"./api/api.js",
	{urls:{local_max:'./archive/chart.js'},load_from_cache:true},
	{urls:{local_max:"./archive/jquery-3.5.1.js"},load_from_cache:true},
	{urls:{local_max:"./archive/vue.js"},load_from_cache:true},
	{urls:{local_max:"./archive/vue-router.js"},load_from_cache:true},
	{urls:{local_max:"./archive/vuex.js"},load_from_cache:true},
	{urls:{local_max:"./archive/bootstrap-5.0.0-beta2-dist/js/bootstrap.bundle.js"},load_from_cache:true},
	"./archive/common.js",
	'./front-end/components/home/home.js',
	'./front-end/components/home-option/home-option.js',
	'./front-end/components/header/header.js',
	'./front-end/components/admin-dashboard/admin-dashboard.js',
	'./front-end/components/charts/charts.js',
	
	'./front-end/components/support/support.js',
	'./front-end/components/support/support-option/support-option.js',
	'./front-end/components/user-home/user-home.js',
	'./front-end/components/new/new.js',
	'./front-end/components/new/tip-component/tip.js',
	"./archive/loading-bar.js",
	'./front-end/components/register/register.js',
	'./front-end/app.js'
]


let css_files = [
	{urls:{local_max:"./archive/bootstrap-5.0.0-beta2-dist/css/bootstrap.rtl.css"},load_from_cache:true},
	"./archive/common.css",
	'./front-end/components/home/home.css',
	'./front-end/components/home-option/home-option.css',
	'./front-end/components/header/header.css',
	'./front-end/components/admin-dashboard/admin-dashboard.css',
	'./front-end/components/charts/charts.css',
	"./archive/loading-bar.css",
	'./front-end/components/support/support.css',
	'./front-end/components/user-home/user-home.css',
	'./front-end/components/new/new.css',
	'./front-end/components/new/tip-component/tip.css',
	'./front-end/components/register/register.css',
	'./front-end/components/support/support-option/support-option.css',
]
auto_load.load_files(js_files)
auto_load.load_files(css_files)


