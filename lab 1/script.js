function contentChanger(classname) {
  let elems = document
    .getElementsByClassName("content")[0]
    .querySelectorAll("p");

  elems.forEach((tag) => {
    tag.style.display = "none";
    console.log(tag);
  });

  document.getElementsByClassName(classname)[0].style.display = "block";
}
