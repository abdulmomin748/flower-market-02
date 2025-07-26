document.querySelectorAll(".alert-btn").forEach(link =>{
        link.addEventListener("click", () => {
            event.preventDefault();
            alert("item added to cart");
        })
})
// here _link_ is use for all the buttons with class alert-btn
// we can use anything like this