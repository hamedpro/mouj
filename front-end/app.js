let store = new Vuex.Store({
    state:{
        app_title:"hamed"
    },
    mutations:{
        change_app_title(state,here){
            this.state.app_title = here.join("/");
        }
    }
})


let routes = [
    {
        path:"/",
        component:{
            template:"<home></home>"
        }
    },
    {
        path:"/admin-dashboard",
        component:{
            template:"<admin-dashboard></admin-dashboard>"
        }
    },
    {
        path:"/charts",
        component:{
            template:"<charts></charts>"
        }
    },
    {
        path:"/support",
        component:{
            template:'<support></support>'
        }
    },
    {
        path:"/user-home",
        component:{
            template:"<user-home></user-home>"
        }
    },
    {
        path:"/new",
        component:{
            template:"<new></new>"
        }
    },
    {
        path:'/register',
        component:{
            template:'<register></register>'
        }
    }
]
let router = new VueRouter({
    routes
})
function update_header_navbar(){
    let path = window.location.href.split('#');
    let last_child = path[path.length-1] == "/" ? "" : path[path.length-1];
    let new_header_title;
    if(last_child == "") {
        new_header_title = `<a href='#/' class="text-light">vahed</a><span> ${last_child}</span>`;
    }else{
        new_header_title = `<a href='#/'>vahed</a><span> ${last_child}</span>`;
    }
    
    change_content_with_animation($(".header .url"),new_header_title);
}
let app = new Vue({
    el:"#app",
    router,
    store,
    watch:{
        $route(to,from){
            update_header_navbar()

        }
    },
    created:function(){
        $(document).ready(()=>{ //make sure about it
            update_header_navbar()
        })
    }
})

//animate loading bar on link clicks => 
$(document).on('click','a',function(){
    set_loading_bar(100).then(function(){remove_loading_bar()})
})


