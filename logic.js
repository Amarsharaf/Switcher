let filterdList = document.querySelectorAll("ul li")
let gallery = document.querySelectorAll("img");

filterdList.forEach(li => {
    li.addEventListener("click",remove)
    li.addEventListener("click",images)
});

function remove() {
    filterdList.forEach(el => {
        el.classList.remove("active")
        this.classList.add("active")
    })
}

function images() {
    gallery.forEach(img => {
        img.style.display = "none"
    })
    document.querySelectorAll(this.dataset.work).forEach(ele => {
        ele.style.display = "inline-block"
    })
}