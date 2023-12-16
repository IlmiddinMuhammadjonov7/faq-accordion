const elements = document.querySelectorAll("#element")

function bir(){
    elements.forEach(element => {
        element.firstElementChild.addEventListener("click",()=>{
            if (element.lastElementChild.classList.value=="mt-4 hidden") {
                elements.forEach(item=>{
                    if (!item.lastElementChild.classList.value.includes("hidden")) {
                        item.lastElementChild.classList.add("hidden")
                        item.firstElementChild.lastElementChild.setAttribute("src", "./img/ph_plus-circle-fill.svg")
                    }
                })
                element.lastElementChild.classList.remove("hidden")
                element.firstElementChild.lastElementChild.setAttribute("src", "./img/ph_minus-circle-fill.svg")
            }else{
                element.firstElementChild.lastElementChild.setAttribute("src", "./img/ph_plus-circle-fill.svg")
                element.lastElementChild.classList.add("hidden")
            }
        })
    })
}
bir()
