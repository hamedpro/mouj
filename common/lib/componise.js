var componise = {
    renderFunctions : {}
}
componise.renderComponent = function(object){
    
    if(object.componentName == "tip"){
        var template = 
        `
        <div class="mb-2">
            <span><img src="${object.iconSrc}"></span><h6 class="tip text-secondary">${object.slot}</h6>
            <br>
        </div>
        `;
        document.write(template)
    }
    if(object.componentName == "support-option"){
        var template = 
        `    
            <div class="row mb-1 mx-2" dir='rtl'>
            <div class="col-1">
                <img src="${object.iconSrc}">
            </div>
            <div class="col">
                ${object.slot}
            </div>
        </div>
        `;
        document.write(template);
    }
    if(object.componentName == "myheader"){
        var template = 
        `
        <div class="header">
            <h2>mouj</h2>
            
            <a href='../home'>
                <svg viewBox="0 0 16 16" class="bi bi-house person_icon" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
            </a>
        </div>
        `;
        document.write(template)
        time_out = null;
        document.querySelector('.header h2').onclick = function(){
            if(localStorage.getItem('title_click_count') == 6){
                localStorage.removeItem('title_click_count')
                user_confirm = confirm('are you sure you want to open admin page?')
                if(!user_confirm) return 
                window.location.replace("../admin")
            }else if(localStorage.getItem('title_click_count') == null){
                localStorage.setItem('title_click_count',1)
            }else{
                localStorage.setItem('title_click_count',Number(localStorage.getItem('title_click_count'))+1)
            }
            
        }
        
        
        
    }
    if(object.componentName == "timelineBox"){
        var t = `
        <div class="timelineBox">
        <div class="timelineIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-tsunami" viewBox="0 0 16 16">
                <path d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zM2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.878 1.878 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5a.493.493 0 0 1 .034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495-.426-.42-1.19-.77-2.477-.77-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13z"/>
            </svg>
        </div>
        <h6 class="timelineTitle text-secondary">${object.title}</h6>
        <div class="timelineLine"></div>
        <div class="timelineItemsContainer">
        `
        object.items.forEach(item=>{
            t+=`
            <div class="timelineItem">
                <h5 class="text-light mb-2 mt-2">${item.title}</h5>
                <h6 class="text-info">${item.content}</h6>
            </div>
            `
        });
        
        t+=`
            </div>
        </div>
        `
        return t;
    }
}
renderPlan = function(object){
    container = document.createElement('div');
    container.classList.add('plan');
    if(typeof object.container_click_handler != 'undefined'){
        container.onclick = object.container_click_handler
    }
    
    iconsContainer = document.createElement('div')
    iconsContainer.classList.add('iconsContainer')
    object.icons.forEach(icon=>{
        icon_el = document.createElement('div')
        icon_el.classList.add('icon')
        icon_el.innerHTML = icon.svg
        icon_el.onclick = icon.handler
        iconsContainer.appendChild(icon_el)
    })
    container.appendChild(iconsContainer)

    title = document.createElement('h2')
    title.classList.add('title')
    title.innerHTML = object.title
    content = document.createElement('div')
    content.classList.add('content')
    if(typeof object.content == 'undefined'){
        content.innerHTML = ""
    }else{
        content.innerHTML = object.content
    }
    right_container = document.createElement('div')
    right_container.classList.add('right_container')
    right_container.appendChild(title)
    right_container.appendChild(content)
    container.appendChild(right_container)

    
    object.targetEl.appendChild(container)
    
}

function renderCustomModal(obj){
    /* arg 0 : {
        failurefn,
        successfn,
        title,
        message,
        iconName
    } */
    body = document.getElementsByTagName('body')[0];

    background = document.createElement('div')
    background.classList.add('customModalBackground')
    body.appendChild(background)

    container = document.createElement('div')
    container.classList.add('customModal')

    icon = document.createElement('div')
    icon.classList.add('icon')
    //injet svg
    container.appendChild(icon)


    title = document.createElement('h1')
    title.textContent = 'title'
    container.appendChild(title)

    acceptBtn = document.createElement('button')
    acceptBtn.classList.add('acceptBtn')
    acceptBtn.textContent = "ok"
    //acceptBtn.onclick = successfn
    container.appendChild(acceptBtn)

    rejectBtn = document.createElement('button')
    rejectBtn.classList.add('rejectBtn')
    rejectBtn.textContent = "cancel"
    //rejectBtn.onclick = failurefn
    container.appendChild(rejectBtn)

    content = document.createElement('h3')
    content.classList.add('content')
    content.textContent = "cancel"
    container.appendChild(content)

    body.appendChild(container)

}
