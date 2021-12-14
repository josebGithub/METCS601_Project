
/** To collapse the section content */
function collapseSection() {

    var sectionid = document.getElementsByClassName("collapse-section");
    var i;

for (i = 0; i < sectionid.length; i++) {
  sectionid[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

}

collapseSection();


