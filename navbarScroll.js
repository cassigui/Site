let id = window.location.hash.substring(1);

document.addEventListener("DOMContentLoaded", () => {
  if (id == "") {
    document.getElementById("inicio-link").classList.add("active");
  }
  document.getElementById(id + "-link").classList.add("active");
})

const navlinks = document.querySelectorAll('.nav-link')
navlinks.forEach(navLinkEl => {
  navLinkEl.addEventListener("click", () => {
    document.querySelector('.active')?.classList.remove('active')
    navLinkEl.classList.add("active")
  })
})

window.addEventListener("scroll", () => {
  let header = document.querySelector("#header")
  let startSection = document.querySelector("#inicio").offsetTop

  header.classList.toggle('scrolling', window.scrollY > startSection + 600)
})

