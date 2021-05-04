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