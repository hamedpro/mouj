//todo : make this custom modal a component
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
