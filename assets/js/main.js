// Local Var
let body = document.body;
// Local Var



// navBar in Scroll
let navBar = document.getElementById("navBar");

let inDocumentScroll = (window.onscroll = () => {
    if (scrollY > 50) {
        navBar.style.boxShadow = "#384349 0px 5px 15px";
    } else {
        navBar.style.boxShadow = "none";
    }
});
if (scrollY > 50) {
    navBar.style.boxShadow = "#384349 0px 5px 15px";
}
// navBar in Scroll



// Start Show Side Section
let sideSection = document.getElementById("sideSection");
let showSideSectionBtn = document.getElementById("showSideSection");
showSideSectionBtn.onclick = () => {
    sideSection.classList.toggle("show-side-section");
    body.classList.toggle("layout");
    if (sideSection.classList.contains("show-side-section")) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = "scroll"
    }
    if (navBar.style.boxShadow == "none") {
        navBar.style.boxShadow = "#384349 0px 5px 15px";
    } else if (navBar.style.boxShadow == "#384349 0px 5px 15px") {
        navBar.style.boxShadow = "none";
    }
};
document.onclick = function(e){
    if (e.target !== showSideSectionBtn && e.target !== showSideSectionBtn.getElementsByTagName("p")[0]) {
        sideSection.classList.remove("show-side-section");
        body.classList.remove("layout");
        body.style.overflow = "scroll"
    }
}
// End Show Side Section




