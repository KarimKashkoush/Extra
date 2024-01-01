let navBar = document.getElementById("navBar");

window.onscroll = ()=> {
    if(scrollY > 50) {
        navBar.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    } else {
        navBar.style.boxShadow = "none"
    }
}
