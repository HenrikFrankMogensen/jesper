const hamburger = document.querySelector(".hamburger")
hamburger.onclick = function() {
  const navBar = document.querySelector(".nav-links")
  navBar.classList.toggle("active")
}