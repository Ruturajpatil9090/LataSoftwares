const toggleMenu = ()=>{
  let menu = document.getElementById("toggleMenu")
  menu.classList.toggle("menuToggle")
  let nav = document.getElementById("nav")
  nav.classList.toggle("navToggle")
}

window.addEventListener('resize', e => {
  if (window.matchMedia(`(min-width: 801px)`).matches) {
    let nav = document.getElementById("nav")
    nav.classList.remove("navToggle")
    let menu = document.getElementById("toggleMenu")
    menu.classList.remove("menuToggle")
  }
});

export {toggleMenu}